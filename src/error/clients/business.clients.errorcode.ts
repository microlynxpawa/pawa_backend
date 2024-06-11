import ErrorCategory, { ResponseCode, ResponseStatus } from "../error.category";

export const BusinessClientsErrorCodes = {
  validate: {
    clientId: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.error}`,
    clientName: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.error}`,
    registeredAddress: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.error}`,
    officeAddress: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.error}`,
    officePhone1: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.error}`,
    officePhone2: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.error}`,
    emailId1: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.error}`,
    tinNumber: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.error}`,
    operatorId: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.error}`,
    bankId: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.error}`,
    emailId2: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.error}`,
    registrationDate: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.error}`,
    registrationNumber: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.error}`,
  },
  success: {
    code: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.success}`,
    status: ResponseStatus.success,
    message: "Business Client successfully created.",
  },
  newBusinessClientFailed: {
    code: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "Business Client creation Failed",
  },

  fetchBusinessClientFailed: {
    code: `${ErrorCategory.Clients.AddBusinessClient}-${ResponseCode.failed}`,
    status: ResponseStatus.failed,
    message: "Business Client Fetch Failed",
  },
};
