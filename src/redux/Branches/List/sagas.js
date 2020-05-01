import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { DELETE_BRANCH, GET_BRANCHES } from './constants';
import {
  deleteBranchFail,
  deleteBranchSuccess,
  getBranchesSuccess,
  getBranchesFail,
} from './actions';

export function* deleteBranch(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/branches/${action.id}`;
  const options = createRequestOptions('DELETE', null, requestHeader);
  const status = yield call(request, requestURL, options);
  if (!status.err) {
    yield put(deleteBranchSuccess(action.index));
  } else {
    yield put(deleteBranchFail(status.err.reason));
  }
}

export function* getBranches() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/branches`;
  const options = createRequestOptions('GET', null, requestHeader);
  const branches = yield call(request, requestURL, options);
  if (!branches.err) {
    yield put(getBranchesSuccess(branches.data));
  } else {
    yield put(getBranchesFail(branches.err.reason));
  }
}

export default function* branchesListWatcher() {
  yield takeLatest(DELETE_BRANCH, deleteBranch);
  yield takeLatest(GET_BRANCHES, getBranches);
}