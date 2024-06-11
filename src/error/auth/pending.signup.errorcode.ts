import ErrorCategory, { ResponseCode, ResponseStatus } from "../error.category";

export const PendingSignupErrorCodes = {
  validate: {
    EmailAddress: `${ErrorCategory.Authentication.PendingSignup}-${ResponseCode.error}`,
    FirstName: `${ErrorCategory.Authentication.PendingSignup}-${ResponseCode.error}`,
    MiddleName: `${ErrorCategory.Authentication.PendingSignup}-${ResponseCode.error}`,
    LastName: `${ErrorCategory.Authentication.PendingSignup}-${ResponseCode.error}`,
    TypeOfID: `${ErrorCategory.Authentication.PendingSignup}-${ResponseCode.error}`,
    IDNumber: `${ErrorCategory.Authentication.PendingSignup}-${ResponseCode.error}`,
    MobilePhone: `${ErrorCategory.Authentication.PendingSignup}-${ResponseCode.error}`,
    ValidationCode: `${ErrorCategory.Authentication.PendingSignup}-${ResponseCode.error}`,
  },
  success: {
    code: `${ErrorCategory.Authentication.PendingSignup}-${ResponseCode.success}`,
    status: ResponseStatus.success,
    message: "Signup details created. Pending...",
  },

  signupError: {
    code: `${ErrorCategory.Authentication.PendingSignup}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "Signup failed...",
  },

  resendCodeSuccess: {
    code: `${ErrorCategory.Authentication.PendingSignup}-${ResponseCode.success}`,
    status: ResponseStatus.success,
    message: "Code Successfuly resent...",
  },

  resendCodeFailed: {
    code: `${ErrorCategory.Authentication.PendingSignup}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "Code Resnt Failed...",
  },
};

export const ConfirmSignupErrorCodes = {
  validate: {
    EmailAddress: `${ErrorCategory.Authentication.ConfirmSignup}-${ResponseCode.error}`,
    ValidationCode: `${ErrorCategory.Authentication.ConfirmSignup}-${ResponseCode.error}`,
  },
  success: {
    code: `${ErrorCategory.Authentication.ConfirmSignup}-${ResponseCode.success}`,
    status: ResponseStatus.success,
    message: "User successfuly signed up.",
  },
  error: {
    code: `${ErrorCategory.Authentication.ConfirmSignup}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "The verification code submitted is incorrect.",
  },

  maxValidationError: {
    code: `${ErrorCategory.Authentication.ConfirmSignup}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message:
      "You exceeded your number of verification attempts | Contact support",
  },

  confirmSignupFailed: {
    code: `${ErrorCategory.Authentication.ConfirmSignup}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "Signup failed..",
  },
};

export const LoginErrorCodes = {
  validate: {
    EmailAddress: `${ErrorCategory.Authentication.ConfirmSignup}-${ResponseCode.error}`,
    Password: `${ErrorCategory.Authentication.ConfirmSignup}-${ResponseCode.error}`,
  },
  loginSuccess: {
    code: `${ErrorCategory.Authentication.ConfirmSignup}-${ResponseCode.success}`,
    status: ResponseStatus.success,
    message: "User successfuly logged in.",
  },
  loginFailed: {
    code: `${ErrorCategory.Authentication.ConfirmSignup}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "Login Failed.",
  },
};
