import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { GET_PROJECT } from './constants';
import { getProjectSuccess, getProjectFail } from './actions';

export function* getProject(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/projects/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const project = yield call(request, requestURL, options);
  if (!project.err) {
    yield put(getProjectSuccess(project.data));
  } else {
    yield put(getProjectFail(project.err.reason));
  }
}

export default function* viewProjectWatcher() {
  yield takeLatest(GET_PROJECT, getProject);
}
