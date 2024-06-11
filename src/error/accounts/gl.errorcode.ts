import ErrorCategory, { ResponseCode, ResponseStatus } from "../error.category";

export const GLErrorCodes = {
  validate: {
    ourBranchId: `${ErrorCategory.Accounts.AddGLAccount}--${ResponseCode.error}`,
    accountId: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    accountName: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    accountDescription: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    accountType: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    currencyId: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    openingBalance: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    currentBalance: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    unSupervisedCredit: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    unSupervisedDebit: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    creditTurnOver: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    debitTurnOver: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    doNotAllowCredit: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    doNotAllowDebit: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    isReconcilable: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    operatorId: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    createdOn: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    isSupervisionRequired: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    supervisionReason: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    supervisorId: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    supervisedOn: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    modifiedOn: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    modifiedBy: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
    bankId: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.error}`,
  },
  success: {
    code: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.success}`,
    status: ResponseStatus.success,
    message: "General Ledger successfully created.",
  },

  newGLAccountFailed: {
    code: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "General Ledger Account Creation Failed",
  },

  glAccountFetchFailed: {
    code: `${ErrorCategory.Accounts.AddGLAccount}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "General Ledger Accounts Fetch Failed",
  },
};
