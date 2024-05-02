import { IsNotEmpty, IsString, IsOptional,Length, IsEmail, Validate, IsNumberString, IsDateString } from 'class-validator';

import { ClientsDetailsErrorCodes, ClientsErrorCodes } from '../../error/clients/clients.errorcode';
import { validateClientType } from '../../utils/validateClientType';

export class QueryClientDetails {
    @IsString()
  @IsNotEmpty({
    message: 'The bank Id is required.',
    context: {
      code: ClientsDetailsErrorCodes.validate.bankId         
    },
  })
  bankId!: string;

  @IsString()
  @Length(1,6, 
    {
    message: 'The client Id length must be 6 characters long.',
    context: {
      code: ClientsDetailsErrorCodes.validate.clientId
    },
  }
  )
  @IsNotEmpty({
    message: 'The client Id is required.',
    context: {
      code: ClientsDetailsErrorCodes.validate.clientId         
    },
  })
  @IsOptional()
  clientId!: string;

  @Validate(validateClientType, {
    message: 'The $value is not a valid $property',
    context: {
      code: ClientsDetailsErrorCodes.validate.clientType
    },
  })
  @IsNotEmpty({
    message: 'The client title is required.',
    context: {
      code: ClientsDetailsErrorCodes.validate.clientType         
    },
  })
  clientType!: string;
}

export class AddNewClientDto {
  @IsString({
    message: 'The bank Id is not valid.',
    context: {
      code: ClientsErrorCodes.validate.bankId
    },
  })
  @IsNotEmpty({
    message: 'The bank Id is required.',
    context: {
      code: ClientsErrorCodes.validate.bankId         
    },
  })
  bankId!: string;

  @IsString({
    message: 'The client Id is not valid.',
    context: {
      code: ClientsErrorCodes.validate.clientId
    },
  })
  @Length(6,6, 
    {
    message: 'The client Id length must be 6 characters long.',
    context: {
      code: ClientsErrorCodes.validate.clientId
    },
  }
  )
  @IsNotEmpty({
    message: 'The client Id is required.',
    context: {
      code: ClientsErrorCodes.validate.clientId         
    },
  })
  @IsOptional()
  clientId!: string;

    @IsString({
    message: 'The client title is not valid.',
    context: {
      code: ClientsErrorCodes.validate.title
    },
  })
  @Length(1,10, {
    message: 'The title length must be between 1 and 10 characters long.',
    context: {
      code: ClientsErrorCodes.validate.title
    },
  })
  @IsNotEmpty({
    message: 'The client title is required.',
    context: {
      code: ClientsErrorCodes.validate.title         
    },
  })
  title!: string;

    @IsString({
    message: 'The client name is not valid.',
    context: {
      code: ClientsErrorCodes.validate.clientName
    },
  })
  @Length(1,100, {
    message: 'The client name length must be between 1 and 100 characters long.',
    context: {
      code: ClientsErrorCodes.validate.clientName
    },
  })
  @IsNotEmpty({
    message: 'The client name is required.',
    context: {
      code: ClientsErrorCodes.validate.clientName         
    },
  })
  clientName!: string;

    @IsString({
    message: 'The gender is not valid.',
    context: {
      code: ClientsErrorCodes.validate.gender
    },
  })
  @Length(2,10, {
    message: 'The gender length must be between 2 and 10 characters long.',
    context: {
      code: ClientsErrorCodes.validate.gender
    },
  })
  @IsNotEmpty({
    message: 'The gender is required.',
    context: {
      code: ClientsErrorCodes.validate.gender         
    },
  })
  gender!: string;

    @IsString({
    message: 'The home address is not valid.',
    context: {
      code: ClientsErrorCodes.validate.homeAddress
    },
  })
  @Length(2,200, {
    message: 'The home address length must be between 2 and 200 characters long.',
    context: {
      code: ClientsErrorCodes.validate.homeAddress
    },
  })
  @IsNotEmpty({
    message: 'The Home address is required.',
    context: {
      code: ClientsErrorCodes.validate.homeAddress         
    },
  })
  homeAddress!: string;

  @IsString({
    message: 'The business address is not valid.',
    context: {
      code: ClientsErrorCodes.validate.businessAddress
    },
  })
  @Length(2,200, {
    message: 'The business address length must be between 2 and 200 characters long.',
    context: {
      code: ClientsErrorCodes.validate.businessAddress
    },
  })
  @IsOptional()
  businessAddress!: string;

  @IsNumberString()
  @Length(2,20, {
    message: 'The mobile number length must be between 2 and 20 characters long.',
    context: {
      code: ClientsErrorCodes.validate.mobileNumber
    },
  })
  @IsNotEmpty({
    message: 'The mobile number is required.',
    context: {
      code: ClientsErrorCodes.validate.mobileNumber         
    },
  })
  mobileNumber!: string;

  @IsNumberString()
  @Length(2,20, {
    message: 'The office phone length must be between 2 and 20 characters long.',
    context: {
      code: ClientsErrorCodes.validate.officePhone
    },
  })
  @IsOptional()
  officePhone!: string;

  @IsEmail(
    {},
    {
      message: 'The email is not valid',
      context: {
        code: ClientsErrorCodes.validate.emailId,
      },
    }
  )
  @IsNotEmpty({
    message: 'The email is required.',
    context: {
      code: ClientsErrorCodes.validate.emailId
    },
  })
  @IsOptional()
  emailId!: string;

  @IsDateString()
    @IsNotEmpty({
    message: 'The date of birth is required.',
    context: {
      code: ClientsErrorCodes.validate.dateOfBirth
    },
  })
  dateOfBirth!: Date;

  @IsString({
    message: 'The nationality is not valid.',
    context: {
      code: ClientsErrorCodes.validate.nationality
    },
  })
  @IsNotEmpty({
    message: 'The nationality is required.',
    context: {
      code: ClientsErrorCodes.validate.nationality         
    },
  })
  nationality!: string;

  @IsString({
    message: 'The type of ID is not valid.',
    context: {
      code: ClientsErrorCodes.validate.typeOfId
    },
  })
  @IsNotEmpty({
    message: 'The type of ID is required.',
    context: {
      code: ClientsErrorCodes.validate.typeOfId         
    },
  })
  typeOfId!: string;

  @IsString({
    message: 'The ID number is not valid.',
    context: {
      code: ClientsErrorCodes.validate.idNumber
    },
  })
  @IsNotEmpty({
    message: 'The Id number is required.',
    context: {
      code: ClientsErrorCodes.validate.idNumber         
    },
  })
  idNumber!: string;

  @IsString({
    message: 'The TIN number is not valid.',
    context: {
      code: ClientsErrorCodes.validate.tinNumber
    },
  })
  @IsOptional()
  tinNumber!: string;

  @IsString({
    message: 'The Operator ID is not valid.',
    context: {
      code: ClientsErrorCodes.validate.operatorId
    },
  })
  @IsNotEmpty({
    message: 'The operator is required.',
    context: {
      code: ClientsErrorCodes.validate.operatorId         
    },
  })
  operatorId!: string;
}