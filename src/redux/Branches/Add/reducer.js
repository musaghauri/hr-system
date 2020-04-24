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
  GET_CITIES,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAIL,
} from './constants';

export const initialState = fromJS({
  formDetails: {
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
      name: 'contact',
      label: 'Contact',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'Contact',
      placeholder: 'Enter contact',
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
  cities: [],
  departments: [],
  addBranchStatus: {
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
