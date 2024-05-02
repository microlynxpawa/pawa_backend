import {
  Middleware,
  ExpressErrorMiddlewareInterface,
  HttpError,
  BadRequestError,
} from 'routing-controllers';
import { ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { Service } from 'typedi';
// CREATE PAWAAPP ERROR AND LOGGER PARAM LATER TO LOG ERROR ON A FILE


interface IExtractValidateError {
  code: string;
  message: string;
  detail: string;
}

const extractValidationErrorDetails = (valError: ValidationError): IExtractValidateError => {
  let detail = '',
    code = 'Unknown';
  const message = 'Validation Error occurred';
  if (valError.constraints) {
    const constraintKey = Object.keys(valError.constraints)[0];
    detail = valError.constraints[constraintKey];
  }

  if (valError.contexts) {
    Object.keys(valError.contexts).forEach((valType) => {
      if (valError.contexts !== undefined && valError.contexts[valType].code) {
        code = valError.contexts[valType].code;
      }
    });
  }

  return {
    code,
    message,
    detail,
  };
};

@Service()
@Middleware({ type: 'after' })
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
  constructor() {}
  error(error: any, req: Request, response: Response, __: NextFunction) {
    if (response.headersSent) {
      return;
    }
    // check for ValidationError and it needs to be an array type
    let responseObject = {} as any;
    if (error instanceof BadRequestError) {
      if (process.env.NODE_ENV !== 'test') {
        try {
          console.error(`request from ${req.ip} failed. error details: ${error}`);
        } catch (e) {
          // do nothing here
        }
      }
      response.status(error.httpCode);
      // get only the first message from the list and show the error
      const getErrors = error as any;
      if (getErrors && Array.isArray(getErrors.errors)) {
        const valError = getErrors.errors[0] as ValidationError;
        // report the children first
        if (valError.children && valError.children.length > 0) {
          const errorResult = extractValidationErrorDetails(valError.children[0]);
          responseObject = { ...errorResult };
        } else if (valError.constraints) {
          // first key
          const constraintKey = Object.keys(valError.constraints)[0];
          responseObject.detail = valError.constraints[constraintKey];
        }
        if (valError.contexts) {
          const errorResult = extractValidationErrorDetails(valError);
          responseObject = { ...errorResult };
        }
      }
      if (!responseObject.code) {
        responseObject.code = 'V0002-001'; // generic error message
      }
    } else {
      if (error instanceof HttpError && error.httpCode) {
        response.status(error.httpCode);
        responseObject.message = error.message;
      } else {
        response.status(error.httpCode || 500);
        responseObject.code = 'EE-001';
        responseObject.message = "Oops! This is embarrasing. Don't worry, we are working to fix it";
      }

      if (error instanceof Error) {
        if (error.name && error.message) {
          responseObject.name = error.name;
        }
        if (error.message) {
          responseObject.message = error.message;
        }
        if (error.stack) {
          responseObject.stack = error.stack;
        }
      } else if (!responseObject.message) {
        responseObject.message = error;
      }
    }
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
      const { code, message, detail } = responseObject;
      if (code) {
        response.json({ code, message, detail });
        return;
      }
      response.json({ message });
      return;
    }
    response.json(responseObject);
  }
}
