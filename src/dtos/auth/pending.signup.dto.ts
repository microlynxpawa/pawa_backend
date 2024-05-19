import {
  IsNotEmpty,
  IsString,
  IsOptional,
  Length,
  IsEmail,
} from "class-validator";

import {
  PendingSignupErrorCodes,
  ConfirmSignupErrorCodes,
} from "../../error/auth/pending.signup.errorcode";

export class ResendValidationCodeDto {
  @IsEmail()
  @IsNotEmpty({
    message: "The Email address is required.",
    context: {
      code: ConfirmSignupErrorCodes.validate.EmailAddress,
    },
  })
  emailAddress!: string;
}

export class ConfirmPendingSignedupUserDto {
  @IsEmail()
  @IsNotEmpty({
    message: "The Email address is required.",
    context: {
      code: ConfirmSignupErrorCodes.validate.EmailAddress,
    },
  })
  emailAddress!: string;

  @IsString({
    message: "The Validation code is not valid.",
    context: {
      code: ConfirmSignupErrorCodes.validate.ValidationCode,
    },
  })
  @Length(6, 6, {
    message: "The Validation code length must be 6 characters long.",
    context: {
      code: ConfirmSignupErrorCodes.validate.ValidationCode,
    },
  })
  @IsNotEmpty({
    message: "The Validation code is required.",
    context: {
      code: ConfirmSignupErrorCodes.validate.ValidationCode,
    },
  })
  validationCode!: string;
}

export class AddPendingSignupDto {
  @IsEmail()
  @IsNotEmpty({
    message: "The Email address is required.",
    context: {
      code: PendingSignupErrorCodes.validate.EmailAddress,
    },
  })
  emailAddress!: string;

  @IsString({
    message: "The firstname is not valid.",
    context: {
      code: PendingSignupErrorCodes.validate.FirstName,
    },
  })
  @Length(1, 30, {
    message: "The firstname length must be between 1 and 30 characters long.",
    context: {
      code: PendingSignupErrorCodes.validate.FirstName,
    },
  })
  @IsNotEmpty({
    message: "The firstname is required.",
    context: {
      code: PendingSignupErrorCodes.validate.FirstName,
    },
  })
  firstName!: string;

  @IsString({
    message: "The middle name is not valid.",
    context: {
      code: PendingSignupErrorCodes.validate.MiddleName,
    },
  })
  @Length(0, 30, {
    message: "The middle name length must be between 1 and 30 characters long.",
    context: {
      code: PendingSignupErrorCodes.validate.MiddleName,
    },
  })
  @IsOptional()
  middleName!: string;

  @IsString({
    message: "The lastname is not valid.",
    context: {
      code: PendingSignupErrorCodes.validate.LastName,
    },
  })
  @Length(1, 30, {
    message: "The lastname length must be between 1 and 30 characters long.",
    context: {
      code: PendingSignupErrorCodes.validate.LastName,
    },
  })
  @IsNotEmpty({
    message: "The lastname is required.",
    context: {
      code: PendingSignupErrorCodes.validate.LastName,
    },
  })
  lastName!: string;

  @IsString({
    message: "The type of ID is not valid.",
    context: {
      code: PendingSignupErrorCodes.validate.TypeOfID,
    },
  })
  @Length(2, 15, {
    message: "The type of ID length must be between 2 and 15 characters long.",
    context: {
      code: PendingSignupErrorCodes.validate.TypeOfID,
    },
  })
  @IsNotEmpty({
    message: "The type of ID is required.",
    context: {
      code: PendingSignupErrorCodes.validate.TypeOfID,
    },
  })
  typeOfID!: string;

  @IsString({
    message: "The ID number is not valid.",
    context: {
      code: PendingSignupErrorCodes.validate.IDNumber,
    },
  })
  @Length(2, 15, {
    message: "The ID number length must be between 2 and 15 characters long.",
    context: {
      code: PendingSignupErrorCodes.validate.IDNumber,
    },
  })
  @IsNotEmpty({
    message: "The ID number is required.",
    context: {
      code: PendingSignupErrorCodes.validate.IDNumber,
    },
  })
  idNumber!: string;

  @IsString({
    message: "The Mobile Phone is not valid.",
    context: {
      code: PendingSignupErrorCodes.validate.MobilePhone,
    },
  })
  @Length(2, 20, {
    message:
      "The Mobile Phone length must be between 2 and 20 characters long.",
    context: {
      code: PendingSignupErrorCodes.validate.MobilePhone,
    },
  })
  @IsNotEmpty({
    message: "The Mobile Phone is required.",
    context: {
      code: PendingSignupErrorCodes.validate.MobilePhone,
    },
  })
  mobilePhone!: string;
}
