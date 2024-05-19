import { Middleware, ExpressMiddlewareInterface } from "routing-controllers";
import { Request, Response, NextFunction } from "express";
import { Service } from "typedi";
import { AuthErrorCodes } from "../error/auth/auth.errorcode";
import config from "config";

const tokenValue = config.get("tokenValue");

@Service()
@Middleware({ type: "before" })
export class AuthTokenMiddleware implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction) {
    if (
      !req.headers["authentication-token"] ||
      req.headers["authentication-token"] !== tokenValue
    ) {
      return res.status(401).send(AuthErrorCodes.authHeaderError);
    }
    //A function down here can also check the correctness of the token
    //This token can be encrypted as a payload of user DATA.
    next(); // Call next() to pass control to the next middleware or route handler
  }
}
