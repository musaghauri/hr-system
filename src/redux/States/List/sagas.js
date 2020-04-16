import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { DELETE_STATE, GET_STATES } from './constants';
import {
  deleteStateFail,
  deleteStateSuccess,
  getStatesSuccess,
  getStatesFail,
} from './actions';

export function* deleteState(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/states/${action.id}`;
  const options = createRequestOptions('DELETE', null, requestHeader);
  const status = yield call(request, requestURL, options);
  if (!status.err) {
    yield put(deleteStateSuccess(action.index));
  } else {
    yield put(deleteStateFail(status.err.reason));
  }
}

export function* getStates() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/states`;
  const options = createRequestOptions('GET', null, requestHeader);
  const states = yield call(request, requestURL, options);
  if (!states.err) {
    yield put(getStatesSuccess(states.data));
  } else {
    yield put(getStatesFail(states.err.reason));
  }
}

export default function* statesListWatcher() {
  yield takeLatest(DELETE_STATE, deleteState);
  yield takeLatest(GET_STATES, getStates);
}
