import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { ADD_STATE, GET_COUNTRIES } from './constants';
import {
  addStateSuccess,
  addStateFail,
  getCountriesSuccess,
  getCountriesFail,
} from './actions';

export function* addState(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/states`;
  const requestBody = action.stateInfo;
  const options = createRequestOptions('POST', requestBody, requestHeader);
  const state = yield call(request, requestURL, options);
  if (!state.err) {
    yield put(addStateSuccess(state.data));
  } else {
    yield put(addStateFail(state.err.reason));
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
export default function* addStateWatcher() {
  yield takeLatest(ADD_STATE, addState);
  yield takeLatest(GET_COUNTRIES, getCountries);
}
