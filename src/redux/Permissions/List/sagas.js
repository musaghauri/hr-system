import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { DELETE_PERMISSION, GET_PERMISSIONS } from './constants';
import {
  deletePermissionFail,
  deletePermissionSuccess,
  getPermissionsSuccess,
  getPermissionsFail,
} from './actions';

export function* deletePermission(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/permissions/${action.id}`;
  const options = createRequestOptions('DELETE', null, requestHeader);
  const status = yield call(request, requestURL, options);
  if (!status.err) {
    yield put(deletePermissionSuccess(action.index));
  } else {
    yield put(deletePermissionFail(status.err.reason));
  }
}

export function* getPermissions() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/permissions`;
  const options = createRequestOptions('GET', null, requestHeader);
  const permissions = yield call(request, requestURL, options);
  if (!permissions.err) {
    yield put(getPermissionsSuccess(permissions.data));
  } else {
    yield put(getPermissionsFail(permissions.err.reason));
  }
}

export default function* permissionsListWatcher() {
  yield takeLatest(DELETE_PERMISSION, deletePermission);
  yield takeLatest(GET_PERMISSIONS, getPermissions);
}
