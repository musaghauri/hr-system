import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions, loadFormDetails } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { EDIT_PERMISSION, GET_PERMISSION } from './constants';
import {
  getPermissionSuccess,
  getPermissionFail,
  editPermissionSuccess,
  editPermissionFail,
} from './actions';
import { selectFormDetails } from './selectors';

export function* getPermission(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/permissions/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const permission = yield call(request, requestURL, options);
  const FORMDETAILS = yield select(selectFormDetails());
  if (!permission.err) {
    const formDetails = yield loadFormDetails(
      FORMDETAILS.toJS(),
      permission.data
    );
    yield put(getPermissionSuccess(formDetails));
  } else {
    yield put(getPermissionFail(permission.err.reason));
  }
}

export function* editPermission(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/permissions/${action.id}`;
  const requestBody = action.permissionInfo;
  const options = createRequestOptions('PUT', requestBody, requestHeader);
  const permission = yield call(request, requestURL, options);
  if (!permission.err) {
    yield put(editPermissionSuccess(permission.data));
  } else {
    yield put(editPermissionFail(permission.err.reason));
  }
}

export default function* editPermissionWatcher() {
  yield takeLatest(GET_PERMISSION, getPermission);
  yield takeLatest(EDIT_PERMISSION, editPermission);
}
