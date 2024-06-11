import ErrorCategory, { ResponseCode, ResponseStatus } from "../error.category";

export const BanksErrorCodes = {
  readingBanksError: {
    code: `${ErrorCategory.Banks}-${ResponseCode.error}`,
    status: ResponseStatus.error,
    message: "Unable to fetch banks information",
  },
  readingBranchesError: {
    code: `${ErrorCategory.Banks}-${ResponseCode.error}`,
    status: ResponseStatus.error,
    message: "Unable to fetch banks branches information",
  },
};
