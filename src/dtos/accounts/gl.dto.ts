import { IsNotEmpty, IsString, IsOptional,Length, IsDateString, IsNumber, Validate } from 'class-validator';
import { validateBit } from "../../utils/validateBit"
import { GLErrorCodes } from '../../error/accounts/gl.errorcode';


export class AddNewGLAccountDto {
  @IsString({
    message: 'The bank Id is not valid.',
    context: {
      code: GLErrorCodes.validate.bankId
    },
  })
  @IsNotEmpty({
    message: 'The bank Id is required.',
    context: {
      code: GLErrorCodes.validate.bankId         
    },
  })
  bankId!: string;

  @IsString({
    message: 'The branch Id is not valid.',
    context: {
      code: GLErrorCodes.validate.ourBranchId
    },
  })
  @IsNotEmpty({
    message: 'The branch Id is required.',
    context: {
      code: GLErrorCodes.validate.ourBranchId         
    },
  })
  ourBranchId!: string;

    @IsString({
    message: 'The account Id is not valid.',
    context: {
      code: GLErrorCodes.validate.accountId
    },
  })
  @Length(1,15, {
    message: 'The account Id length must be between 1 and 15 characters long.',
    context: {
      code: GLErrorCodes.validate.accountId
    },
  })
  @IsNotEmpty({
    message: 'The account Id is required.',
    context: {
      code: GLErrorCodes.validate.accountId         
    },
  })
  accountId!: string;

    @IsString({
    message: 'The account name is not valid.',
    context: {
      code: GLErrorCodes.validate.accountName
    },
  })
  @Length(1,50, {
    message: 'The account name length must be 50 characters long.',
    context: {
      code: GLErrorCodes.validate.accountName
    },
  })
    @IsNotEmpty({
    message: 'The account name is required.',
    context: {
      code: GLErrorCodes.validate.accountName         
    },
  })
  accountName!: string;

      @IsString({
    message: 'The account description is not valid.',
    context: {
      code: GLErrorCodes.validate.accountDescription
    },
  })
  @Length(1,50, {
    message: 'The account description length must be 50 characters long.',
    context: {
      code: GLErrorCodes.validate.accountDescription
    },
  })
  @IsOptional()
  accountDescription!: string;

        @IsString({
    message: 'The account Type is not valid.',
    context: {
      code: GLErrorCodes.validate.accountType
    },
  })
  @Length(1,1, {
    message: 'The account Type length must be 1 character long.',
    context: {
      code: GLErrorCodes.validate.accountType
    },
  })
  @IsOptional()
  accountType!: string;

        @IsString({
    message: 'The currency Id is not valid.',
    context: {
      code: GLErrorCodes.validate.currencyId
    },
  })
  @Length(1,5, {
    message: 'The currency Id length must be 5 character long.',
    context: {
      code: GLErrorCodes.validate.currencyId
    },
  })
  @IsOptional()
  currencyId!: string;

  @IsNumber()
  @IsOptional()
  openingBalance!: Number;

  @IsNumber()
  @IsOptional()
  currentBalance!: Number;

  @IsNumber()
  @IsOptional()
  unSupervisedCredit!: Number;

  @IsNumber()
  @IsOptional()
  unSupervisedDebit!: Number;

 @IsNumber()
  @IsOptional()
  creditTurnOver!: Number;

  @IsNumber()
  @IsOptional()
  debitTurnOver!: Number;

  @Validate(validateBit, {
    message: 'The $value is not a valid $property',
    context: {
      code: GLErrorCodes.validate.doNotAllowCredit
    },
  })
  @IsOptional()
  doNotAllowCredit!: Number;

  @Validate(validateBit, {
    message: 'The $value is not a valid $property',
    context: {
      code: GLErrorCodes.validate.doNotAllowDebit
    },
  })
  @IsOptional()
  doNotAllowDebit!: Number;

    @Validate(validateBit, {
    message: 'The $value is not a valid $property',
    context: {
      code: GLErrorCodes.validate.isReconcilable
    },
  })
  @IsOptional()
  isReconcilable!: Number;

  @IsString({
    message: 'The Operator ID is not valid.',
    context: {
      code: GLErrorCodes.validate.operatorId
    },
  })
  operatorId!: string;
}