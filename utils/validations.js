import { assign } from 'lodash';

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

export const isPositive = (num = '') => /^(?:[1-9]\d*|0)?(?:\.\d+)?$/.test(num);
export const isPhoneNumber = num => /^\d{10}$/.test(num);

export const isEmail = (str = '') =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    str
  );
export const isValidYear = (str = '') => /^((?!(0))[0-9]{4})$/.test(str);

export const validateField = formField => {
  const { rules } = formField;
  const { fieldName } = formField;
  if (rules) {
    const fieldValue = formField.value;
    const updatedFormField = { ...formField };
    for (let index = 0; index < rules.length; index += 1) {
      switch (rules[index].split('-')[0]) {
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
        case 'isValidYear':
          updatedFormField.status = isValidYear(fieldValue);
          if (
            !!updatedFormField.customMessages &&
            !!updatedFormField.customMessages.isEmail
          )
            updatedFormField.errorText =
              updatedFormField.customMessages.isEmail;
          else if (updatedFormField.defaultErrorText)
            updatedFormField.errorText = updatedFormField.defaultErrorText;
          else updatedFormField.errorText = 'Enter valid year i.e. 2019';
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
          else updatedFormField.errorText = 'Enter valid number i.e. 123';
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
  let updatedFormData = assign({}, formData);
  Object.keys(formData).map(fieldKey => {
    const formField = formData[fieldKey];
    if (!Array.isArray(formField)) {
      if (
        Object.prototype.hasOwnProperty.call(formField, 'status') &&
        Object.prototype.hasOwnProperty.call(formField, 'value')
      ) {
        const updatedFormField = validateField(formField);
        updatedFormData = assign(updatedFormData, {
          [fieldKey]: updatedFormField,
        });
        validateFlag = !!updatedFormField.status && validateFlag;
      } else {
        const result = validateFormData(formField);
        updatedFormData = assign(updatedFormData, {
          [fieldKey]: result.updatedFormData,
        });
        validateFlag = !!result.validateFlag && validateFlag;
      }
    } else {
      const arrayFormField = [];
      formField.map(field => {
        let newUpdatedFormData = {};
        newUpdatedFormData = validateFormData(field);
        arrayFormField.push(newUpdatedFormData.updatedFormData);
        validateFlag = !!newUpdatedFormData.validateFlag && validateFlag;
      });
      updatedFormData[fieldKey] = arrayFormField;
    }
  });
  return { validateFlag: !!validateFlag, updatedFormData };
};
