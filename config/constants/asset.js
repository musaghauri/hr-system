export const ASSET_INITIAL_STATE = {
  id: { 
    name: 'id',
    label: 'ID',
    status: true,
    errorText: '',
    value: '',
    rules: ['isRequired'],
    fieldName: 'ID',
    placeholder: 'Select asset',
  },
  detail: { 
    name: 'detail',
    label: 'Detail',
    status: true,
    errorText: '',
    value: '',
    rules: ['isRequired'],
    fieldName: 'Detail',
    placeholder: 'Enter detail',
  },
  returnable: { 
    name: 'returnable',
    label: 'Returnable',
    status: true,
    errorText: '',
    value: true,
    rules: ['isRequired'],
    fieldName: 'Returnable',
    placeholder: 'Returnable',
  },
  status: { 
    name: 'status',
    label: 'Dtatus',
    status: true,
    errorText: '',
    value: false,
    rules: ['isRequired'],
    fieldName: 'Status',
    placeholder: 'status',
  },
  issueDate: { 
    name: 'issueDate',
    label: 'Issue Date',
    status: true,
    errorText: '',
    value: '',
    rules: ['isRequired'],
    fieldName: 'Issue Date',
    placeholder: 'Select issue date',
  },
}