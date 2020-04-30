import { fromJS } from 'immutable';
import { 
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_ANOTHER_ENTRY,
  GET_ROLES,
  GET_ROLES_SUCCESS,
  GET_ROLES_FAIL,
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
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAIL,
 } from './constants';

export const initialState = fromJS({
  formDetails: {
    name: {
      name: 'name',
      label: 'Name',
      status: true,
      errorText: '',
      value: '',
      rules: [],
      fieldName: 'Name',
      placeholder: 'Enter name',
    },
    role: {
      name: 'role',
      label: 'Role',
      status: true,
      errorText: '',
      value: '',
      rules: [],
      fieldName: 'Role',
      placeholder: 'Enter Role',
    },
    email: {
      name: 'email',
      label: 'Email',
      status: true,
      errorText: '',
      value: '',
      rules: [],
      fieldName: 'Email',
      placeholder: 'Enter email',
    },
    password: {
      name: 'password',
      label: 'Password',
      status: true,
      errorText: '',
      value: '',
      rules: [],
      fieldName: 'Password',
      placeholder: 'Enter password',
    },
    isActive: {
      name: 'isActive',
      label: 'Is Active',
      status: true,
      errorText: '',
      value: true,
      rules: [],
      fieldName: 'Is Active',
      placeholder: 'is active',
    },
    isVerified: {
      name: 'isVerified',
      label: 'Is Verified',
      status: true,
      errorText: '',
      value: true,
      rules: [],
      fieldName: 'Is Verified',
      placeholder: 'is verified',
    },
    personalInformation: {
      // name: { 
      //   name: 'name',
      //   label: 'Name',
      //   status: true,
      //   errorText: '',
      //   value: '',
      //   rules: [],
      //   fieldName: 'Name',
      //   placeholder: 'Enter employee name',
      // },
      companyEmail: { 
        name: 'companyEmail',
        label: 'Company Email',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Company Email',
        placeholder: 'Enter company email',
      },
      fatherName: { 
        name: 'fatherName',
        label: 'Father Name',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'father name',
        placeholder: 'Enter father name name',
      },
      dateOfBirth: { 
        name: 'dateOfBirth',
        label: 'Date Of Birth',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Date Of Birth',
        placeholder: 'Select date of birth',
      },
      gender: { 
        name: 'gender',
        label: 'Gender',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Gender',
        placeholder: 'Select gender',
      },
      nationality: { 
        name: 'nationality',
        label: 'Nationality',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Nationality',
        placeholder: 'Select nationality',
      },
      country: { 
        name: 'country',
        label: 'Country',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Country',
        placeholder: 'Select country',
      },
      state: { 
        name: 'state',
        label: 'State',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'State',
        placeholder: 'Select state',
      },
      city: { 
        name: 'city',
        label: 'City',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'City',
        placeholder: 'Select city',
      },
      religion: { 
        name: 'religion',
        label: 'Religion',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Religion',
        placeholder: 'Enter religion',
      },
      maritalStatus: { 
        name: 'maritalStatus',
        label: 'Marital Status',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Marital Status',
        placeholder: 'Select marital status',
      },
      bloodGroup: { 
        name: 'bloodGroup',
        label: 'Blood Group',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Blood Group',
        placeholder: 'Select blood group',
      },
      disability: { 
        name: 'disability',
        label: 'Disability',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Disability',
        placeholder: 'Enter disability',
      },
      cnic: { 
        name: 'cnic',
        label: 'CNIC',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'CNIC',
        placeholder: 'Enter cnic', 
      },
      ntn: { 
        name: 'ntn',
        label: 'NTN',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'NTN',
        placeholder: 'Enter ntn', 
      },
      domicile: { 
        name: 'domicile',
        label: 'Domicile',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'NTN',
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
        rules: [],
        fieldName: 'Employee Id',
        placeholder: 'Enter employee Id',
      },
      employeeStatus: { 
        name: 'employeeStatus',
        label: 'Employee Status',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Employee Status',
        placeholder: 'Select employee status',
      },
      designation: { 
        name: 'designation',
        label: 'Designation',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Designation',
        placeholder: 'Enter designation',
      },
      socialSecurity: { 
        name: 'socialSecurity',
        label: 'Social Security',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Social Security',
        placeholder: 'Enter social security',
      },
      healthBenefits: { 
        name: 'healthBenefits',
        label: 'Health Benefits',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Health Benefits',
        placeholder: 'Enter health benefits',
      },
      providentFund: { 
        name: 'providentFund',
        label: 'Provident Fund',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Provident Fund',
        placeholder: 'Enter provident fund',
      },
      department: { 
        name: 'department',
        label: 'Department',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Department',
        placeholder: 'Select department',
      },
      joiningDate: { 
        name: 'joiningDate',
        label: 'Joining Date',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Joining Date',
        placeholder: 'Select joining date',
      },
      resignationDate: { 
        name: 'resignationDate',
        label: 'Resignation Date',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Resignation Date',
        placeholder: 'Select resignation date',
      },
      exitDate: { 
        name: 'exitDate',
        label: 'Exit Date',
        status: true,
        errorText: '',
        value: '',
        rules: [],
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
          rules: [],
          fieldName: 'Title',
          placeholder: 'Enter title',
         },
        type: { 
          name: 'type',
          label: 'Type',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Type',
          placeholder: 'Select type',
        },
        detail: { 
          name: 'detail',
          label: 'Detail',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Detail',
          placeholder: 'Enter detail',
        },
      },
    ],
    salarySettings: {
      modeOfPayment: { 
        name: 'modeOfPayment',
        label: 'Mode of Payment',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Mode of Payment',
        placeholder: 'Select mode of payment',
      },
      exGratiaOnOvertime: { 
        name: 'exGratiaOnOvertime',
        label: 'Ex-Gratia on Overtime',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Ex-Gratia on Overtime',
        placeholder: 'Enter ex-gratia',
      },
      gratuity: { 
        name: 'gratuity',
        label: 'Gratuity',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Gratuity',
        placeholder: 'Enter gratuity',
      },
      bankDetails: { 
        name: 'bankDetails',
        label: 'Bank Details',
        status: true,
        errorText: '',
        value: '',
        rules: [],
        fieldName: 'Bank Details',
        placeholder: 'Enter bank details',
      },
    },
    academics: [
      {
        degreeName: { 
          name: 'degreeName',
          label: 'degreeName',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Degree Name',
          placeholder: 'Enter degree name',
        },
        board: { 
          name: 'board',
          label: 'Board',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Board',
          placeholder: 'Enter board name',
        },
        university: { 
          name: 'university',
          label: 'University',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'University',
          placeholder: 'Enter university name',
        },
        marks: { 
          name: 'marks',
          label: 'Marks',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Marks',
          placeholder: 'Enter marks',
        },
        grade: { 
          name: 'grade',
          label: 'Grade',
          status: true,
          errorText: '',
          value: '',
          rules: [],
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
          rules: [],
          fieldName: 'Organization',
          placeholder: 'Enter organization',
        },
        designation: { 
          name: 'designation',
          label: 'Designation',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Designation',
          placeholder: 'Enter designation',
        },
        duration: { 
          name: 'duration',
          label: 'Duration',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Duration',
          placeholder: 'Enter duration',
        },
        leavingReason: { 
          name: 'leavingReason',
          label: 'Leaving Reason',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Leaving Reason',
          placeholder: 'Enter leaving reason',
        },
        salary: { 
          name: 'salary',
          label: 'Salary',
          status: true,
          errorText: '',
          value: '',
          rules: [],
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
          rules: [],
          fieldName: 'Name',
          placeholder: 'Enter name',
        },
        gender: { 
          name: 'gender',
          label: 'Gender',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Gender',
          placeholder: 'Select gender',
        },
        relation: { 
          name: 'relation',
          label: 'Relation',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Relation',
          placeholder: 'Select relation ',
        },
        contact: { 
          name: 'contact',
          label: 'Contact',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Contact',
          placeholder: 'Enter contact',
        },
        dateOfBirth: { 
          name: 'dateOfBirth',
          label: 'Date Of Birth',
          status: true,
          errorText: '',
          value: '',
          rules: [],
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
          rules: [],
          fieldName: 'ID',
          placeholder: 'Select asset',
        },
        detail: { 
          name: 'detail',
          label: 'Detail',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Detail',
          placeholder: 'Enter detail',
        },
        returnable: { 
          name: 'returnable',
          label: 'Returnable',
          status: true,
          errorText: '',
          value: true,
          rules: [],
          fieldName: 'Returnable',
          placeholder: 'Returnable',
        },
        status: { 
          name: 'status',
          label: 'Dtatus',
          status: true,
          errorText: '',
          value: false,
          rules: [],
          fieldName: 'Status',
          placeholder: 'status',
        },
        issueDate: { 
          name: 'issueDate',
          label: 'Issue Date',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Issue Date',
          placeholder: 'Select issue date',
        },
      },
    ],
    leaveBalance: { 
      name: 'leaveBalance',
      label: 'Leave Balance',
      status: true,
      errorText: '',
      value: '',
      rules: [],
      fieldName: 'Leave Balance',
      placeholder: 'Enter leave balance',
    },
    duties: [
      {
        job: { 
          name: 'job',
          label: 'Job',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Job',
          placeholder: '',
        },
        frequency: { 
          name: 'frequency',
          label: 'Frequency',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Frequency',
          placeholder: 'Select frequency',
        },
        effectiveFrom: { 
          name: 'effectiveFrom',
          label: 'Effective From',
          status: true,
          errorText: '',
          value: '',
          rules: [],
          fieldName: 'Effective From',
          placeholder: 'Select a date',
        },
        enhancedTill: { 
          name: 'enhancedTill',
          label: 'Enhanced Till',
          status: true,
          errorText: '',
          value: '',
          rules: [],
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
  getRolesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
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
  addEmployeeStatus: {
    loading: false,
    loaded: false,
    error: false,
  }
});

function addEmployeeReducer(state = initialState, action) {
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
    case ADD_EMPLOYEE:
      return state
        .setIn(['addEmployeeStatus', 'loading'], true)
        .setIn(['addEmployeeStatus', 'loaded'], false)
        .setIn(['addEmployeeStatus', 'error'], false);
    case ADD_EMPLOYEE_SUCCESS:
      return state
        .setIn(['addEmployeeStatus', 'loading'], false)
        .setIn(['addEmployeeStatus', 'loaded'], true)
        .setIn(['addEmployeeStatus', 'error'], false);
    case ADD_EMPLOYEE_FAIL:
      return state
        .setIn(['addEmployeeStatus', 'loading'], false)
        .setIn(['addEmployeeStatus', 'loaded'], false)
        .setIn(['addEmployeeStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default addEmployeeReducer;
