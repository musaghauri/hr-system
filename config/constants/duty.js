export const DUTY_INITIAL_STATE = {
  job: {
    name: 'job',
    label: 'Job',
    status: true,
    errorText: '',
    value: '',
    rules: ['isRequired'],
    fieldName: 'Job',
    placeholder: 'Enter job',
  },
  frequency: {
    name: 'frequency',
    label: 'Frequency',
    status: true,
    errorText: '',
    value: '',
    rules: ['isRequired'],
    fieldName: 'Frequency',
    placeholder: 'Select frequency',
  },
  effectiveFrom: {
    name: 'effectiveFrom',
    label: 'Effective From',
    status: true,
    errorText: '',
    value: '',
    rules: ['isRequired'],
    fieldName: 'Effective From',
    placeholder: 'Select a date',
  },
  enhancedTill: {
    name: 'enhancedTill',
    label: 'Enhanced Till',
    status: true,
    errorText: '',
    value: '',
    rules: ['isRequired'],
    fieldName: 'Enhanced Till',
    placeholder: 'Select a date',
  },
};
