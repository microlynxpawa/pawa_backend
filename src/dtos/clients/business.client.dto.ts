import { IsNotEmpty, IsString, IsOptional,Length, IsEmail, IsNumberString, IsDateString } from 'class-validator';

import { BusinessClientsErrorCodes } from '../../error/clients/business.clients.errorcode';

export class AddNewBusinesslientDto {
  @IsString({
    message: 'The bank Id is not valid.',
    context: {
      code: BusinessClientsErrorCodes.validate.bankId
    },
  })
  @IsNotEmpty({
    message: 'The bank Id is required.',
    context: {
      code: BusinessClientsErrorCodes.validate.bankId         
    },
  })
  bankId!: string;

  @IsString({
    message: 'The client Id is not valid.',
    context: {
      code: BusinessClientsErrorCodes.validate.clientId
    },
  })
  @Length(6,6, 
    {
    message: 'The client Id length must be 6 characters long.',
    context: {
      code: BusinessClientsErrorCodes.validate.clientId
    },
  }
  )
  @IsNotEmpty({
    message: 'The client Id is required.',
    context: {
      code: BusinessClientsErrorCodes.validate.clientId         
    },
  })
  @IsOptional()
  clientId!: string;

    @IsString({
    message: 'The client name is not valid.',
    context: {
      code: BusinessClientsErrorCodes.validate.clientName
    },
  })
  @Length(1,100, {
    message: 'The client name length must be between 1 and 100 characters long.',
    context: {
      code: BusinessClientsErrorCodes.validate.clientName
    },
  })
  @IsNotEmpty({
    message: 'The client name is required.',
    context: {
      code: BusinessClientsErrorCodes.validate.clientName         
    },
  })
  clientName!: string;

    @IsString({
    message: 'The registered address is not valid.',
    context: {
      code: BusinessClientsErrorCodes.validate.registeredAddress
    },
  })
  @Length(2,200, {
    message: 'The registered address length must be between 2 and 200 characters long.',
    context: {
      code: BusinessClientsErrorCodes.validate.registeredAddress
    },
  })
  @IsNotEmpty({
    message: 'The registered address is required.',
    context: {
      code: BusinessClientsErrorCodes.validate.registeredAddress         
    },
  })
  registeredAddress!: string;

  @IsString({
    message: 'The office address is not valid.',
    context: {
      code: BusinessClientsErrorCodes.validate.officeAddress
    },
  })
  @Length(2,200, {
    message: 'The office address length must be between 2 and 200 characters long.',
    context: {
      code: BusinessClientsErrorCodes.validate.officeAddress
    },
  })
  @IsOptional()
  officeAddress!: string;

  @IsNumberString()
  @Length(2,20, {
    message: 'The office phone number length must be between 2 and 20 characters long.',
    context: {
      code: BusinessClientsErrorCodes.validate.officePhone1
    },
  })
  @IsNotEmpty({
    message: 'The office phone number is required.',
    context: {
      code: BusinessClientsErrorCodes.validate.officePhone1         
    },
  })
  officePhone1!: string;

  @IsNumberString()
  @Length(2,20, {
    message: 'The office phone 2 length must be between 2 and 20 characters long.',
    context: {
      code: BusinessClientsErrorCodes.validate.officePhone2
    },
  })
  @IsOptional()
  officePhone2!: string;

  @IsEmail(
    {},
    {
      message: 'The first email is not valid',
      context: {
        code: BusinessClientsErrorCodes.validate.emailId1,
      },
    }
  )
  @IsOptional()
  emailId1!: string;

    @IsEmail(
    {},
    {
      message: 'The second email is not valid',
      context: {
        code: BusinessClientsErrorCodes.validate.emailId2,
      },
    }
  )
  @IsOptional()
  emailId2!: string;

  @IsDateString()
    @IsNotEmpty({
    message: 'The registration date is required.',
    context: {
      code: BusinessClientsErrorCodes.validate.registrationDate
    },
  })
  @IsNotEmpty({
    message: 'The registered date is required.',
    context: {
      code: BusinessClientsErrorCodes.validate.registrationDate         
    },
  })
  registrationDate!: Date;

  @IsString({
    message: 'The registration number is not valid.',
    context: {
      code: BusinessClientsErrorCodes.validate.registrationNumber
    },
  })
  @IsOptional()
  registrationNumber!: string;

  @IsString({
    message: 'The TIN number is not valid.',
    context: {
      code: BusinessClientsErrorCodes.validate.tinNumber
    },
  })
  @IsOptional()
  tinNumber!: string;

  @IsString({
    message: 'The Operator ID is not valid.',
    context: {
      code: BusinessClientsErrorCodes.validate.operatorId
    },
  })
    @IsOptional()
  operatorId!: string;
}