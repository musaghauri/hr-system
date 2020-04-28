import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { GET_PRIORITY } from './constants';
import { getPrioritySuccess, getPriorityFail } from './actions';

export function* getPriority(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/priorities/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const priority = yield call(request, requestURL, options);
  if (!priority.err) {
    yield put(getPrioritySuccess(priority.data));
  } else {
    yield put(getPriorityFail(priority.err.reason));
  }
}

export default function* viewPriorityWatcher() {
  yield takeLatest(GET_PRIORITY, getPriority);
}
