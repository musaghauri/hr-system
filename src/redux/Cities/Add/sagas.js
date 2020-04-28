import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { ADD_CITY, GET_COUNTRIES, GET_STATES } from './constants';
import {
  addCitySuccess,
  addCityFail,
  getCountriesSuccess,
  getCountriesFail,
  getStatesSuccess,
  getStatesFail,
} from './actions';

export function* addCity(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/cities`;
  const requestBody = action.cityInfo;
  const options = createRequestOptions('POST', requestBody, requestHeader);
  const city = yield call(request, requestURL, options);
  if (!city.err) {
    yield put(addCitySuccess(city.data));
  } else {
    yield put(addCityFail(city.err.reason));
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
export default function* addCityWatcher() {
  yield takeLatest(ADD_CITY, addCity);
  yield takeLatest(GET_COUNTRIES, getCountries);
  yield takeLatest(GET_STATES, getStates);
}
