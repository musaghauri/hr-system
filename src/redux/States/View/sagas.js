import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { GET_STATE } from './constants';
import { getStateSuccess, getStateFail } from './actions';

export function* getState(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/states/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const state = yield call(request, requestURL, options);
  if (!state.err) {
    yield put(getStateSuccess(state.data));
  } else {
    yield put(getStateFail(state.err.reason));
  }
}

export default function* statesListWatcher() {
  yield takeLatest(GET_STATE, getState);
}
