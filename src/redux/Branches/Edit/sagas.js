import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions, loadFormDetails } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { 
  EDIT_BRANCH, 
  GET_BRANCH, 
  GET_DEPARTMENTS, 
  GET_COUNTRIES, 
  GET_STATES,
  GET_CITIES  
} from './constants';
import {
  getBranchSuccess,
  getBranchFail,
  editBranchSuccess,
  editBranchFail,
  getDepartmentsSuccess,
  getDepartmentsFail,
  getCountriesSuccess,
  getCountriesFail,
  getStatesSuccess,
  getStatesFail,
  getCitiesSuccess,
  getCitiesFail,
  getStates as GetStates,
  getCities as GetCities,
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
    let formDetails = yield loadFormDetails(
      FORMDETAILS.toJS(),
      {
        _id: branch.data._id,
        country: branch.data.city.state.country._id,
        state: branch.data.city.state._id,
        city: branch.data.city._id,
        address: branch.data.address,
        departments: branch.data.departments.map(department=>department._id)
      }
    );
    formDetails.contact.landline.value = branch.data.contact.landline;
    yield put(GetStates(branch.data.city.state.country._id));
    yield put(GetCities(branch.data.city.state._id));
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
    console.log(cities.data.total_count)
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

export default function* editBranchWatcher() {
  yield takeLatest(GET_BRANCH, getBranch);
  yield takeLatest(EDIT_BRANCH, editBranch);
  yield takeLatest(GET_DEPARTMENTS, getDepartments);
  yield takeLatest(GET_COUNTRIES, getCountries);
  yield takeLatest(GET_STATES, getStates);
  yield takeLatest(GET_CITIES, getCities);
}
