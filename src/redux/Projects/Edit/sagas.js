import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions, loadFormDetails } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { EDIT_PROJECT, GET_PROJECT, GET_EMPLOYEES } from './constants';
import {
  getProjectSuccess,
  getProjectFail,
  editProjectSuccess,
  editProjectFail,
  getEmployeesSuccess,
  getEmployeesFail
} from './actions';
import { selectFormDetails } from './selectors';

export function* getProject(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/projects/${action.id}?populate=false`;
  const options = createRequestOptions('GET', null, requestHeader);
  const project = yield call(request, requestURL, options);
  const FORMDETAILS = yield select(selectFormDetails());
  if (!project.err) {
    const formDetails = yield loadFormDetails(
      FORMDETAILS.toJS(),
      project.data
    );
    yield put(getProjectSuccess(formDetails));
  } else {
    yield put(getProjectFail(project.err.reason));
  }
}

export function* editProject(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/projects/${action.id}`;
  const requestBody = action.projectInfo;
  const options = createRequestOptions('PUT', requestBody, requestHeader);
  const project = yield call(request, requestURL, options);
  if (!project.err) {
    yield put(editProjectSuccess(project.data));
  } else {
    yield put(editProjectFail(project.err.reason));
  }
}

export function* getEmployees() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/employees?role=5e8c81600d989e35800e2168`;
  const options = createRequestOptions('GET', null, requestHeader);
  const employees = yield call(request, requestURL, options);
  if (!employees.err) {
    yield put(
      getEmployeesSuccess(
        employees.data.items.map(employee => ({
          key: `employee_${employee._id}`,
          value: employee._id,
          text: employee.name,
        }))
      )
    );
  } else {
    yield put(getEmployeesFail(employees.err.reason));
  }
}

export default function* editProjectWatcher() {
  yield takeLatest(GET_PROJECT, getProject);
  yield takeLatest(EDIT_PROJECT, editProject);
  yield takeLatest(GET_EMPLOYEES, getEmployees);
}
