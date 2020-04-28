import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { DELETE_PROJECT, GET_PROJECTS } from './constants';
import {
  deleteProjectFail,
  deleteProjectSuccess,
  getProjectsSuccess,
  getProjectsFail,
} from './actions';

export function* deleteProject(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/projects/${action.id}`;
  const options = createRequestOptions('DELETE', null, requestHeader);
  const status = yield call(request, requestURL, options);
  if (!status.err) {
    yield put(deleteProjectSuccess(action.index));
  } else {
    yield put(deleteProjectFail(status.err.reason));
  }
}

export function* getProjects() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/projects`;
  const options = createRequestOptions('GET', null, requestHeader);
  const projects = yield call(request, requestURL, options);
  if (!projects.err) {
    yield put(getProjectsSuccess(projects.data));
  } else {
    yield put(getProjectsFail(projects.err.reason));
  }
}

export default function* projectsListWatcher() {
  yield takeLatest(DELETE_PROJECT, deleteProject);
  yield takeLatest(GET_PROJECTS, getProjects);
}
