/* eslint-disable array-callback-return */
/* eslint-disable no-prototype-builtins */
import _assign from 'lodash/assign';

export const isStrongPassword = (str = '') => {
  if (str !== null) {
    return str.trim().length >= 6;
  }
  return false;
};

export const isRequired = (str = '') => {
  if (str !== null) {
    return !(str.trim().length === 0);
  }
  return false;
};

const isMultipleRequired = (arr = []) => arr.length > 0;
export const isPositive = (num = '') => /^(?:[1-9]\d*|0)?(?:\.\d+)?$/.test(num);

const checkIfNumberSet = str => {
  const num = parseFloat(str);
  if (num === 0) return true;
  return !!str;
};

const compare = (value1, value2, operator = '', isLength = false) => {
  const Value1 = isLength ? value1.length : parseFloat(value1);
  switch (operator) {
    case '<':
      if (checkIfNumberSet(value1)) return Value1 < parseFloat(value2);
      return true;
    case '<=':
      if (checkIfNumberSet(value1)) return Value1 <= parseFloat(value2);
      return true;
    case '>':
      if (checkIfNumberSet(value1)) return Value1 > parseFloat(value2);
      return true;
    case '>=':
      if (checkIfNumberSet(value1)) return Value1 >= parseFloat(value2);
      return true;
    case '===':
      if (checkIfNumberSet(value1)) return Value1 === parseFloat(value2);
      return true;
    case '<-ifExists':
      if (checkIfNumberSet(value1) && checkIfNumberSet(value2))
        return Value1 < parseFloat(value2);
      return true;
    case '>-ifExists':
      if (checkIfNumberSet(value1) && checkIfNumberSet(value2))
        return Value1 > parseFloat(value2);
      return true;
    case '<=-ifExists':
      if (checkIfNumberSet(value1) && checkIfNumberSet(value2))
        return Value1 <= parseFloat(value2);
      return true;
    case '>=-ifExists':
      if (checkIfNumberSet(value1) && checkIfNumberSet(value2))
        return Value1 >= parseFloat(value2);
      return true;
    case '===-ifExists':
      if (checkIfNumberSet(value1) && checkIfNumberSet(value2))
        return Value1 === parseFloat(value2);
      return true;
    default:
      return Value1 === parseFloat(value2);
  }
};

export const isEmail = (str = '') =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    str
  );

export const isPhoneNumber = num => /^\d{10}$/.test(num);

export const isNumeric = num =>
  !num || (!isNaN(parseFloat(num, 10)) && isFinite(num));

export const isJSON = str => {
  try {
    JSON.parse(str);
  } catch (error) {
    return false;
  }
  return true;
};

export const validateField = formField => {
  const { rules } = formField;
  const { fieldName } = formField;
  if (rules) {
    const fieldValue = formField.value;
    const updatedFormField = { ...formField };
    let operators = [];
    for (let index = 0; index < rules.length; index += 1) {
      switch (rules[index].split('-')[0]) {
        case 'isJSON':
          updatedFormField.status = isJSON(JSON.stringify(fieldValue));
          if (
            !!updatedFormField.customMessages &&
            !!updatedFormField.customMessages.isJSON
          )
            updatedFormField.errorText = updatedFormField.customMessages.isJSON;
          else if (updatedFormField.defaultErrorText)
            updatedFormField.errorText = updatedFormField.defaultErrorText;
          else updatedFormField.errorText = 'Required';
          break;
        case 'isStrongPassword':
          updatedFormField.status = isStrongPassword(String(fieldValue));
          if (
            !!updatedFormField.customMessages &&
            !!updatedFormField.customMessages.isStrongPassword
          )
            updatedFormField.errorText =
              updatedFormField.customMessages.isStrongPassword;
          else if (updatedFormField.defaultErrorText)
            updatedFormField.errorText = updatedFormField.defaultErrorText;
          else
            updatedFormField.errorText = 'Should be at least 6 characters long';
          break;
        case 'isRequired':
          updatedFormField.status = isRequired(String(fieldValue));
          if (
            !!updatedFormField.customMessages &&
            !!updatedFormField.customMessages.isRequired
          )
            updatedFormField.errorText =
              updatedFormField.customMessages.isRequired;
          else if (updatedFormField.defaultErrorText)
            updatedFormField.errorText = updatedFormField.defaultErrorText;
          else if (updatedFormField.fieldType === 'select-one')
            updatedFormField.errorText = `Please select a ${fieldName}`;
          else updatedFormField.errorText = `Please enter your ${fieldName}`;
          break;
        case 'attachmentRequired':
          updatedFormField.status = isRequired(String(fieldValue));
          if (
            !!updatedFormField.customMessages &&
            !!updatedFormField.customMessages.attachmentRequired
          )
            updatedFormField.errorText =
              updatedFormField.customMessages.attachmentRequired;
          else if (updatedFormField.defaultErrorText)
            updatedFormField.errorText = updatedFormField.defaultErrorText;
          else updatedFormField.errorText = `Please upload your ${fieldName}`;
          break;
        case 'isMultipleRequired':
          updatedFormField.status = isMultipleRequired(fieldValue);
          if (
            !!updatedFormField.customMessages &&
            !!updatedFormField.customMessages.isMultipleRequired
          )
            updatedFormField.errorText =
              updatedFormField.customMessages.isMultipleRequired;
          else if (updatedFormField.defaultErrorText)
            updatedFormField.errorText = updatedFormField.defaultErrorText;
          else updatedFormField.errorText = 'Required';
          break;
        case 'isEmail':
          updatedFormField.status = isEmail(fieldValue);
          if (
            !!updatedFormField.customMessages &&
            !!updatedFormField.customMessages.isEmail
          )
            updatedFormField.errorText =
              updatedFormField.customMessages.isEmail;
          else if (updatedFormField.defaultErrorText)
            updatedFormField.errorText = updatedFormField.defaultErrorText;
          else updatedFormField.errorText = 'Invalid Email Address';
          break;
        case 'isPositive':
          updatedFormField.status = isPositive(fieldValue);
          if (
            !!updatedFormField.customMessages &&
            !!updatedFormField.customMessages.isPositive
          )
            updatedFormField.errorText =
              updatedFormField.customMessages.isPositive;
          else if (updatedFormField.defaultErrorText)
            updatedFormField.errorText = updatedFormField.defaultErrorText;
          else updatedFormField.errorText = 'Must be Positive';
          break;
        case 'isNumber':
          updatedFormField.status = isNumeric(fieldValue);
          if (
            !!updatedFormField.customMessages &&
            !!updatedFormField.customMessages.isNumber
          )
            updatedFormField.errorText =
              updatedFormField.customMessages.isNumber;
          else if (updatedFormField.defaultErrorText)
            updatedFormField.errorText = updatedFormField.defaultErrorText;
          else updatedFormField.errorText = 'Must be Numeric';
          break;
        case 'isPhoneNumber':
          updatedFormField.status = isPhoneNumber(fieldValue);
          if (
            !!updatedFormField.customMessages &&
            !!updatedFormField.customMessages.isPhoneNumber
          )
            updatedFormField.errorText =
              updatedFormField.customMessages.isPhoneNumber;
          else if (updatedFormField.defaultErrorText)
            updatedFormField.errorText = updatedFormField.defaultErrorText;
          else updatedFormField.errorText = 'Incorect Phone Number';
          break;
        case 'compare':
          operators = rules[index].split('-');
          updatedFormField.status = compare(
            fieldValue,
            operators[2],
            operators[1]
          );
          if (
            !!updatedFormField.customMessages &&
            !!updatedFormField.customMessages[rules[index]]
          )
            updatedFormField.errorText =
              updatedFormField.customMessages[rules[index]];
          else if (updatedFormField.defaultErrorText)
            updatedFormField.errorText = updatedFormField.defaultErrorText;
          else
            updatedFormField.errorText = `${fieldName} must be ${operators[1]} to ${operators[2]}`;
          break;
        case 'compare_length':
          operators = rules[index].split('-');
          updatedFormField.status = compare(
            fieldValue,
            operators[2],
            operators[1],
            true
          );
          if (
            !!updatedFormField.customMessages &&
            !!updatedFormField.customMessages[rules[index]]
          )
            updatedFormField.errorText =
              updatedFormField.customMessages[rules[index]];
          else if (updatedFormField.defaultErrorText)
            updatedFormField.errorText = updatedFormField.defaultErrorText;
          else
            updatedFormField.errorText = `${fieldName} must be ${operators[1]} to ${operators[2]}`;
          break;
        default:
      }
      if (!updatedFormField.status) {
        break;
      }
    }
    return updatedFormField;
  }

  return formField;
};

export const validateFormData = formData => {
  let validateFlag = true;
  let updatedFormData = _assign({}, formData);

  Object.keys(formData).map(fieldKey => {
    const formField = formData[fieldKey];
    if (
      formField.hasOwnProperty('status') &&
      formField.hasOwnProperty('value')
    ) {
      const updatedFormField = validateField(formField);
      updatedFormData = _assign(updatedFormData, {
        [fieldKey]: updatedFormField,
      });
      validateFlag = !!updatedFormField.status && validateFlag;
    } else {
      const result = validateFormData(formField);
      updatedFormData = _assign(updatedFormData, {
        [fieldKey]: result.updatedFormData,
      });
      validateFlag = !!result.validateFlag && validateFlag;
    }
  });

  return { validateFlag: !!validateFlag, updatedFormData };
};
