import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  GET_PROJECT,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAIL,
  EDIT_PROJECT,
  EDIT_PROJECT_SUCCESS,
  EDIT_PROJECT_FAIL,
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
  getProjectStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  editProjectStatus: {
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

function editProjectReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case GET_PROJECT:
      return state
        .setIn(['getProjectStatus', 'loading'], true)
        .setIn(['getProjectStatus', 'loaded'], false)
        .setIn(['getProjectStatus', 'error'], false);
    case GET_PROJECT_SUCCESS:
      return state
        .setIn(['getProjectStatus', 'loading'], false)
        .setIn(['getProjectStatus', 'loaded'], true)
        .setIn(['getProjectStatus', 'error'], false)
        .setIn(['formDetails'], fromJS(action.project));
    case GET_PROJECT_FAIL:
      return state
        .setIn(['getProjectStatus', 'loading'], false)
        .setIn(['getProjectStatus', 'loaded'], false)
        .setIn(['getProjectStatus', 'error'], action.error);
    case EDIT_PROJECT:
      return state
        .setIn(['editProjectStatus', 'loading'], true)
        .setIn(['editProjectStatus', 'loaded'], false)
        .setIn(['editProjectStatus', 'error'], false);
    case EDIT_PROJECT_SUCCESS:
      return state
        .setIn(['editProjectStatus', 'loading'], false)
        .setIn(['editProjectStatus', 'loaded'], true)
        .setIn(['editProjectStatus', 'error'], false);
    case EDIT_PROJECT_FAIL:
      return state
        .setIn(['editProjectStatus', 'loading'], false)
        .setIn(['editProjectStatus', 'loaded'], false)
        .setIn(['editProjectStatus', 'error'], action.error);
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

export default editProjectReducer;
