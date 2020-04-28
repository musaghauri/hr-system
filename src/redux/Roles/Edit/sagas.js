import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions, loadFormDetails } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { EDIT_ROLE, GET_ROLE, GET_PERMISSIONS } from './constants';
import {
  getRoleSuccess,
  getRoleFail,
  editRoleSuccess,
  editRoleFail,
  getPermissionsSuccess,
  getPermissionsFail,
} from './actions';
import { selectFormDetails } from './selectors';

export function* getRole(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/roles/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const role = yield call(request, requestURL, options);
  const FORMDETAILS = yield select(selectFormDetails());
  if (!role.err) {
    const formDetails = yield loadFormDetails(FORMDETAILS.toJS(), role.data);
    yield put(getRoleSuccess(formDetails));
  } else {
    yield put(getRoleFail(role.err.reason));
  }
}

export function* editRole(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/roles/${action.id}`;
  const requestBody = action.roleInfo;
  const options = createRequestOptions('PUT', requestBody, requestHeader);
  const role = yield call(request, requestURL, options);
  if (!role.err) {
    yield put(editRoleSuccess(role.data));
  } else {
    yield put(editRoleFail(role.err.reason));
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

export default function* editRoleWatcher() {
  yield takeLatest(GET_ROLE, getRole);
  yield takeLatest(EDIT_ROLE, editRole);
  yield takeLatest(GET_PERMISSIONS, getPermissions);
}
