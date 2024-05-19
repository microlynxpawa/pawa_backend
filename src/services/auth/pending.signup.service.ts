import { Service } from "typedi";
import {
  AddPendingSignupDto,
  ConfirmPendingSignedupUserDto,
  ResendValidationCodeDto,
} from "../../dtos/auth/pending.signup.dto";
import { DatabaseConnection } from "../../db";
import {
  ConfirmSignupErrorCodes,
  PendingSignupErrorCodes,
} from "../../error/auth/pending.signup.errorcode";
import { TRService } from "@config/types";
import PendingAuthenticationModel from "../../db/models/pending.signup.model";
import generateValidationCode, {
  generateDefaultPassword,
} from "../../utils/gen.random";
import {
  sendSignUpConfirmationEmail,
  sendVerificationEmail,
} from "../../utils/mails/mail.fun";
import { Response } from "express";

const defaultValue: string = "";
const maxValidationTime: number = 3;

@Service()
export class PendingSignupService {
  constructor(private db: DatabaseConnection) {}
  public async SignupPendingUser(
    dto: AddPendingSignupDto
  ): Promise<TRService | undefined> {
    try {
      //generate the validation code
      const validationCode = generateValidationCode();

      // Set default values if properties are null or undefined
      const {
        firstName,
        middleName = defaultValue,
        lastName,
        emailAddress,
        typeOfID,
        idNumber,
        mobilePhone,
      } = dto;

      await this.db.instance?.query(
        "CALL prcAddEditPendingAuthentication(:emailAddress, :firstName, :middleName, :lastName, :typeOfID, :idNumber, :mobilePhone, :validationCode)",
        {
          replacements: {
            emailAddress,
            firstName,
            middleName,
            lastName,
            typeOfID,
            idNumber,
            mobilePhone,
            validationCode,
          },
        }
      );

      //SEND EMAIL
      await sendVerificationEmail(emailAddress, validationCode, firstName);

      return {
        code: PendingSignupErrorCodes.success.code,
        message: PendingSignupErrorCodes.success.message,
      };
    } catch (error) {
      // Handle error appropriately (e.g., logging, rethrowing, etc.)
      console.error("Error occurred while adding new signed up user:", error);
      throw error; // Re-throw the error for the caller to handle
    }
  }

  public async confrimPendingAuthUser(
    dto: ConfirmPendingSignedupUserDto,
    resp: Response
  ): Promise<any> {
    const { emailAddress, validationCode } = dto;
    const authenticationType = "P";
    try {
      const res: any = await this.db.instance?.query(
        "CALL prcGetPendingAuthenticationDetails(:authenticationType, :emailAddress)",
        {
          replacements: {
            authenticationType,
            emailAddress,
          },
        }
      );
      const DBValidationCode = res?.[0]["ValidationCode"];
      const firstName = res?.[0]["FirstName"];

      //CHECK IF NUMBER OF VALIDATION HERE IF NOT EXCEEDED
      const numberOfValidations = res?.[0]["NumberOfValidation"];
      if (numberOfValidations >= maxValidationTime) {
        return resp.status(400).send({
          code: ConfirmSignupErrorCodes.maxValidationError.code,
          message: ConfirmSignupErrorCodes.maxValidationError.message,
        });
      }

      if (DBValidationCode != validationCode) {
        //WORK ON INCREASING THE NUMBER OF VALIDATION HERE.
        const newValidationNumber = numberOfValidations + 1;
        await this.db.instance?.query(
          "Update t_PendingAuthentication Set NumberOfValidation = :newValidationNumber WHERE EmailAddress = :emailAddress",
          {
            replacements: {
              newValidationNumber,
              emailAddress,
            },
          }
        );
        return resp.status(400).send({
          code: ConfirmSignupErrorCodes.error.code,
          message: ConfirmSignupErrorCodes.error.message,
        });
      }
      //TODO: DECIDE OF PASSWORD ENCRYPTION.
      //CHECK TIME GIVEN HERE FOR CODE VERIFICATION 30 MINUTES.
      const accessPassword = generateDefaultPassword();
      const BankId = "B001";
      const authenticationKey = "A00001"; //DEFAULT
      await this.db.instance?.query(
        "CALL prcCompletePendingAuthentication(:BankId, :emailAddress, :accessPassword, :authenticationKey)",
        {
          replacements: {
            BankId,
            emailAddress,
            accessPassword,
            authenticationKey,
          },
        }
      );
      await sendSignUpConfirmationEmail(
        emailAddress,
        accessPassword,
        firstName
      );
      return {
        code: ConfirmSignupErrorCodes.success.code,
        message: ConfirmSignupErrorCodes.success.message,
      };
    } catch (error) {
      // Handle error appropriately (e.g., logging, rethrowing, etc.)
      console.error("Error occurred while confirming signed up user:", error);
      throw error; // Re-throw the error for the caller to handle
    }
  }

  public async resendPendingUserCode(
    dto: ResendValidationCodeDto,
    resp: Response
  ): Promise<any> {
    const { emailAddress } = dto;
    const authenticationType = "P";
    try {
      const res: any = await this.db.instance?.query(
        "CALL prcGetPendingAuthenticationDetails(:authenticationType, :emailAddress)",
        {
          replacements: {
            authenticationType,
            emailAddress,
          },
        }
      );
      const firstName = res?.[0]["FirstName"];

      //CHECK IF NUMBER OF VALIDATION HERE IF NOT EXCEEDED
      const numberOfValidations = res?.[0]["NumberOfValidation"];
      if (numberOfValidations >= maxValidationTime) {
        return resp.status(400).send({
          code: ConfirmSignupErrorCodes.maxValidationError.code,
          message: ConfirmSignupErrorCodes.maxValidationError.message,
        });
      }

      //generate the validation code
      const validationCode = generateValidationCode();

      await this.db.instance?.query(
        "CALL prcUpdateValidationCode(:emailAddress, :validationCode)",
        {
          replacements: {
            emailAddress,
            validationCode,
          },
        }
      );

      //SEND EMAIL
      await sendVerificationEmail(emailAddress, validationCode, firstName);

      return {
        code: PendingSignupErrorCodes.resendCodeSuccess.code,
        message: PendingSignupErrorCodes.resendCodeSuccess.message,
      };
    } catch (error) {
      // Handle error appropriately (e.g., logging, rethrowing, etc.)
      console.error("Error occurred while confirming signed up user:", error);
      throw error; // Re-throw the error for the caller to handle
    }
  }
}
