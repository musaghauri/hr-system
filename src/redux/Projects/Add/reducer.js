import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_PROJECT,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAIL,
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAIL,
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
      placeholder: 'Enter project name',
    },
    employees: {
      name: 'employees',
      label: 'Employees',
      status: true,
      errorText: '',
      value: [],
      rules: ['isRequired'],
      fieldName: 'Employees',
      placeholder: 'Select employee',
    }
  },                                             
  employees: [],
  addProjectStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  getEmployeesStatus: {
    loading: false,
    loaded: false,
    error: false,
  }
});

function addProjectReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case ADD_PROJECT:
      return state
        .setIn(['addProjectStatus', 'loading'], true)
        .setIn(['addProjectStatus', 'loaded'], false)
        .setIn(['addProjectStatus', 'error'], false);
    case ADD_PROJECT_SUCCESS:
      return state
        .setIn(['addProjectStatus', 'loading'], false)
        .setIn(['addProjectStatus', 'loaded'], true)
        .setIn(['addProjectStatus', 'error'], false);
    case ADD_PROJECT_FAIL:
      return state
        .setIn(['addProjectStatus', 'loading'], false)
        .setIn(['addProjectStatus', 'loaded'], false)
        .setIn(['addProjectStatus', 'error'], action.error);
    case GET_EMPLOYEES:
      return state
        .setIn(['getEmployeesStatus', 'loading'], true)
        .setIn(['getEmployeesStatus', 'loaded'], false)
        .setIn(['getEmployeesStatus', 'error'], false);
    case GET_EMPLOYEES_SUCCESS:
      return state
        .setIn(['getEmployeesStatus', 'loading'], false)
        .setIn(['getEmployeesStatus', 'loaded'], true)
        .setIn(['getEmployeesStatus', 'error'], false)
        .set('employees', fromJS(action.employees));
    case GET_EMPLOYEES_FAIL:
      return state
        .setIn(['getEmployeesStatus', 'loading'], false)
        .setIn(['getEmployeesStatus', 'loaded'], false)
        .setIn(['getEmployeesStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default addProjectReducer;
