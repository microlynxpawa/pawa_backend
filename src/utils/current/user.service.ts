import { Service } from "typedi";
import { DatabaseConnection } from "../../db";
import { AuthErrorCodes } from "../../error/auth/auth.errorcode";
import AuthenticationModel from "../../db/models/authentication.model";

@Service()
export class CurrentUserAuthentication {
  constructor(private db: DatabaseConnection) {}

  // WRITE OR CALL THE METHOD FOR ENCRYPTION AND DECRYPTION HERE.

  public async getCurrentUser(tokenData: any): Promise<any> {
    const { authenticationID, authenticationKey } = tokenData;
    //AFTER DESTRUCTURING PROPERTIES DECRYPT(if encrypted) AND CHECK AGAINST THE DB VALUE.
    const res = await AuthenticationModel.findOne({
      where: { authenticationID },
    });

    if (!res) {
      return AuthErrorCodes.authHeaderError;
    }

    const authID = res?.AuthenticationId;
    const authKey = res?.AuthenticationKey;

    if (authID !== authenticationID || authKey !== authenticationKey) {
      //reconstruct key and compare with object [auth-key] from db
      return AuthErrorCodes.authHeaderError;
    }

    return tokenData;
  }
}
