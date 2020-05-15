import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { GET_DOCUMENT } from './constants';
import { getDocumentSuccess, getDocumentFail } from './actions';

export function* getDocument(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/documents/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const document = yield call(request, requestURL, options);
  if (!document.err) {
    yield put(getDocumentSuccess(document.data));
  } else {
    yield put(getDocumentFail(document.err.reason));
  }
}

export default function* viewDocumentWatcher() {
  yield takeLatest(GET_DOCUMENT, getDocument);
}
