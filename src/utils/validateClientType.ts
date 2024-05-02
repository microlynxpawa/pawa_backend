import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
  
  @ValidatorConstraint({ name: 'validateClientType', async: false })
  export class validateClientType implements ValidatorConstraintInterface {
    validate(text: string, _: ValidationArguments) {
      if (text !== 'CD' && text !== 'CI' && text !== 'BD' && text !== 'BI') return false;
      else return true;
    }
    defaultMessage(_: ValidationArguments) {
      return '$property value ($value) is not valid';
    }
  }