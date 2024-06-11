const ErrorCategory = {
  AppError: "1001",
  Authentication: {
    PendingSignup: "0000",
    ConfirmSignup: "0009",
    AuthHeader: "0010",
  },
  Clients: {
    AddClient: "0001",
    ClientImage: "0002",
    AddBusinessClient: "0003",
    ClientDetails: "0004",
  },
  Accounts: {
    AddGLAccount: "0005",
  },
  Products: {
    AddProduct: "0006",
    AddProductGLSettings: "0007",
  },
  Banks: "0008",
};

export const ResponseCode = {
  success: "200",
  failed: "400",
  error: "500",
};

export const ResponseStatus = {
  success: "Success",
  failed: "Failed",
  error: "Error",
};

export default ErrorCategory;
