import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { ADD_PRIORITY } from './constants';
import { addPrioritySuccess, addPriorityFail } from './actions';

export function* addPriority(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/priorities`;
  const requestBody = action.priorityInfo;
  const options = createRequestOptions('POST', requestBody, requestHeader);
  const Priority = yield call(request, requestURL, options);
  if (!Priority.err) {
    yield put(addPrioritySuccess(Priority.data));
  } else {
    yield put(addPriorityFail(Priority.err.reason));
  }
}

export default function* addPriorityWatcher() {
  yield takeLatest(ADD_PRIORITY, addPriority);
}
