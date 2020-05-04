import {
  RESET_REDUCER,
  GET_EMPLOYEE,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAIL,
} from './constants';

export function resetReducer() {
  return {
    type: RESET_REDUCER,
  };
}

export function getEmployee(id) {
  return {
    type: GET_EMPLOYEE,
    id,
  };
}

export function getEmployeeSuccess(employee) {
  return {
    type: GET_EMPLOYEE_SUCCESS,
    employee,
  };
}

export function getEmployeeFail(error) {
  return {
    type: GET_EMPLOYEE_FAIL,
    error,
  };
}
