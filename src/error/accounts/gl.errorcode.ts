import { ErrorCategory } from '../error.category';

export const GLErrorCodes = {
  validate: {
    ourBranchId: `${ErrorCategory.Accounts.AddGLAccount}-000`,
    accountId: `${ErrorCategory.Accounts.AddGLAccount}-001`,
    accountName: `${ErrorCategory.Accounts.AddGLAccount}-002`,
    accountDescription: `${ErrorCategory.Accounts.AddGLAccount}-003`,
    accountType: `${ErrorCategory.Accounts.AddGLAccount}-004`,
    currencyId: `${ErrorCategory.Accounts.AddGLAccount}-005`,
    openingBalance: `${ErrorCategory.Accounts.AddGLAccount}-006`,
    currentBalance: `${ErrorCategory.Accounts.AddGLAccount}-007`,
    unSupervisedCredit: `${ErrorCategory.Accounts.AddGLAccount}-008`,
    unSupervisedDebit: `${ErrorCategory.Accounts.AddGLAccount}-009`,
    creditTurnOver: `${ErrorCategory.Accounts.AddGLAccount}-010`,
    debitTurnOver: `${ErrorCategory.Accounts.AddGLAccount}-011`,
    doNotAllowCredit: `${ErrorCategory.Accounts.AddGLAccount}-012`,
    doNotAllowDebit: `${ErrorCategory.Accounts.AddGLAccount}-013`,
    isReconcilable: `${ErrorCategory.Accounts.AddGLAccount}-014`,
    operatorId: `${ErrorCategory.Accounts.AddGLAccount}-015`,
    createdOn: `${ErrorCategory.Accounts.AddGLAccount}-016`,
    isSupervisionRequired: `${ErrorCategory.Accounts.AddGLAccount}-017`,
    supervisionReason: `${ErrorCategory.Accounts.AddGLAccount}-018`,
    supervisorId: `${ErrorCategory.Accounts.AddGLAccount}-019`,
    supervisedOn: `${ErrorCategory.Accounts.AddGLAccount}-020`,
    modifiedOn: `${ErrorCategory.Accounts.AddGLAccount}-021`,
    modifiedBy: `${ErrorCategory.Accounts.AddGLAccount}-022`,
    bankId: `${ErrorCategory.Accounts.AddGLAccount}-023`,
  },
  success: {
    code: `${ErrorCategory.Accounts.AddGLAccount}-000`,
    message: 'General Ledger successfully created.',
  },
};

























