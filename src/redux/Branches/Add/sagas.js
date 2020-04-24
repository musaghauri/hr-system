import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { ADD_BRANCH, GET_DEPARTMENTS, GET_CITIES } from './constants';
import { 
  addBranchSuccess,
  addBranchFail,
  getDepartmentsSuccess,
  getDepartmentsFail,
  getCitiesSuccess,
  getCitiesFail
 } from './actions';

export function* addBranch(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/branches`;
  const requestBody = action.branchInfo;
  const options = createRequestOptions('POST', requestBody, requestHeader);
  const branch = yield call(request, requestURL, options);
  if (!branch.err) {
    yield put(addBranchSuccess(branch.data));
  } else {
    yield put(addBranchFail(branch.err.reason));
  }
}

export function* getDepartments() {
  const requestURL = `${NEXT_API_URL}/departments`;
  const departments = yield call(request, requestURL);
  if (!departments.err) {
    yield put(getDepartmentsSuccess(
        departments.data.items.map(department => ({
          key: `departments${department._id}`,
          value: department._id,
          text: department.name,
        }))
      ));
  } else {
    yield put(getDepartmentsFail(departments.err.reason));
  }
}

export function* getCities() {
  const requestURL = `${NEXT_API_URL}/cities`;
  const cities = yield call(request, requestURL);
  if (!cities.err) {
    yield put(getCitiesSuccess(
      cities.data.items.map(city => ({
        key: `departments${city._id}`,
        value: city._id,
        text: city.name,
      }))
    ));
  } else {
    yield put(getCitiesFail(cities.err.reason));
  }
}


export default function* addBranchWatcher() {
  yield takeLatest(ADD_BRANCH, addBranch);
  yield takeLatest(GET_DEPARTMENTS, getDepartments);
  yield takeLatest(GET_CITIES, getCities);
}
