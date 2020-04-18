import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions, loadFormDetails } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { EDIT_CITY, GET_CITY, GET_COUNTRIES, GET_STATES } from './constants';
import {
  getCitySuccess,
  getCityFail,
  editCitySuccess,
  editCityFail,
  getCountriesSuccess,
  getCountriesFail,
  getStatesSuccess,
  getStatesFail,
  getStates as GetStates,
} from './actions';
import { selectFormDetails } from './selectors';

export function* getCity(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/cities/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const city = yield call(request, requestURL, options);
  const FORMDETAILS = yield select(selectFormDetails());
  if (!city.err) {
    console.log({ city: city.data });
    const formDetails = yield loadFormDetails(FORMDETAILS.toJS(), {
      _id: city.data._id,
      name: city.data.name,
      state: city.data.state._id,
      country: city.data.state.country._id,
    });
    yield put(GetStates(city.data.state.country._id));
    yield put(getCitySuccess(formDetails));
  } else {
    yield put(getCityFail(city.err.reason));
  }
}

export function* editCity(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/cities/${action.id}`;
  const requestBody = action.cityInfo;
  const options = createRequestOptions('PUT', requestBody, requestHeader);
  const city = yield call(request, requestURL, options);
  if (!city.err) {
    yield put(editCitySuccess(city.data));
  } else {
    yield put(editCityFail(city.err.reason));
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
export default function* editCityWatcher() {
  yield takeLatest(GET_CITY, getCity);
  yield takeLatest(EDIT_CITY, editCity);
  yield takeLatest(GET_COUNTRIES, getCountries);
  yield takeLatest(GET_STATES, getStates);
}
