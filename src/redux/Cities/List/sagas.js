import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { DELETE_CITY, GET_CITIES } from './constants';
import {
  deleteCityFail,
  deleteCitySuccess,
  getCitiesSuccess,
  getCitiesFail,
} from './actions';

export function* deleteCity(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/cities/${action.id}`;
  const options = createRequestOptions('DELETE', null, requestHeader);
  const status = yield call(request, requestURL, options);
  if (!status.err) {
    yield put(deleteCitySuccess(action.index));
  } else {
    yield put(deleteCityFail(status.err.reason));
  }
}

export function* getCities() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/cities`;
  const options = createRequestOptions('GET', null, requestHeader);
  const cities = yield call(request, requestURL, options);
  if (!cities.err) {
    yield put(getCitiesSuccess(cities.data));
  } else {
    yield put(getCitiesFail(cities.err.reason));
  }
}

export default function* citiesListWatcher() {
  yield takeLatest(DELETE_CITY, deleteCity);
  yield takeLatest(GET_CITIES, getCities);
}
