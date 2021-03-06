export const DEPENDENT_INITIAL_STATE = {
  name: {
    name: 'name',
    label: 'Name',
    status: true,
    errorText: '',
    value: '',
    rules: ['isRequired'],
    fieldName: 'Name',
    placeholder: 'Enter name',
  },
  gender: {
    name: 'gender',
    label: 'Gender',
    status: true,
    errorText: '',
    value: '',
    rules: ['isRequired'],
    fieldName: 'Gender',
    placeholder: 'Select gender',
  },
  relation: {
    name: 'relation',
    label: 'Relation',
    status: true,
    errorText: '',
    value: '',
    rules: ['isRequired'],
    fieldName: 'Relation',
    placeholder: 'Select relation ',
  },
  contact: {
    name: 'contact',
    label: 'Contact',
    status: true,
    errorText: '',
    value: '',
    rules: ['isRequired', 'isPhoneNumber'],
    fieldName: 'Contact',
    placeholder: 'Enter contact',
  },
  dateOfBirth: {
    name: 'dateOfBirth',
    label: 'Date Of Birth',
    status: true,
    errorText: '',
    value: '',
    rules: ['isRequired'],
    fieldName: 'Date Of Birth',
    placeholder: 'Select date of birth',
  },
};
