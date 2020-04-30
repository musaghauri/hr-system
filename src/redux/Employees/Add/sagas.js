import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { 
  GET_ROLES,
  GET_COUNTRIES, 
  GET_STATES, 
  GET_CITIES,
  GET_DEPARTMENTS,
  GET_ASSETS,
  ADD_EMPLOYEE
 } from './constants';
import { 
  getRolesSuccess,
  getRolesFail,
  getCountriesSuccess, 
  getCountriesFail, 
  getStatesSuccess,
  getStatesFail,
  getCitiesSuccess,
  getCitiesFail,
  getDepartmentsSuccess,
  getDepartmentsFail,
  getAssetsSuccess,
  getAssetsFail,
  addEmployeeSuccess,
  addEmployeeFail
 } from './actions';

export function* getRoles() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/roles`;
  const options = createRequestOptions('GET', null, requestHeader);
  const roles = yield call(request, requestURL, options);
  if (!roles.err) {
    yield put(getRolesSuccess(
      roles.data.items.map(role => ({
        key: `role_${role._id}`,
        value: role._id,
        text: role.name,
      }))
    ));
  } else {
    yield put(getRolesFail(roles.err.reason));
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
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/cities?state=${action.stateId}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const cities = yield call(request, requestURL, options);
  if (!cities.err) {
    yield put(getCitiesSuccess(
      cities.data.items.map(city => ({
        key: `country_${city._id}`,
        value: city._id,
        text: city.name,
      }))
    ));
  } else {
    yield put(getCitiesFail(cities.err.reason));
  }
}

export function* getDepartments() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/departments`;
  const options = createRequestOptions('GET', null, requestHeader);
  const departments = yield call(request, requestURL, options);
  if (!departments.err) {
    yield put(getDepartmentsSuccess(
      departments.data.items.map(department => ({
        key: `country_${department._id}`,
        value: department._id,
        text: department.name,
      }))
    ));
  } else {
    yield put(getDepartmentsFail(departments.err.reason));
  }
}

export function* getAssets() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/assets`;
  const options = createRequestOptions('GET', null, requestHeader);
  const assets = yield call(request, requestURL, options);
  if (!assets.err) {
    yield put(getAssetsSuccess(
      assets.data.items.map(asset => ({
        key: `country_${asset._id}`,
        value: asset._id,
        text: asset.name,
      }))
    ));
  } else {
    yield put(getAssetsFail(assets.err.reason));
  }
}

export function* addEmployee(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/employees`;
  const requestBody = action.employeeInfo;
  const options = createRequestOptions('POST', requestBody, requestHeader);
  const employee = yield call(request, requestURL, options);
  if (!employee.err) {
    yield put(addEmployeeSuccess(employee.data));
  } else {
    yield put(addEmployeeFail(employee.err.reason));
  }
}

export default function* addEmployeeWatcher() {
  yield takeLatest(GET_ROLES, getRoles);
  yield takeLatest(GET_COUNTRIES, getCountries);
  yield takeLatest(GET_STATES, getStates);
  yield takeLatest(GET_CITIES, getCities);
  yield takeLatest(GET_DEPARTMENTS, getDepartments);
  yield takeLatest(GET_ASSETS, getAssets);
  yield takeLatest(ADD_EMPLOYEE, addEmployee);
}
