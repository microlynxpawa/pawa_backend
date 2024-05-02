import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
  
  @ValidatorConstraint({ name: 'validateBit', async: false })
  export class validateBit implements ValidatorConstraintInterface {
    validate(text: number, _: ValidationArguments) {
      if (text !== 0 && text !== 1) return false;
      else return true;
    }
    defaultMessage(_: ValidationArguments) {
      return '$property value ($value) is not valid';
    }
  }