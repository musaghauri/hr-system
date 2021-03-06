import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_BRANCH,
  ADD_BRANCH_SUCCESS,
  ADD_BRANCH_FAIL,
  GET_DEPARTMENTS,
  GET_DEPARTMENTS_SUCCESS,
  GET_DEPARTMENTS_FAIL,
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  GET_STATES,
  GET_STATES_SUCCESS,
  GET_STATES_FAIL,
  GET_CITIES,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAIL,
} from './constants';

export const initialState = fromJS({
  formDetails: {
    country: {
      name: 'country',
      label: 'Country',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'Country',
      placeholder: 'Enter branch country',
    },
    state: {
      name: 'state',
      label: 'State',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'State',
      placeholder: 'Enter branch state',
    },
    city: {
      name: 'city',
      label: 'City',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'City',
      placeholder: 'Enter branch city',
    },
    address: {
      name: 'address',
      label: 'Address',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'Address',
      placeholder: 'Enter address',
    },
    contact: {
      landline: {
        name: 'contact,landline',
        label: 'Contact',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Contact',
        placeholder: 'Enter contact',
      },
    },
    departments: {
      name: 'departments',
      label: 'Departments',
      status: true,
      errorText: '',
      value: [],
      rules: [],
      fieldName: 'Departments',
      placeholder: 'Enter departments',
    },
  },
  countries: [],
  states: [],
  cities: [],
  departments: [],
  addBranchStatus: {
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
});

function addBranchReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case ADD_BRANCH:
      return state
        .setIn(['addBranchStatus', 'loading'], true)
        .setIn(['addBranchStatus', 'loaded'], false)
        .setIn(['addBranchStatus', 'error'], false);
    case ADD_BRANCH_SUCCESS:
      return state
        .setIn(['addBranchStatus', 'loading'], false)
        .setIn(['addBranchStatus', 'loaded'], true)
        .setIn(['addBranchStatus', 'error'], false);
    case ADD_BRANCH_FAIL:
      return state
        .setIn(['addBranchStatus', 'loading'], false)
        .setIn(['addBranchStatus', 'loaded'], false)
        .setIn(['addBranchStatus', 'error'], action.error);
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
    default:
      return state;
  }
}

export default addBranchReducer;
