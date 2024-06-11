import { Service } from "typedi";
import { AddNewGLAccountDto } from "../../dtos/accounts/gl.dto";
import { DatabaseConnection } from "../../db";
import { GLErrorCodes } from "../../error/accounts/gl.errorcode";
import { TRService } from "@config/types";
import GLAccountsModel from "../../db/models/gl.model";
import Logger from "../../utils/winston";
import { QueryProductGLSettings } from "../../dtos/products/products.dto";

const defaultValue: any = null;

@Service()
export class GeneralLedgerService {
  constructor(private db: DatabaseConnection) {}
  public async AddNewGLAccount(
    dto: AddNewGLAccountDto
  ): Promise<TRService | undefined> {
    try {
      // BANK ID WILL BE FETCHED FROM THE AUTHENTICATED USER TRYING TO ADD THE NEW CLIENT
      const bankId = dto.bankId;

      // Set default values if properties are null or undefined
      const {
        ourBranchId,
        accountId,
        accountName,
        accountDescription = defaultValue,
        accountType = defaultValue,
        currencyId = defaultValue,
        openingBalance = defaultValue,
        currentBalance = defaultValue,
        unSupervisedCredit = defaultValue,
        unSupervisedDebit = defaultValue,
        creditTurnOver = defaultValue,
        debitTurnOver = defaultValue,
        doNotAllowCredit = defaultValue,
        doNotAllowDebit = defaultValue,
        isReconcilable = defaultValue,
        operatorId,
      } = dto;

      await this.db.instance?.query(
        "CALL prcAddEditGLAccount(:bankId, :ourBranchId, :accountId, :accountName, :accountDescription, :accountType, :currencyId, :openingBalance, :currentBalance, :unSupervisedCredit, :unSupervisedDebit, :creditTurnOver, :debitTurnOver, :doNotAllowCredit, :doNotAllowDebit, :isReconcilable, :operatorId)",
        {
          replacements: {
            bankId,
            ourBranchId,
            accountId,
            accountName,
            accountDescription,
            accountType,
            currencyId,
            openingBalance,
            currentBalance,
            unSupervisedCredit,
            unSupervisedDebit,
            creditTurnOver,
            debitTurnOver,
            doNotAllowCredit,
            doNotAllowDebit,
            isReconcilable,
            operatorId,
          },
        }
      );

      return GLErrorCodes.success;
    } catch (error) {
      Logger.error("Error occurred while adding new GL Account:", error);
      return GLErrorCodes.newGLAccountFailed;
      //throw error; // Re-throw the error for the caller to handle
    }
  }

  public async getAllGLAccounts(dto: QueryProductGLSettings): Promise<any> {
    const { bankId } = dto;
    try {
      const results = await this.db.instance?.query(
        "select *  from t_glaccounts where bankId = :bankId",
        {
          replacements: {
            bankId,
          },
        }
      );
      if (!results) return [];
      const [rows] = results;
      return rows;
    } catch (error) {
      Logger.error("Error occurred while fetching GL Accounts:", error);
      return GLErrorCodes.glAccountFetchFailed;
      //throw error; // Re-throw the error for the caller to handle
    }
  }
}
