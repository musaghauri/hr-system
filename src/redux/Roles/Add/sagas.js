import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { ADD_ROLE, GET_PERMISSIONS } from './constants';
import {
  addRoleSuccess,
  addRoleFail,
  getPermissionsSuccess,
  getPermissionsFail,
} from './actions';

export function* addRole(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/roles`;
  const requestBody = action.roleInfo;
  const options = createRequestOptions('POST', requestBody, requestHeader);
  const role = yield call(request, requestURL, options);
  if (!role.err) {
    yield put(addRoleSuccess(role.data));
  } else {
    yield put(addRoleFail(role.err.reason));
  }
}

export function* getPermissions() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/permissions`;
  const options = createRequestOptions('GET', null, requestHeader);
  const permissions = yield call(request, requestURL, options);
  if (!permissions.err) {
    yield put(
      getPermissionsSuccess(
        permissions.data.items.map(permission => ({
          key: `permission_${permission._id}`,
          value: permission._id,
          text: permission.name,
        }))
      )
    );
  } else {
    yield put(getPermissionsFail(permissions.err.reason));
  }
}
export default function* addRoleWatcher() {
  yield takeLatest(ADD_ROLE, addRole);
  yield takeLatest(GET_PERMISSIONS, getPermissions);
}
