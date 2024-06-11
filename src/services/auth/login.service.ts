import { Response } from "express";
import { Service } from "typedi";
import { LoginUserDto } from "../../dtos/auth/login.dto";
import { DatabaseConnection } from "../../db";
import AuthenticationModel from "../../db/models/authentication.model";
import { LoginErrorCodes } from "../../error/auth/pending.signup.errorcode";
import Logger from "../../utils/winston";

@Service()
export class LoginUserService {
  constructor(private db: DatabaseConnection) {}
  public async loginAuthUser(dto: LoginUserDto, resp: Response): Promise<any> {
    const { emailAddress, password } = dto;
    //TODO: Decrypt password.
    try {
      const res = await AuthenticationModel.findOne({
        where: { AuthenticationId: emailAddress, SecretKey: password },
      });

      if (!res) return resp.status(400).send(LoginErrorCodes.loginFailed);

      //GENERATE USER TOKEN DATA AND...
      return LoginErrorCodes.loginSuccess;
    } catch (error) {
      Logger.error("Error occurred while logging in user:", error);
      return LoginErrorCodes.loginFailed;
      //throw error; // Re-throw the error for the caller to handle
    }
  }
}
