import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { DELETE_ROLE, GET_ROLES } from './constants';
import {
  deleteRoleFail,
  deleteRoleSuccess,
  getRolesSuccess,
  getRolesFail,
} from './actions';

export function* deleteRole(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/roles/${action.id}`;
  const options = createRequestOptions('DELETE', null, requestHeader);
  const status = yield call(request, requestURL, options);
  if (!status.err) {
    yield put(deleteRoleSuccess(action.index));
  } else {
    yield put(deleteRoleFail(status.err.reason));
  }
}

export function* getRoles() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/roles`;
  const options = createRequestOptions('GET', null, requestHeader);
  const roles = yield call(request, requestURL, options);
  if (!roles.err) {
    yield put(getRolesSuccess(roles.data));
  } else {
    yield put(getRolesFail(roles.err.reason));
  }
}

export default function* rolesListWatcher() {
  yield takeLatest(DELETE_ROLE, deleteRole);
  yield takeLatest(GET_ROLES, getRoles);
}
