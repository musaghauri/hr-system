import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { GET_PERMISSION } from './constants';
import { getPermissionSuccess, getPermissionFail } from './actions';

export function* getPermission(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/permissions/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const permission = yield call(request, requestURL, options);
  if (!permission.err) {
    yield put(getPermissionSuccess(permission.data));
  } else {
    yield put(getPermissionFail(permission.err.reason));
  }
}

export default function* permissionsListWatcher() {
  yield takeLatest(GET_PERMISSION, getPermission);
}
