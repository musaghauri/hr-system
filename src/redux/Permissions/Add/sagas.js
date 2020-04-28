import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { ADD_PERMISSION } from './constants';
import { addPermissionSuccess, addPermissionFail } from './actions';

export function* addPermission(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/permissions`;
  const requestBody = action.permissionInfo;
  const options = createRequestOptions('POST', requestBody, requestHeader);
  const permission = yield call(request, requestURL, options);
  if (!permission.err) {
    yield put(addPermissionSuccess(permission.data));
  } else {
    yield put(addPermissionFail(permission.err.reason));
  }
}

export default function* addPermissionWatcher() {
  yield takeLatest(ADD_PERMISSION, addPermission);
}
