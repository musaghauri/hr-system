import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_COUNTRY,
  ADD_COUNTRY_SUCCESS,
  ADD_COUNTRY_FAIL,
} from './constants';

export function resetReducer() {
  return {
    type: RESET_REDUCER,
  };
}

export function updateValue(name, value) {
  return {
    type: UPDATE_VALUE,
    name,
    value,
  };
}

export function addCountry(countryInfo) {
  return {
    type: ADD_COUNTRY,
    countryInfo,
  };
}

export function addCountrySuccess(country) {
  return {
    type: ADD_COUNTRY_SUCCESS,
    country,
  };
}

export function addCountryFail(error) {
  return {
    type: ADD_COUNTRY_FAIL,
    error,
  };
}
