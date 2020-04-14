import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import Router from 'next/router';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { LOGIN, GET_ROLES } from './constants';
import { loginFail, getRolesSuccess, getRolesFail } from './actions';

export function* login(action) {
  const requestURL = `${NEXT_API_URL}/auth/login`;
  const requestBody = action.loginInfo;
  const options = createRequestOptions('POST', requestBody);
  const user = yield call(request, requestURL, options);
  if (!user.err) {
    cookie.saveAuthCookie(user.data);
    yield put(Router.replace('/'));
  } else {
    yield put(loginFail(user.err.reason));
  }
}

export function* getRoles() {
  const requestURL = `${NEXT_API_URL}/roles`;
  const roles = yield call(request, requestURL);
  if (!roles.err) {
    yield put(
      getRolesSuccess(
        roles.data.items.map(role => ({
          key: `role_${role._id}`,
          value: role._id,
          text: role.name,
        }))
      )
    );
  } else {
    yield put(getRolesFail(roles.err.reason));
  }
}

export default function* loginWatcher() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(GET_ROLES, getRoles);
}
