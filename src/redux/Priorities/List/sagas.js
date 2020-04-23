import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { DELETE_PRIORITY, GET_PRIORITIES } from './constants';
import {
  deletePriorityFail,
  deletePrioritySuccess,
  getPrioritiesSuccess,
  getPrioritiesFail,
} from './actions';

export function* deletePriority(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/priorities/${action.id}`;
  const options = createRequestOptions('DELETE', null, requestHeader);
  const status = yield call(request, requestURL, options);
  if (!status.err) {
    yield put(deletePrioritySuccess(action.index));
  } else {
    yield put(deletePriorityFail(status.err.reason));
  }
}

export function* getPriorities() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/priorities`;
  const options = createRequestOptions('GET', null, requestHeader);
  const priorities = yield call(request, requestURL, options);
  if (!priorities.err) {
    yield put(getPrioritiesSuccess(priorities.data));
  } else {
    yield put(getPrioritiesFail(priorities.err.reason));
  }
}

export default function* prioritiesListWatcher() {
  yield takeLatest(DELETE_PRIORITY, deletePriority);
  yield takeLatest(GET_PRIORITIES, getPriorities);
}
