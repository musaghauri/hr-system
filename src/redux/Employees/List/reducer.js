import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAIL,
  DELETE_EMPLOYEE,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAIL,
} from './constants';

export const initialState = fromJS({
  headings: [
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'Detail',
      name: 'detail',
    },
    {
      label: 'Department',
      name: 'department',
    },
    {
      label: 'Active',
      name: 'isActive',
    },
    {
      label: 'Status',
      name: 'status',
    },
    {
      label: 'Edit',
      name: 'edit',
    },
    {
      label: 'Block',
      name: 'block',
    },
    {
      label: 'View',
      name: 'view',
    },
  ],
  employees: {
    items: [],
    total_count: 0,
  },
  getEmployeesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  deleteEmployeeStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function employeesListReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
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
    case DELETE_EMPLOYEE:
      return state
        .setIn(['deleteEmployeeStatus', 'loading'], true)
        .setIn(['deleteEmployeeStatus', 'loaded'], false)
        .setIn(['deleteEmployeeStatus', 'error'], false);
    case DELETE_EMPLOYEE_SUCCESS:
      return state
        .setIn(['deleteEmployeeStatus', 'loading'], false)
        .setIn(['deleteEmployeeStatus', 'loaded'], true)
        .setIn(['deleteEmployeeStatus', 'error'], false)
        .deleteIn(['employees', 'items', action.index]);
    case DELETE_EMPLOYEE_FAIL:
      return state
        .setIn(['deleteEmployeeStatus', 'loading'], false)
        .setIn(['deleteEmployeeStatus', 'loaded'], false)
        .setIn(['deleteEmployeeStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default employeesListReducer;
