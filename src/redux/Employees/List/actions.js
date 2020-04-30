import { 
  RESET_REDUCER,
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAIL,
 } from './constants';

  export function resetReducer() {
    return {
      type: RESET_REDUCER,
    };
  }

  export function getEmployees() {
    return {
      type: GET_EMPLOYEES,
    };
  }

  export function getEmployeesSuccess(employees) {
    return {
      type: GET_EMPLOYEES_SUCCESS,
      employees,
    };
  }

  export function getEmployeesFail(error) {
    return {
      type: GET_EMPLOYEES_FAIL,
      error,
    };
  }