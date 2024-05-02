import { ErrorCategory } from '../error.category';

export const ClientsErrorCodes = {
  validate: {
    clientId: `${ErrorCategory.Clients.AddClient}-000`,
    title: `${ErrorCategory.Clients.AddClient}-001`,
    clientName: `${ErrorCategory.Clients.AddClient}-002`,
    gender: `${ErrorCategory.Clients.AddClient}-003`,
    homeAddress: `${ErrorCategory.Clients.AddClient}-004`,
    businessAddress: `${ErrorCategory.Clients.AddClient}-005`,
    mobileNumber: `${ErrorCategory.Clients.AddClient}-006`,
    officePhone: `${ErrorCategory.Clients.AddClient}-007`,
    emailId: `${ErrorCategory.Clients.AddClient}-008`,
    dateOfBirth: `${ErrorCategory.Clients.AddClient}-009`,
    nationality: `${ErrorCategory.Clients.AddClient}-010`,
    typeOfId: `${ErrorCategory.Clients.AddClient}-011`,
    idNumber: `${ErrorCategory.Clients.AddClient}-012`,
    tinNumber: `${ErrorCategory.Clients.AddClient}-013`,
    operatorId: `${ErrorCategory.Clients.AddClient}-014`,
    bankId: `${ErrorCategory.Clients.AddClient}-015`,
  },
  success: {
    code: `${ErrorCategory.Clients.AddClient}-000`,
    message: 'Client successfully created.',
  },
};

export const ClientsImageErrorCodes = {
  validate: {
    clientId: `${ErrorCategory.Clients.ClientImage}-000`,
    imageId: `${ErrorCategory.Clients.ClientImage}-001`,
    imageDescription: `${ErrorCategory.Clients.ClientImage}-002`,
    imageHash: `${ErrorCategory.Clients.ClientImage}-003`, 
    imageValue: `${ErrorCategory.Clients.ClientImage}-004`,
    operatorId: `${ErrorCategory.Clients.ClientImage}-005`, 
    bankId: `${ErrorCategory.Clients.ClientImage}-006`,  
  },
  success: {
    code: `${ErrorCategory.Clients.ClientImage}-000`,
    message: 'Client image successfully created.',
  },
};

export const ClientsDetailsErrorCodes = {
  validate: {
    clientId: `${ErrorCategory.Clients.ClientDetails}-000`,
    bankId: `${ErrorCategory.Clients.ClientDetails}-001`,
    clientType: `${ErrorCategory.Clients.ClientDetails}-002`, 
  }
};

























