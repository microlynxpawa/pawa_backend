import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

import { LoginErrorCodes } from '../../error/auth/pending.signup.errorcode';

export class LoginUserDto {
    @IsEmail()
  @IsNotEmpty({
    message: 'The Email address is required.',
    context: {
      code: LoginErrorCodes.validate.EmailAddress         
    },
  })
  emailAddress!: string;

   @IsString({
    message: 'The Password is not valid.',
    context: {
      code: LoginErrorCodes.validate.Password
    },
  })
    @IsNotEmpty({
    message: 'The Password is required.',
    context: {
      code: LoginErrorCodes.validate.Password         
    },
  })
  password!: string;
}

