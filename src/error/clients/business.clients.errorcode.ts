import { ErrorCategory } from '../error.category';

export const BusinessClientsErrorCodes = {
  validate: {
    clientId: `${ErrorCategory.Clients.AddBusinessClient}-000`,
    clientName: `${ErrorCategory.Clients.AddBusinessClient}-001`,
    registeredAddress: `${ErrorCategory.Clients.AddBusinessClient}-002`,
    officeAddress: `${ErrorCategory.Clients.AddBusinessClient}-003`,
    officePhone1: `${ErrorCategory.Clients.AddBusinessClient}-004`,
    officePhone2: `${ErrorCategory.Clients.AddBusinessClient}-005`,
    emailId1: `${ErrorCategory.Clients.AddBusinessClient}-006`,
    tinNumber: `${ErrorCategory.Clients.AddBusinessClient}-007`,
    operatorId: `${ErrorCategory.Clients.AddBusinessClient}-008`,
    bankId: `${ErrorCategory.Clients.AddBusinessClient}-009`,
    emailId2: `${ErrorCategory.Clients.AddBusinessClient}-010`,
    registrationDate: `${ErrorCategory.Clients.AddBusinessClient}-011`,
    registrationNumber: `${ErrorCategory.Clients.AddBusinessClient}-012`,
  },
  success: {
    code: `${ErrorCategory.Clients.AddBusinessClient}-000`,
    message: 'Business Client successfully created.',
  },
};
























