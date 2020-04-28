import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { ADD_PROJECT } from './constants';
import { addProjectSuccess, addProjectFail } from './actions';

export function* addProject(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/projects`;
  const requestBody = action.projectInfo;
  const options = createRequestOptions('POST', requestBody, requestHeader);
  const project = yield call(request, requestURL, options);
  if (!project.err) {
    yield put(addProjectSuccess(project.data));
  } else {
    yield put(addProjectFail(project.err.reason));
  }
}

export default function* addProjectWatcher() {
  yield takeLatest(ADD_PROJECT, addProject);
}
