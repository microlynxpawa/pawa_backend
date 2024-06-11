import ErrorCategory, { ResponseCode, ResponseStatus } from "../error.category";

export const AppErrorCodes = {
  appConfigError: {
    code: `${ErrorCategory.AppError}-${ResponseCode.error}`,
    status: ResponseStatus.error,
    message: "Unable to read configurations",
  },

  appMailTransportError: {
    code: `${ErrorCategory.AppError}-${ResponseCode.error}`,
    status: ResponseStatus.error,
    message: "Unable to fetch mail transport",
  },

  codeGenError: {
    code: `${ErrorCategory.AppError}-${ResponseCode.error}`,
    status: ResponseStatus.error,
    message: "Unable to generate code",
  },
};
