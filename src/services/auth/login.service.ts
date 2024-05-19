import { Service } from "typedi";
import { LoginUserDto } from "../../dtos/auth/login.dto";
import { DatabaseConnection } from "../../db";
import AuthenticationModel from "../../db/models/authentication.model";
import { LoginErrorCodes } from "../../error/auth/pending.signup.errorcode";
import { Response } from "express";
import { TRService } from "@config/types";

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

      if (!res) return resp.status(404).send(LoginErrorCodes.error);

      //GENERATE USER TOKEN DATA AND...
      return LoginErrorCodes.success;
    } catch (error) {
      // Handle error appropriately (e.g., logging, rethrowing, etc.)
      console.error("Error occurred while logging in user:", error);
      throw error; // Re-throw the error for the caller to handle
    }
  }
}
