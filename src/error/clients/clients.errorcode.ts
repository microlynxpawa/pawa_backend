import ErrorCategory, { ResponseCode, ResponseStatus } from "../error.category";

export const ClientsErrorCodes = {
  validate: {
    clientId: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
    title: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
    clientName: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
    gender: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
    homeAddress: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
    businessAddress: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
    mobileNumber: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
    officePhone: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
    emailId: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
    dateOfBirth: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
    nationality: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
    typeOfId: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
    idNumber: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
    tinNumber: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
    operatorId: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
    bankId: `${ErrorCategory.Clients.AddClient}-${ResponseCode.error}`,
  },
  success: {
    code: `${ErrorCategory.Clients.AddClient}-${ResponseCode.success}`,
    status: ResponseStatus.success,
    message: "Client successfully created.",
  },

  newClientFailed: {
    code: `${ErrorCategory.Clients.AddClient}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "Client creation failed.",
  },

  fetchClientFailed: {
    code: `${ErrorCategory.Clients.AddClient}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "Fetch Clients details failed.",
  },
};

export const ClientsImageErrorCodes = {
  validate: {
    clientId: `${ErrorCategory.Clients.ClientImage}-${ResponseCode.error}`,
    imageId: `${ErrorCategory.Clients.ClientImage}-${ResponseCode.error}`,
    imageDescription: `${ErrorCategory.Clients.ClientImage}-${ResponseCode.error}`,
    imageHash: `${ErrorCategory.Clients.ClientImage}-${ResponseCode.error}`,
    imageValue: `${ErrorCategory.Clients.ClientImage}-${ResponseCode.error}`,
    operatorId: `${ErrorCategory.Clients.ClientImage}-${ResponseCode.error}`,
    bankId: `${ErrorCategory.Clients.ClientImage}-${ResponseCode.error}`,
  },
  success: {
    code: `${ErrorCategory.Clients.ClientImage}-${ResponseCode.success}`,
    status: ResponseStatus.success,
    message: "Client image successfully created.",
  },
};

export const ClientsDetailsErrorCodes = {
  validate: {
    clientId: `${ErrorCategory.Clients.ClientDetails}-${ResponseCode.error}`,
    bankId: `${ErrorCategory.Clients.ClientDetails}-${ResponseCode.error}`,
    clientType: `${ErrorCategory.Clients.ClientDetails}-${ResponseCode.error}`,
  },

  clientDetailsFailed: {
    code: `${ErrorCategory.Clients.AddClient}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "Fetch Clients details failed.",
  },
};
