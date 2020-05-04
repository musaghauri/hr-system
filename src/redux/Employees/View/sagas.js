import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { GET_EMPLOYEE } from './constants';
import { getEmployeeSuccess, getEmployeeFail } from './actions';

export function* getEmployee(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/employees/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const employee = yield call(request, requestURL, options);
  if (!employee.err) {
    yield put(getEmployeeSuccess(employee.data));
  } else {
    yield put(getEmployeeFail(employee.err.reason));
  }
}

export default function* employeesListWatcher() {
  yield takeLatest(GET_EMPLOYEE, getEmployee);
}
