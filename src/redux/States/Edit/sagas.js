import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions, loadFormDetails } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { EDIT_STATE, GET_STATE, GET_COUNTRIES } from './constants';
import {
  getStateSuccess,
  getStateFail,
  editStateSuccess,
  editStateFail,
  getCountriesSuccess,
  getCountriesFail,
} from './actions';
import { selectFormDetails } from './selectors';

export function* getState(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/states/${action.id}?populate=false`;
  const options = createRequestOptions('GET', null, requestHeader);
  const state = yield call(request, requestURL, options);
  const FORMDETAILS = yield select(selectFormDetails());
  if (!state.err) {
    const formDetails = yield loadFormDetails(FORMDETAILS.toJS(), state.data);
    yield put(getStateSuccess(formDetails));
  } else {
    yield put(getStateFail(state.err.reason));
  }
}

export function* editState(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/states/${action.id}`;
  const requestBody = action.stateInfo;
  const options = createRequestOptions('PUT', requestBody, requestHeader);
  const state = yield call(request, requestURL, options);
  if (!state.err) {
    yield put(editStateSuccess(state.data));
  } else {
    yield put(editStateFail(state.err.reason));
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

export default function* editStateWatcher() {
  yield takeLatest(GET_STATE, getState);
  yield takeLatest(EDIT_STATE, editState);
  yield takeLatest(GET_COUNTRIES, getCountries);
}
