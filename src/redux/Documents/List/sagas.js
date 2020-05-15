import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { DELETE_DOCUMENT, GET_DOCUMENTS } from './constants';
import {
  deleteDocumentFail,
  deleteDocumentSuccess,
  getDocumentsSuccess,
  getDocumentsFail,
} from './actions';

export function* deleteDocument(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/documents/${action.id}`;
  const options = createRequestOptions('DELETE', null, requestHeader);
  const status = yield call(request, requestURL, options);
  if (!status.err) {
    yield put(deleteDocumentSuccess(action.index));
  } else {
    yield put(deleteDocumentFail(status.err.reason));
  }
}

export function* getDocuments() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/documents`;
  const options = createRequestOptions('GET', null, requestHeader);
  const documents = yield call(request, requestURL, options);
  if (!documents.err) {
    yield put(getDocumentsSuccess(documents.data));
  } else {
    yield put(getDocumentsFail(documents.err.reason));
  }
}

export default function* documentsListWatcher() {
  yield takeLatest(DELETE_DOCUMENT, deleteDocument);
  yield takeLatest(GET_DOCUMENTS, getDocuments);
}
