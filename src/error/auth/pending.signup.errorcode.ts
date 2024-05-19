import { ErrorCategory } from "../error.category";

export const PendingSignupErrorCodes = {
  validate: {
    EmailAddress: `${ErrorCategory.Authentication.PendingSignup}-000`,
    FirstName: `${ErrorCategory.Authentication.PendingSignup}-001`,
    MiddleName: `${ErrorCategory.Authentication.PendingSignup}-002`,
    LastName: `${ErrorCategory.Authentication.PendingSignup}-003`,
    TypeOfID: `${ErrorCategory.Authentication.PendingSignup}-004`,
    IDNumber: `${ErrorCategory.Authentication.PendingSignup}-005`,
    MobilePhone: `${ErrorCategory.Authentication.PendingSignup}-006`,
    ValidationCode: `${ErrorCategory.Authentication.PendingSignup}-007`,
  },
  success: {
    code: `${ErrorCategory.Authentication.PendingSignup}-000`,
    message: "Signup details created. Pending...",
  },

  resendCodeSuccess: {
    code: `${ErrorCategory.Authentication.PendingSignup}-000`,
    message: "Code Successfuly resent...",
  },
};

export const ConfirmSignupErrorCodes = {
  validate: {
    EmailAddress: `${ErrorCategory.Authentication.ConfirmSignup}-000`,
    ValidationCode: `${ErrorCategory.Authentication.ConfirmSignup}-001`,
  },
  success: {
    code: `${ErrorCategory.Authentication.ConfirmSignup}-000`,
    message: "User successfuly signed up.",
  },
  error: {
    code: `${ErrorCategory.Authentication.ConfirmSignup}-101`,
    message: "The verification code submitted is incorrect.",
  },

  maxValidationError: {
    code: `${ErrorCategory.Authentication.ConfirmSignup}-102`,
    message:
      "You exceeded your number of verification attempts | Contact support",
  },
};

export const LoginErrorCodes = {
  validate: {
    EmailAddress: `${ErrorCategory.Authentication.ConfirmSignup}-000`,
    Password: `${ErrorCategory.Authentication.ConfirmSignup}-001`,
  },
  success: {
    code: `${ErrorCategory.Authentication.ConfirmSignup}-000`,
    message: "User successfuly logged in.",
  },
  error: {
    code: `${ErrorCategory.Authentication.ConfirmSignup}-101`,
    message: "Incorrect email or password.",
  },
};
