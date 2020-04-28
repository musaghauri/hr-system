import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { GET_ROLE } from './constants';
import { getRoleSuccess, getRoleFail } from './actions';

export function* getRole(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/roles/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const role = yield call(request, requestURL, options);
  if (!role.err) {
    yield put(getRoleSuccess(role.data));
  } else {
    yield put(getRoleFail(role.err.reason));
  }
}

export default function* rolesListWatcher() {
  yield takeLatest(GET_ROLE, getRole);
}
