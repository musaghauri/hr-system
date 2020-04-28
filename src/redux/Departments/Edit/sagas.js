import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions, loadFormDetails } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { EDIT_DEPARTMENT, GET_DEPARTMENT } from './constants';
import {
  getDepartmentSuccess,
  getDepartmentFail,
  editDepartmentSuccess,
  editDepartmentFail,
} from './actions';
import { selectFormDetails } from './selectors';

export function* getDepartment(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/departments/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const department = yield call(request, requestURL, options);
  const FORMDETAILS = yield select(selectFormDetails());
  if (!department.err) {
    const formDetails = yield loadFormDetails(
      FORMDETAILS.toJS(),
      department.data
    );
    yield put(getDepartmentSuccess(formDetails));
  } else {
    yield put(getDepartmentFail(department.err.reason));
  }
}

export function* editDepartment(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/departments/${action.id}`;
  const requestBody = action.departmentInfo;
  const options = createRequestOptions('PUT', requestBody, requestHeader);
  const department = yield call(request, requestURL, options);
  if (!department.err) {
    yield put(editDepartmentSuccess(department.data));
  } else {
    yield put(editDepartmentFail(department.err.reason));
  }
}

export default function* editDepartmentWatcher() {
  yield takeLatest(GET_DEPARTMENT, getDepartment);
  yield takeLatest(EDIT_DEPARTMENT, editDepartment);
}
