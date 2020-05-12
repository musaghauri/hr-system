import {
  RESET_REDUCER,
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAIL,
  DELETE_EMPLOYEE,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAIL,
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

export function deleteEmployee(id, index) {
  return {
    type: DELETE_EMPLOYEE,
    id,
    index,
  };
}

export function deleteEmployeeSuccess(index) {
  return {
    type: DELETE_EMPLOYEE_SUCCESS,
    index,
  };
}

export function deleteEmployeeFail(error) {
  return {
    type: DELETE_EMPLOYEE_FAIL,
    error,
  };
}
