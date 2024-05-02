import { ErrorCategory } from '../error.category';

export const ProductsErrorCodes = {
  validate: {
    productId: `${ErrorCategory.Products.AddProduct}-000`,
    productName: `${ErrorCategory.Products.AddProduct}-001`,
    productTypeId: `${ErrorCategory.Products.AddProduct}-002`,
    accountIdPrefix: `${ErrorCategory.Products.AddProduct}-003`,
    currencyId: `${ErrorCategory.Products.AddProduct}-004`,
    creditInterestRate: `${ErrorCategory.Products.AddProduct}-005`,
    debitInterestRate: `${ErrorCategory.Products.AddProduct}-006`,
    creditInterestProcedure: `${ErrorCategory.Products.AddProduct}-007`,
    debitInterestProcedure: `${ErrorCategory.Products.AddProduct}-008`,
    debitInterestDays: `${ErrorCategory.Products.AddProduct}-009`,
    creditInterestDays: `${ErrorCategory.Products.AddProduct}-010`,
    creditInterestStart: `${ErrorCategory.Products.AddProduct}-011`,
    debitInterestStart: `${ErrorCategory.Products.AddProduct}-012`,
    creditInterestFrequency: `${ErrorCategory.Products.AddProduct}-013`,
    debitInterestFrequency: `${ErrorCategory.Products.AddProduct}-014`,
    bankId: `${ErrorCategory.Products.AddProduct}-015`,
    minimumBalance: `${ErrorCategory.Products.AddProduct}-016`,
    accountPerCustomer: `${ErrorCategory.Products.AddProduct}-017`,
    isChequeBookAllowed: `${ErrorCategory.Products.AddProduct}-018`,
    doNotAllowCredit: `${ErrorCategory.Products.AddProduct}-019`,
    doNotAllowDebit: `${ErrorCategory.Products.AddProduct}-020`,
    canGoInCredit: `${ErrorCategory.Products.AddProduct}-021`,
    canGoInDebit: `${ErrorCategory.Products.AddProduct}-022`,
    enforceBioAuthentication: `${ErrorCategory.Products.AddProduct}-023`,
    dormantProductId: `${ErrorCategory.Products.AddProduct}-024`,
    dormantDays: `${ErrorCategory.Products.AddProduct}-025`,
    isBlocked: `${ErrorCategory.Products.AddProduct}-026`,
    operatorId: `${ErrorCategory.Products.AddProduct}-027`,
    createdOn: `${ErrorCategory.Products.AddProduct}-028`,
    isSupervisionRequired: `${ErrorCategory.Products.AddProduct}-029`,
    supervisionReason: `${ErrorCategory.Products.AddProduct}-030`,
    supervisedBy: `${ErrorCategory.Products.AddProduct}-031`,
    supervisedOn: `${ErrorCategory.Products.AddProduct}-032`,
    modifiedOn: `${ErrorCategory.Products.AddProduct}-033`,
    modifiedBy: `${ErrorCategory.Products.AddProduct}-034`,
  },
  success: {
    code: `${ErrorCategory.Products.AddProduct}-000`,
    message: 'Product successfully created.',
  },
};


export const ProductGLSettingsErrorCodes = {
  validate: {
    bankId: `${ErrorCategory.Products.AddProductGLSettings}-000`,
    ourBranchId: `${ErrorCategory.Products.AddProductGLSettings}-001`,
    productId: `${ErrorCategory.Products.AddProductGLSettings}-002`,
    settingId: `${ErrorCategory.Products.AddProductGLSettings}-003`,
    gLAccountId: `${ErrorCategory.Products.AddProductGLSettings}-004`,
    createdBy: `${ErrorCategory.Products.AddProductGLSettings}-005`,
  },
  success: {
    code: `${ErrorCategory.Products.AddProductGLSettings}-000`,
    message: 'Product GL Settings successfully created.',
  },
};



















