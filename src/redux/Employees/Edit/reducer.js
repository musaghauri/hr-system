import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_ANOTHER_ENTRY,
  GET_ROLES,
  GET_ROLES_SUCCESS,
  GET_ROLES_FAIL,
  GET_EMPLOYEE,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAIL,
  EDIT_EMPLOYEE,
  EDIT_EMPLOYEE_SUCCESS,
  EDIT_EMPLOYEE_FAIL,
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  GET_STATES,
  GET_STATES_SUCCESS,
  GET_STATES_FAIL,
  GET_CITIES,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAIL,
  GET_DEPARTMENTS,
  GET_DEPARTMENTS_SUCCESS,
  GET_DEPARTMENTS_FAIL,
  GET_ASSETS,
  GET_ASSETS_SUCCESS,
  GET_ASSETS_FAIL,
  DELETE_ENTRY,
  // DELETE_ENTRY_SUCCESS,
  // DELETE_ENTRY_FAIL,
} from './constants';

export const initialState = fromJS({
  formDetails: {
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
    role: {
      name: 'role',
      label: 'Role',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'Role',
      placeholder: 'Select role',
    },
    email: {
      name: 'email',
      label: 'Email',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired', 'isEmail'],
      fieldName: 'Email',
      placeholder: 'Enter email',
    },
    password: {
      name: 'password',
      label: 'Password',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired', 'isStrongPassword'],
      fieldName: 'Password',
      placeholder: 'Enter password',
    },
    isActive: {
      name: 'isActive',
      label: 'Is Active',
      status: true,
      errorText: '',
      value: true,
      rules: ['isRequired'],
      fieldName: 'Is Active',
      placeholder: 'Is the employee active',
    },
    isVerified: {
      name: 'isVerified',
      label: 'Is Verified',
      status: true,
      errorText: '',
      value: true,
      rules: ['isRequired'],
      fieldName: 'Is Verified',
      placeholder: 'Is the employee verified',
    },
    personalInformation: {
      companyEmail: {
        name: 'companyEmail',
        label: 'Company Email',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired', 'isEmail'],
        fieldName: 'Company Email',
        placeholder: 'Enter company email',
      },
      fatherName: {
        name: 'fatherName',
        label: 'Father Name',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'father name',
        placeholder: 'Enter father nam',
      },
      dateOfBirth: {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Date of Birth',
        placeholder: 'Select date of birth',
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
      nationality: {
        name: 'nationality',
        label: 'Nationality',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Nationality',
        placeholder: 'Select nationality',
      },
      country: {
        name: 'country',
        label: 'Country',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Country',
        placeholder: 'Select country',
      },
      state: {
        name: 'state',
        label: 'State',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'State',
        placeholder: 'Select state',
      },
      city: {
        name: 'city',
        label: 'City',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'City',
        placeholder: 'Select city',
      },
      religion: {
        name: 'religion',
        label: 'Religion',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Religion',
        placeholder: 'Enter religion',
      },
      maritalStatus: {
        name: 'maritalStatus',
        label: 'Marital Status',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Marital Status',
        placeholder: 'Select marital status',
      },
      bloodGroup: {
        name: 'bloodGroup',
        label: 'Blood Group',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Blood Group',
        placeholder: 'Select blood group',
      },
      disability: {
        name: 'disability',
        label: 'Disability',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Disability',
        placeholder: 'Enter disability',
      },
      cnic: {
        name: 'cnic',
        label: 'CNIC',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired', 'isPositive'],
        fieldName: 'CNIC',
        placeholder: 'Enter CNIC',
      },
      ntn: {
        name: 'ntn',
        label: 'NTN',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired', 'isPositive'],
        fieldName: 'NTN',
        placeholder: 'Enter NTN',
      },
      domicile: {
        name: 'domicile',
        label: 'Domicile',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Domicile',
        placeholder: 'Select domicile',
      },
    },
    officialInformation: {
      employeeId: {
        name: 'employeeId',
        label: 'Employee Id',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired', 'isPositive'],
        fieldName: 'Employee Id',
        placeholder: 'Enter employee Id',
      },
      employeeStatus: {
        name: 'employeeStatus',
        label: 'Employee Status',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Employee Status',
        placeholder: 'Select employee status',
      },
      designation: {
        name: 'designation',
        label: 'Designation',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Designation',
        placeholder: 'Enter designation',
      },
      socialSecurity: {
        name: 'socialSecurity',
        label: 'Social Security',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired', 'isPositive'],
        fieldName: 'Social Security',
        placeholder: 'Enter social security',
      },
      healthBenefits: {
        name: 'healthBenefits',
        label: 'Health Benefits',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Health Benefits',
        placeholder: 'Enter health benefits',
      },
      providentFund: {
        name: 'providentFund',
        label: 'Provident Fund',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired', 'isPositive'],
        fieldName: 'Provident Fund',
        placeholder: 'Enter provident fund',
      },
      department: {
        name: 'department',
        label: 'Department',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Department',
        placeholder: 'Select department',
      },
      joiningDate: {
        name: 'joiningDate',
        label: 'Joining Date',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Joining Date',
        placeholder: 'Select joining date',
      },
      resignationDate: {
        name: 'resignationDate',
        label: 'Resignation Date',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Resignation Date',
        placeholder: 'Select resignation date',
      },
      exitDate: {
        name: 'exitDate',
        label: 'Exit Date',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Exit Date',
        placeholder: 'Select exit date',
      },
    },
    contactInformation: [
      {
        title: {
          name: 'title',
          label: 'Title',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired'],
          fieldName: 'Title',
          placeholder: 'Enter title',
        },
        type: {
          name: 'type',
          label: 'Type',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired'],
          fieldName: 'Type',
          placeholder: 'Select type',
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
      },
    ],
    salarySettings: {
      paymentMode: {
        name: 'paymentMode',
        label: 'Mode of Payment',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Mode of Payment',
        placeholder: 'Select mode of payment',
      },
      exGratiaOnOvertime: {
        name: 'exGratiaOnOvertime',
        label: 'Ex-Gratia on Overtime',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired', 'isPositive'],
        fieldName: 'Ex-Gratia on Overtime',
        placeholder: 'Enter ex-gratia',
      },
      gratuity: {
        name: 'gratuity',
        label: 'Gratuity',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired', 'isPositive'],
        fieldName: 'Gratuity',
        placeholder: 'Enter gratuity',
      },
      bankDetails: {
        name: 'bankDetails',
        label: 'Bank Details',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Bank Details',
        placeholder: 'Enter bank details',
      },
    },
    academics: [
      {
        degreeName: {
          name: 'degreeName',
          label: 'Degree Name',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired'],
          fieldName: 'Degree Name',
          placeholder: 'Enter degree name',
        },
        board: {
          name: 'board',
          label: 'Board',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired'],
          fieldName: 'Board',
          placeholder: 'Enter board name',
        },
        university: {
          name: 'university',
          label: 'University',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired'],
          fieldName: 'University',
          placeholder: 'Enter university name',
        },
        marks: {
          name: 'marks',
          label: 'Marks',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired', 'isPositive'],
          fieldName: 'Marks',
          placeholder: 'Enter marks',
        },
        grade: {
          name: 'grade',
          label: 'Grade',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired'],
          fieldName: 'Grade',
          placeholder: 'Enter grade',
        },
      },
    ],
    experience: [
      {
        organization: {
          name: 'organization',
          label: 'Organization',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired'],
          fieldName: 'Organization',
          placeholder: 'Enter organization',
        },
        designation: {
          name: 'designation',
          label: 'Designation',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired'],
          fieldName: 'Designation',
          placeholder: 'Enter designation',
        },
        duration: {
          name: 'duration',
          label: 'Duration',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired'],
          fieldName: 'Duration',
          placeholder: 'Enter duration',
        },
        leavingReason: {
          name: 'leavingReason',
          label: 'Leaving Reason',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired'],
          fieldName: 'Leaving Reason',
          placeholder: 'Enter leaving reason',
        },
        salary: {
          name: 'salary',
          label: 'Salary',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired', 'isPositive'],
          fieldName: 'Salary',
          placeholder: 'Enter salary',
        },
      },
    ],
    dependents: [
      {
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
      },
    ],
    companyAssets: [
      {
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
          label: 'Status',
          status: true,
          errorText: '',
          value: true,
          rules: ['isRequired'],
          fieldName: 'Status',
          placeholder: 'Status',
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
      },
    ],
    // leaveBalance: {
    //   name: 'leaveBalance',
    //   label: 'Leave Balance',
    //   status: true,
    //   errorText: '',
    //   value: '',
    //   rules: ['isRequired', 'isPositive'],
    //   fieldName: 'Leave Balance',
    //   placeholder: 'Enter leave balance',
    // },
    duties: [
      {
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
      },
    ],
  },
  roles: [],
  countries: [],
  states: [],
  cities: [],
  departments: [],
  assets: [],
  getCountriesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  getStatesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  getCitiesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  getDepartmentsStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  getAssetsStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  editEmployeeStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  deleteEntryStatus: {
    loading: false,
    loaded: false,
  },
});

function editEmployeeReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case ADD_ANOTHER_ENTRY:
      return state.setIn(action.name, fromJS(action.value));
    case GET_ROLES:
      return state
        .setIn(['getRolesStatus', 'loading'], true)
        .setIn(['getRolesStatus', 'loaded'], false)
        .setIn(['getRolesStatus', 'error'], false);
    case GET_ROLES_SUCCESS:
      return state
        .setIn(['getRolesStatus', 'loading'], false)
        .setIn(['getRolesStatus', 'loaded'], true)
        .setIn(['getRolesStatus', 'error'], false)
        .set('roles', fromJS(action.roles));
    case GET_ROLES_FAIL:
      return state
        .setIn(['getRolesStatus', 'loading'], false)
        .setIn(['getRolesStatus', 'loaded'], false)
        .setIn(['getRolesStatus', 'error'], action.error);
    case GET_EMPLOYEE:
      return state
        .setIn(['getEmployeeStatus', 'loading'], true)
        .setIn(['getEmployeeStatus', 'loaded'], false)
        .setIn(['getEmployeeStatus', 'error'], false);
    case GET_EMPLOYEE_SUCCESS:
      return state
        .setIn(['getEmployeeStatus', 'loading'], false)
        .setIn(['getEmployeeStatus', 'loaded'], true)
        .setIn(['getEmployeeStatus', 'error'], false)
        .setIn(['formDetails'], fromJS(action.employee));
    case GET_EMPLOYEE_FAIL:
      return state
        .setIn(['getEmployeeStatus', 'loading'], false)
        .setIn(['getEmployeeStatus', 'loaded'], false)
        .setIn(['getEmployeeStatus', 'error'], action.error);
    case EDIT_EMPLOYEE:
      return state
        .setIn(['editEmployeeStatus', 'loading'], true)
        .setIn(['editEmployeeStatus', 'loaded'], false)
        .setIn(['editEmployeeStatus', 'error'], false);
    case EDIT_EMPLOYEE_SUCCESS:
      return state
        .setIn(['editEmployeeStatus', 'loading'], false)
        .setIn(['editEmployeeStatus', 'loaded'], true)
        .setIn(['editEmployeeStatus', 'error'], false);
    case EDIT_EMPLOYEE_FAIL:
      return state
        .setIn(['editEmployeeStatus', 'loading'], false)
        .setIn(['editEmployeeStatus', 'loaded'], false)
        .setIn(['editEmployeeStatus', 'error'], action.error);
    case GET_COUNTRIES:
      return state
        .setIn(['getCountriesStatus', 'loading'], true)
        .setIn(['getCountriesStatus', 'loaded'], false)
        .setIn(['getCountriesStatus', 'error'], false);
    case GET_COUNTRIES_SUCCESS:
      return state
        .setIn(['getCountriesStatus', 'loading'], false)
        .setIn(['getCountriesStatus', 'loaded'], true)
        .setIn(['getCountriesStatus', 'error'], false)
        .set('countries', fromJS(action.countries));
    case GET_COUNTRIES_FAIL:
      return state
        .setIn(['getCountriesStatus', 'loading'], false)
        .setIn(['getCountriesStatus', 'loaded'], false)
        .setIn(['getCountriesStatus', 'error'], action.error);
    case GET_STATES:
      return state
        .setIn(['getStatesStatus', 'loading'], true)
        .setIn(['getStatesStatus', 'loaded'], false)
        .setIn(['getStatesStatus', 'error'], false);
    case GET_STATES_SUCCESS:
      return state
        .setIn(['getStatesStatus', 'loading'], false)
        .setIn(['getStatesStatus', 'loaded'], true)
        .setIn(['getStatesStatus', 'error'], false)
        .set('states', fromJS(action.states));
    case GET_STATES_FAIL:
      return state
        .setIn(['getStatesStatus', 'loading'], false)
        .setIn(['getStatesStatus', 'loaded'], false)
        .setIn(['getStatesStatus', 'error'], action.error);
    case GET_CITIES:
      return state
        .setIn(['getCitiesStatus', 'loading'], true)
        .setIn(['getCitiesStatus', 'loaded'], false)
        .setIn(['getCitiesStatus', 'error'], false);
    case GET_CITIES_SUCCESS:
      return state
        .setIn(['getCitiesStatus', 'loading'], false)
        .setIn(['getCitiesStatus', 'loaded'], true)
        .setIn(['getCitiesStatus', 'error'], false)
        .set('cities', fromJS(action.cities));
    case GET_CITIES_FAIL:
      return state
        .setIn(['getCitiesStatus', 'loading'], false)
        .setIn(['getCitiesStatus', 'loaded'], false)
        .setIn(['getCitiesStatus', 'error'], action.error);
    case GET_DEPARTMENTS:
      return state
        .setIn(['getDepartmentsStatus', 'loading'], true)
        .setIn(['getDepartmentsStatus', 'loaded'], false)
        .setIn(['getDepartmentsStatus', 'error'], false);
    case GET_DEPARTMENTS_SUCCESS:
      return state
        .setIn(['getDepartmentsStatus', 'loading'], false)
        .setIn(['getDepartmentsStatus', 'loaded'], true)
        .setIn(['getDepartmentsStatus', 'error'], false)
        .set('departments', fromJS(action.departments));
    case GET_DEPARTMENTS_FAIL:
      return state
        .setIn(['getDepartmentsStatus', 'loading'], false)
        .setIn(['getDepartmentsStatus', 'loaded'], false)
        .setIn(['getDepartmentsStatus', 'error'], action.error);
    case GET_ASSETS:
      return state
        .setIn(['getAssetsStatus', 'loading'], true)
        .setIn(['getAssetsStatus', 'loaded'], false)
        .setIn(['getAssetsStatus', 'error'], false);
    case GET_ASSETS_SUCCESS:
      return state
        .setIn(['getAssetsStatus', 'loading'], false)
        .setIn(['getAssetsStatus', 'loaded'], true)
        .setIn(['getAssetsStatus', 'error'], false)
        .set('assets', fromJS(action.assets));
    case GET_ASSETS_FAIL:
      return state
        .setIn(['getAssetsStatus', 'loading'], false)
        .setIn(['getAssetsStatus', 'loaded'], false)
        .setIn(['getAssetsStatus', 'error'], action.error);
    case DELETE_ENTRY:
      return state
        .setIn(['deleteEntryStatus', 'loading'], true)
        .setIn(['deleteEntryStatus', 'loaded'], false)
        .deleteIn(action.entry);
    // case DELETE_ENTRY_SUCCESS:
    //   return state
    //     .setIn(['deleteEntryStatus', 'loading'], false)
    //     .setIn(['deleteEntryStatus', 'loaded'], true)
    //     .setIn(['deleteEntryStatus', 'error'], false)
    //     .deleteIn([action.name, action.index]);
    // case DELETE_ENTRY_FAIL:
    //   return state
    //     .setIn(['deleteEntryStatus', 'loading'], false)
    //     .setIn(['deleteEntryStatus', 'loaded'], false)
    //     .setIn(['deleteEntryStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default editEmployeeReducer;
