import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { ADD_DOCUMENT } from './constants';
import { addDocumentSuccess, addDocumentFail } from './actions';

export function* addDocument(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/documents`;
  const requestBody = action.documentInfo;
  const options = createRequestOptions('POST', requestBody, requestHeader);
  const document = yield call(request, requestURL, options);
  if (!document.err) {
    yield put(addDocumentSuccess(document.data));
  } else {
    yield put(addDocumentFail(document.err.reason));
  }
}

export default function* addDocumentWatcher() {
  yield takeLatest(ADD_DOCUMENT, addDocument);
}
