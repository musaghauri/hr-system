import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { GET_DEPARTMENT } from './constants';
import { getDepartmentSuccess, getDepartmentFail } from './actions';

export function* getDepartment(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/departments/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const department = yield call(request, requestURL, options);
  if (!department.err) {
    yield put(getDepartmentSuccess(department.data));
  } else {
    yield put(getDepartmentFail(department.err.reason));
  }
}

export default function* viewDepartmentWatcher() {
  yield takeLatest(GET_DEPARTMENT, getDepartment);
}
