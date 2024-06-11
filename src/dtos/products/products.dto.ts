import {
  IsNotEmpty,
  IsString,
  IsOptional,
  Length,
  IsDateString,
  IsNumber,
  Validate,
} from "class-validator";
import { validateBit } from "../../utils/validateBit";
import {
  ProductsErrorCodes,
  ProductGLSettingsErrorCodes,
} from "../../error/products/products.errorcode";

export class QueryProductDetails {
  @IsString()
  @IsNotEmpty({
    message: "The bank Id is required.",
    context: {
      code: ProductsErrorCodes.validate.bankId,
    },
  })
  bankId!: string;

  @IsString()
  @Length(1, 6, {
    message: "The product Id length must be between 1 to 6 characters long.",
    context: {
      code: ProductsErrorCodes.validate.productId,
    },
  })
  @IsNotEmpty({
    message: "The product Id is required.",
    context: {
      code: ProductsErrorCodes.validate.productId,
    },
  })
  productId!: string;
}

export class QueryProductGLSettings {
  @IsString()
  @IsNotEmpty({
    message: "The bank Id is required.",
    context: {
      code: ProductsErrorCodes.validate.bankId,
    },
  })
  bankId!: string;
}

export class AddNewProductGLSettingsDto {
  @IsString({
    message: "The bank Id is not valid.",
    context: {
      code: ProductGLSettingsErrorCodes.validate.bankId,
    },
  })
  @IsNotEmpty({
    message: "The bank Id is required.",
    context: {
      code: ProductGLSettingsErrorCodes.validate.bankId,
    },
  })
  bankId!: string;

  @IsString({
    message: "The branch Id is not valid.",
    context: {
      code: ProductGLSettingsErrorCodes.validate.ourBranchId,
    },
  })
  @IsNotEmpty({
    message: "The branch Id is required.",
    context: {
      code: ProductGLSettingsErrorCodes.validate.ourBranchId,
    },
  })
  ourBranchId!: string;

  @IsString({
    message: "The product Id is not valid.",
    context: {
      code: ProductGLSettingsErrorCodes.validate.productId,
    },
  })
  @IsNotEmpty({
    message: "The product Id is required.",
    context: {
      code: ProductGLSettingsErrorCodes.validate.productId,
    },
  })
  productId!: string;

  @IsNumber()
  @IsNotEmpty({
    message: "The setting Id is required.",
    context: {
      code: ProductGLSettingsErrorCodes.validate.settingId,
    },
  })
  settingId!: string;

  @IsString({
    message: "The GL Account Id is not valid.",
    context: {
      code: ProductGLSettingsErrorCodes.validate.gLAccountId,
    },
  })
  @IsNotEmpty({
    message: "The GL Account Id is required.",
    context: {
      code: ProductGLSettingsErrorCodes.validate.gLAccountId,
    },
  })
  gLAccountId!: string;

  @IsString({
    message: "The created by value is not valid.",
    context: {
      code: ProductGLSettingsErrorCodes.validate.createdBy,
    },
  })
  @IsNotEmpty({
    message: "The created by value is required.",
    context: {
      code: ProductGLSettingsErrorCodes.validate.createdBy,
    },
  })
  createdBy!: string;
}

export class AddNewProductDto {
  @IsString({
    message: "The bank Id is not valid.",
    context: {
      code: ProductsErrorCodes.validate.bankId,
    },
  })
  @IsNotEmpty({
    message: "The bank Id is required.",
    context: {
      code: ProductsErrorCodes.validate.bankId,
    },
  })
  bankId!: string;

  @IsString({
    message: "The product Id is not valid.",
    context: {
      code: ProductsErrorCodes.validate.productId,
    },
  })
  @Length(1, 6, {
    message: "The product Id length must be 6 characters long.",
    context: {
      code: ProductsErrorCodes.validate.productId,
    },
  })
  @IsNotEmpty({
    message: "The product Id is required.",
    context: {
      code: ProductsErrorCodes.validate.productId,
    },
  })
  productId!: string;

  @IsString({
    message: "The product name is not valid.",
    context: {
      code: ProductsErrorCodes.validate.productName,
    },
  })
  @Length(1, 150, {
    message:
      "The product name length must be between 1 and 150 characters long.",
    context: {
      code: ProductsErrorCodes.validate.productName,
    },
  })
  @IsNotEmpty({
    message: "The product name is required.",
    context: {
      code: ProductsErrorCodes.validate.productName,
    },
  })
  productName!: string;

  @IsString({
    message: "The product type Id is not valid.",
    context: {
      code: ProductsErrorCodes.validate.productTypeId,
    },
  })
  @Length(1, 3, {
    message: "The product type Id length must be 3 characters long.",
    context: {
      code: ProductsErrorCodes.validate.productTypeId,
    },
  })
  @IsNotEmpty({
    message: "The product type Id is required.",
    context: {
      code: ProductsErrorCodes.validate.productTypeId,
    },
  })
  productTypeId!: string;

  @IsString({
    message: "The account id prefix is not valid.",
    context: {
      code: ProductsErrorCodes.validate.accountIdPrefix,
    },
  })
  @Length(1, 3, {
    message: "The account id prefix length must be 3 characters long.",
    context: {
      code: ProductsErrorCodes.validate.accountIdPrefix,
    },
  })
  @IsNotEmpty({
    message: "The account id prefix is required.",
    context: {
      code: ProductsErrorCodes.validate.productTypeId,
    },
  })
  accountIdPrefix!: string;

  @IsString({
    message: "The currency Id is not valid.",
    context: {
      code: ProductsErrorCodes.validate.currencyId,
    },
  })
  @Length(1, 5, {
    message: "The currency Id length must be 5 characters long.",
    context: {
      code: ProductsErrorCodes.validate.currencyId,
    },
  })
  @IsNotEmpty({
    message: "The currency Id is required.",
    context: {
      code: ProductsErrorCodes.validate.currencyId,
    },
  })
  currencyId!: string;

  @IsNumber()
  @IsOptional()
  creditInterestRate!: Number;

  @IsNumber()
  @IsOptional()
  debitInterestRate!: Number;

  @IsString({
    message: "The creditInterestProcedure is not valid.",
    context: {
      code: ProductsErrorCodes.validate.creditInterestProcedure,
    },
  })
  @Length(1, 10, {
    message: "The creditInterestProcedure length must be 10 characters long.",
    context: {
      code: ProductsErrorCodes.validate.creditInterestProcedure,
    },
  })
  @IsOptional()
  creditInterestProcedure!: string;

  @IsString({
    message: "The debitInterestProcedure is not valid.",
    context: {
      code: ProductsErrorCodes.validate.debitInterestProcedure,
    },
  })
  @Length(1, 10, {
    message: "The debitInterestProcedure length must be 10 characters long.",
    context: {
      code: ProductsErrorCodes.validate.debitInterestProcedure,
    },
  })
  @IsOptional()
  debitInterestProcedure!: string;

  @IsNumber()
  @IsOptional()
  debitInterestDays!: Number;

  @IsNumber()
  @IsOptional()
  creditInterestDays!: Number;

  @IsDateString()
  @IsOptional()
  creditInterestStart!: Date;

  @IsDateString()
  @IsOptional()
  debitInterestStart!: Date;

  @IsString({
    message: "The creditInterestFrequency is not valid.",
    context: {
      code: ProductsErrorCodes.validate.creditInterestFrequency,
    },
  })
  @Length(1, 10, {
    message: "The creditInterestFrequency length must be 10 characters long.",
    context: {
      code: ProductsErrorCodes.validate.creditInterestFrequency,
    },
  })
  @IsOptional()
  creditInterestFrequency!: string;

  @IsString({
    message: "The debitInterestFrequency is not valid.",
    context: {
      code: ProductsErrorCodes.validate.debitInterestFrequency,
    },
  })
  @Length(1, 10, {
    message: "The debitInterestFrequency length must be 10 characters long.",
    context: {
      code: ProductsErrorCodes.validate.debitInterestFrequency,
    },
  })
  @IsOptional()
  debitInterestFrequency!: string;

  @IsNumber()
  @IsOptional()
  minimumBalance!: Number;

  @IsNumber()
  @IsOptional()
  accountPerCustomer!: Number;

  @Validate(validateBit, {
    message: "The $value is not a valid $property",
    context: {
      code: ProductsErrorCodes.validate.isChequeBookAllowed,
    },
  })
  @IsOptional()
  isChequeBookAllowed!: Number;

  @Validate(validateBit, {
    message: "The $value is not a valid $property",
    context: {
      code: ProductsErrorCodes.validate.doNotAllowCredit,
    },
  })
  @IsOptional()
  doNotAllowCredit!: Number;

  @Validate(validateBit, {
    message: "The $value is not a valid $property",
    context: {
      code: ProductsErrorCodes.validate.doNotAllowDebit,
    },
  })
  @IsOptional()
  doNotAllowDebit!: Number;

  @Validate(validateBit, {
    message: "The $value is not a valid $property",
    context: {
      code: ProductsErrorCodes.validate.canGoInCredit,
    },
  })
  @IsOptional()
  canGoInCredit!: Number;

  @Validate(validateBit, {
    message: "The $value is not a valid $property",
    context: {
      code: ProductsErrorCodes.validate.canGoInDebit,
    },
  })
  @IsOptional()
  canGoInDebit!: Number;

  @Validate(validateBit, {
    message: "The $value is not a valid $property",
    context: {
      code: ProductsErrorCodes.validate.enforceBioAuthentication,
    },
  })
  @IsOptional()
  enforceBioAuthentication!: Number;

  @IsString({
    message: "The dormant ProductId is not valid.",
    context: {
      code: ProductsErrorCodes.validate.dormantProductId,
    },
  })
  @Length(1, 6, {
    message: "The dormant ProductId length must be 6 characters long.",
    context: {
      code: ProductsErrorCodes.validate.dormantProductId,
    },
  })
  @IsOptional()
  dormantProductId!: Number;

  @IsNumber()
  @IsOptional()
  dormantDays!: Number;

  @Validate(validateBit, {
    message: "The $value is not a valid $property",
    context: {
      code: ProductsErrorCodes.validate.isBlocked,
    },
  })
  @IsOptional()
  isBlocked!: Number;

  @IsString({
    message: "The Operator ID is not valid.",
    context: {
      code: ProductsErrorCodes.validate.operatorId,
    },
  })
  operatorId!: string;
}
