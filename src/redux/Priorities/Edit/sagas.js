import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions, loadFormDetails } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { EDIT_PRIORITY, GET_PRIORITY } from './constants';
import {
  getPrioritySuccess,
  getPriorityFail,
  editPrioritySuccess,
  editPriorityFail,
} from './actions';
import { selectFormDetails } from './selectors';

export function* getPriority(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/priorities/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const priority = yield call(request, requestURL, options);
  const FORMDETAILS = yield select(selectFormDetails());
  if (!priority.err) {
    const formDetails = yield loadFormDetails(
      FORMDETAILS.toJS(),
      priority.data
    );
    yield put(getPrioritySuccess(formDetails));
  } else {
    yield put(getPriorityFail(priority.err.reason));
  }
}

export function* editPriority(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/priorities/${action.id}`;
  const requestBody = action.priorityInfo;
  const options = createRequestOptions('PUT', requestBody, requestHeader);
  const priority = yield call(request, requestURL, options);
  if (!priority.err) {
    yield put(editPrioritySuccess(priority.data));
  } else {
    yield put(editPriorityFail(priority.err.reason));
  }
}

export default function* editPriorityWatcher() {
  yield takeLatest(GET_PRIORITY, getPriority);
  yield takeLatest(EDIT_PRIORITY, editPriority);
}
