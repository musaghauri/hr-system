import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { GET_EMPLOYEES, DELETE_EMPLOYEE } from './constants';
import {
  getEmployeesSuccess,
  getEmployeesFail,
  deleteEmployeeFail,
  deleteEmployeeSuccess,
} from './actions';

export function* getEmployees() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/employees?role=5e8c81600d989e35800e2168`;
  const options = createRequestOptions('GET', null, requestHeader);
  const employees = yield call(request, requestURL, options);
  if (!employees.err) {
    yield put(getEmployeesSuccess(employees.data));
    // employees.data.items.map(employee => ({
    //   key: `employee_${employee._id}`,
    //   value: employee._id,
    //   text: employee.name,
    // }))
  } else {
    yield put(getEmployeesFail(employees.err.reason));
  }
}
export function* deleteEmployee(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/employees/${action.id}`;
  const options = createRequestOptions('DELETE', null, requestHeader);
  const status = yield call(request, requestURL, options);
  if (!status.err) {
    yield put(deleteEmployeeSuccess(action.index));
  } else {
    yield put(deleteEmployeeFail(status.err.reason));
  }
}

export default function* EmployeesListWatcher() {
  yield takeLatest(GET_EMPLOYEES, getEmployees);
  yield takeLatest(DELETE_EMPLOYEE, deleteEmployee);
}
