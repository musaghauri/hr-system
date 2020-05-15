import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions, loadFormDetails } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { EDIT_DOCUMENT, GET_DOCUMENT } from './constants';
import {
  getDocumentSuccess,
  getDocumentFail,
  editDocumentSuccess,
  editDocumentFail,
} from './actions';
import { selectFormDetails } from './selectors';

export function* getDocument(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/documents/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const document = yield call(request, requestURL, options);
  const FORMDETAILS = yield select(selectFormDetails());
  if (!document.err) {
    const formDetails = yield loadFormDetails(
      FORMDETAILS.toJS(),
      document.data
    );
    yield put(getDocumentSuccess(formDetails));
  } else {
    yield put(getDocumentFail(document.err.reason));
  }
}

export function* editDocument(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/documents/${action.id}`;
  const requestBody = action.documentInfo;
  const options = createRequestOptions('PUT', requestBody, requestHeader);
  const document = yield call(request, requestURL, options);
  if (!document.err) {
    yield put(editDocumentSuccess(document.data));
  } else {
    yield put(editDocumentFail(document.err.reason));
  }
}

export default function* editDocumentWatcher() {
  yield takeLatest(GET_DOCUMENT, getDocument);
  yield takeLatest(EDIT_DOCUMENT, editDocument);
}
