import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { DELETE_DEPARTMENT, GET_DEPARTMENTS } from './constants';
import {
  deleteDepartmentFail,
  deleteDepartmentSuccess,
  getDepartmentsSuccess,
  getDepartmentsFail,
} from './actions';

export function* deleteDepartment(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/departments/${action.id}`;
  const options = createRequestOptions('DELETE', null, requestHeader);
  const status = yield call(request, requestURL, options);
  if (!status.err) {
    yield put(deleteDepartmentSuccess(action.index));
  } else {
    yield put(deleteDepartmentFail(status.err.reason));
  }
}

export function* getDepartments() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/departments`;
  const options = createRequestOptions('GET', null, requestHeader);
  const departments = yield call(request, requestURL, options);
  if (!departments.err) {
    yield put(getDepartmentsSuccess(departments.data));
  } else {
    yield put(getDepartmentsFail(departments.err.reason));
  }
}

export default function* departmentsListWatcher() {
  yield takeLatest(DELETE_DEPARTMENT, deleteDepartment);
  yield takeLatest(GET_DEPARTMENTS, getDepartments);
}
