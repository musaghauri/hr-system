import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { GET_BRANCH } from './constants';
import { getBranchSuccess, getBranchFail } from './actions';

export function* getBranch(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/branches/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const branch = yield call(request, requestURL, options);
  if (!branch.err) {
    yield put(getBranchSuccess(branch.data));
  } else {
    yield put(getBranchFail(branch.err.reason));
  }
}

export default function* viewBranchWatcher() {
  yield takeLatest(GET_BRANCH, getBranch);
}
