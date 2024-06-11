import ErrorCategory, { ResponseCode, ResponseStatus } from "../error.category";

export const AuthErrorCodes = {
  authHeaderError: {
    code: `${ErrorCategory.Authentication.AuthHeader}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "You cannot access this resource",
  },
};
