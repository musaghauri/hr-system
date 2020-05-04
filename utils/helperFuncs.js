import { assign, forOwn, lowerCase } from 'lodash';
import _cloneDeep from 'lodash/cloneDeep';
import moment from 'moment/moment';

export const parseErrorsAndConvertToString = (errors = {}) => {
  let errString = '';
  forOwn(errors, (v, k) => {
    errString += `${k}: ${lowerCase(v)}\n`;
  });

  return errString;
};

export const createRequestOptions = (
  requestMethod,
  requestBody = null,
  requestHeader = null
) => {
  const options = {
    method: requestMethod,
    headers: assign(
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      requestHeader
    ),
  };

  if (
    requestBody &&
    (requestMethod === 'POST' ||
      requestMethod === 'PUT' ||
      requestMethod === 'PATCH')
  ) {
    options.body = JSON.stringify(requestBody);
  }

  return options;
};

export const submitFormData = formData => {
  let newFormData = {};
  if (formData) {
    Object.keys(formData).forEach(fieldKey => {
      const formField = formData[fieldKey];
      if (!Array.isArray(formField)) {
        if (
          Object.prototype.hasOwnProperty.call(formField, 'status') &&
          Object.prototype.hasOwnProperty.call(formField, 'value')
        ) {
          // if (
          //   formField.value === 0 ||
          //   formField.value === false ||
          //   !!formField.value
          // ) { Disabled to allow optional fields
          newFormData[fieldKey] = formField.value;
          // }
        } else {
          const result = submitFormData(formField);
          if (Object.keys(result).length > 0) {
            newFormData = assign(newFormData, { [fieldKey]: result });
          }
        }
      } else {
        const arrayFormField = [];
        formField.map(field => {
          arrayFormField.push(submitFormData(field));
        });
        newFormData[fieldKey] = arrayFormField;
      }
    });
  }

  return newFormData;
};

export const loadFormDetails = (formDetails, user, uploadImageStatus) => {
  // console.log({ user });
  const tempFormDetails = formDetails;
  if (tempFormDetails) {
    Object.keys(tempFormDetails).forEach(item => {
      const itemValue = user[item] || null;
      if (itemValue) {
        if (['logo', 'coverPhoto', 'profilePicture'].includes(item)) {
          tempFormDetails[item].value = itemValue;
          uploadImageStatus[item] = {
            loading: false,
            loaded: true,
            error: false,
          };
        } else if (item === 'images') {
          itemValue.map((image, i) => {
            tempFormDetails[item].value[`image${i}`] = image;
            uploadImageStatus[`image${i}`] = {
              loading: false,
              loaded: true,
              error: false,
            };
          });
        } else if (typeof itemValue === 'object') {
          const itemFormData = _cloneDeep(tempFormDetails[item][0]);
          if (Array.isArray(itemValue)) {
            // Array Object
            itemValue.map((arrayItem, itemI) => {
              tempFormDetails[item][itemI] = itemFormData;
              Object.keys(arrayItem).forEach(itemKey => {
                const arrayItemValue = arrayItem[itemKey] || null;      
                if (arrayItemValue) {
                  if (tempFormDetails[item][itemI][itemKey]) {
                    tempFormDetails[item][itemI][itemKey].value = 
                    arrayItem[itemKey];
                  }
                }
              });
            });
          } else {
            // JSON Object
            Object.keys(itemValue).forEach(nestedItem => {
              const nestedItemValue = user[item][nestedItem] || null;
              if (nestedItemValue) {
                if (nestedItem === 'state') {
                  tempFormDetails[item][nestedItem].value = nestedItemValue._id;
                  tempFormDetails[item].country.value = nestedItemValue.country._id;
                }
                if (nestedItem === 'city') {
                  tempFormDetails[item][nestedItem].value = nestedItemValue._id;
                  tempFormDetails[item].state.value = nestedItemValue.state._id;
                  tempFormDetails[item].country.value =
                    nestedItemValue.state.country._id;
                } else
                  tempFormDetails[item][nestedItem].value = nestedItemValue;
              }
            });
          }
        } else if (typeof itemValue === 'string' || typeof itemValue === 'number') {
          // String
          tempFormDetails[item].value = itemValue;
        }
      }
    });
  }
  console.log({ tempFormDetails });
  return tempFormDetails;
};

export const rangeArray = (start, end) => {
  const arr = [];
  for (let num = start; num < end; num += 1) {
    arr.push(num);
  }
  return arr;
};

export const formatDate = (date, format = 'MM/DD/YY') => {
  const input = date || '';
  return moment(input).format(format);
};

export const updateStep = (step, totalSteps) => {
  if (step < totalSteps - 1) {
    return step + 1;
  }
  return totalSteps - 1;
};
