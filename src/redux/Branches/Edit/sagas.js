import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions, loadFormDetails } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { EDIT_BRANCH, GET_BRANCH, GET_DEPARTMENTS, GET_CITIES } from './constants';
import {
  getBranchSuccess,
  getBranchFail,
  editBranchSuccess,
  editBranchFail,
  getDepartmentsSuccess,
  getDepartmentsFail,
  getCitiesSuccess,
  getCitiesFail
} from './actions';
import { selectFormDetails } from './selectors';

export function* getBranch(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/branches/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const branch = yield call(request, requestURL, options);
  const FORMDETAILS = yield select(selectFormDetails());
  if (!branch.err) {
    const formDetails = yield loadFormDetails(
      FORMDETAILS.toJS(),
      {
        _id: branch.data._id,
        city: branch.data.city._id,
        address: branch.data.address,
        contact: branch.data.contact,
        departments: branch.data.departments.map(department=>department._id)
      }
    );
    yield put(getBranchSuccess(formDetails));
  } else {
    yield put(getBranchFail(branch.err.reason));
  }
}

export function* editBranch(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/branches/${action.id}`;
  const requestBody = action.branchInfo;
  const options = createRequestOptions('PUT', requestBody, requestHeader);
  const branch = yield call(request, requestURL, options);
  if (!branch.err) {
    yield put(editBranchSuccess(branch.data));
  } else {
    yield put(editBranchFail(branch.err.reason));
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

export default function* editBranchWatcher() {
  yield takeLatest(GET_BRANCH, getBranch);
  yield takeLatest(EDIT_BRANCH, editBranch);
  yield takeLatest(GET_DEPARTMENTS, getDepartments);
  yield takeLatest(GET_CITIES, getCities);
}
