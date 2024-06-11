import ErrorCategory, { ResponseCode, ResponseStatus } from "../error.category";

export const ProductsErrorCodes = {
  validate: {
    productId: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    productName: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    productTypeId: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    accountIdPrefix: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    currencyId: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    creditInterestRate: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    debitInterestRate: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    creditInterestProcedure: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    debitInterestProcedure: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    debitInterestDays: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    creditInterestDays: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    creditInterestStart: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    debitInterestStart: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    creditInterestFrequency: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    debitInterestFrequency: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    bankId: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    minimumBalance: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    accountPerCustomer: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    isChequeBookAllowed: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    doNotAllowCredit: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    doNotAllowDebit: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    canGoInCredit: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    canGoInDebit: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    enforceBioAuthentication: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    dormantProductId: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    dormantDays: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    isBlocked: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    operatorId: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    createdOn: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    isSupervisionRequired: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    supervisionReason: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    supervisedBy: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    supervisedOn: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    modifiedOn: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
    modifiedBy: `${ErrorCategory.Products.AddProduct}-${ResponseCode.error}`,
  },
  success: {
    code: `${ErrorCategory.Products.AddProduct}-${ResponseCode.success}`,
    status: ResponseStatus.success,
    message: "Product successfully created.",
  },

  newProductFailed: {
    code: `${ErrorCategory.Products.AddProduct}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "Product creation failed.",
  },

  fetchProductFailed: {
    code: `${ErrorCategory.Products.AddProduct}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "Fetch Products Detail failed.",
  },

  readingBankProductIDFailed: {
    code: `${ErrorCategory.Products.AddProduct}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "Fetch Banks Product ID failed.",
  },
};

export const ProductGLSettingsErrorCodes = {
  validate: {
    bankId: `${ErrorCategory.Products.AddProductGLSettings}-${ResponseCode.error}`,
    ourBranchId: `${ErrorCategory.Products.AddProductGLSettings}-${ResponseCode.error}`,
    productId: `${ErrorCategory.Products.AddProductGLSettings}-${ResponseCode.error}`,
    settingId: `${ErrorCategory.Products.AddProductGLSettings}-${ResponseCode.error}`,
    gLAccountId: `${ErrorCategory.Products.AddProductGLSettings}-${ResponseCode.error}`,
    createdBy: `${ErrorCategory.Products.AddProductGLSettings}-${ResponseCode.error}`,
  },
  success: {
    code: `${ErrorCategory.Products.AddProductGLSettings}-${ResponseCode.success}`,
    status: ResponseStatus.success,
    message: "Product GL Settings successfully created.",
  },

  newProductGLSettingFailed: {
    code: `${ErrorCategory.Products.AddProductGLSettings}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "Product GL Settings creation failed.",
  },

  fetchProductGLSettingFailed: {
    code: `${ErrorCategory.Products.AddProductGLSettings}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "Fetch Product GL Settings failed.",
  },
};
