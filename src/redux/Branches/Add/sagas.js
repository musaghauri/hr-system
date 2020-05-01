import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { 
  ADD_BRANCH, 
  GET_DEPARTMENTS, 
  GET_COUNTRIES, 
  GET_STATES,
  GET_CITIES 
} from './constants';

import { 
  addBranchSuccess,
  addBranchFail,
  getDepartmentsSuccess,
  getDepartmentsFail,
  getCountriesSuccess,
  getCountriesFail,
  getStatesSuccess,
  getStatesFail,
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

export function* getCountries() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/countries`;
  const options = createRequestOptions('GET', null, requestHeader);
  const countries = yield call(request, requestURL, options);
  if (!countries.err) {
    yield put(
      getCountriesSuccess(
        countries.data.items.map(country => ({
          key: `country_${country._id}`,
          value: country._id,
          text: country.name,
        }))
      )
    );
  } else {
    yield put(getCountriesFail(countries.err.reason));
  }
}

export function* getStates(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/states?country=${action.countryId}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const states = yield call(request, requestURL, options);
  if (!states.err) {
    yield put(
      getStatesSuccess(
        states.data.items.map(state => ({
          key: `state_${state._id}`,
          value: state._id,
          text: state.name,
        }))
      )
    );
  } else {
    yield put(getStatesFail(states.err.reason));
  }
}

export function* getCities(action) {
  const requestURL = `${NEXT_API_URL}/cities?state=${action.stateId}`;
  const cities = yield call(request, requestURL);
  if (!cities.err) {
    yield put(getCitiesSuccess(
      cities.data.items.map(city => ({
        key: `city${city._id}`,
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
  yield takeLatest(GET_COUNTRIES, getCountries);
  yield takeLatest(GET_STATES, getStates);
  yield takeLatest(GET_CITIES, getCities);
}
