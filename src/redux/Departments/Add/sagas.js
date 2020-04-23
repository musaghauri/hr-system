import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { ADD_DEPARTMENT } from './constants';
import { addDepartmentSuccess, addDepartmentFail } from './actions';

export function* addDepartment(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/departments`;
  const requestBody = action.departmentInfo;
  const options = createRequestOptions('POST', requestBody, requestHeader);
  const department = yield call(request, requestURL, options);
  if (!department.err) {
    yield put(addDepartmentSuccess(department.data));
  } else {
    yield put(addDepartmentFail(department.err.reason));
  }
}

export default function* addDepartmentWatcher() {
  yield takeLatest(ADD_DEPARTMENT, addDepartment);
}
