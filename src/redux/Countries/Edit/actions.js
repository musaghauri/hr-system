import {
  RESET_REDUCER,
  UPDATE_VALUE,
  GET_COUNTRY,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_FAIL,
  EDIT_COUNTRY,
  EDIT_COUNTRY_SUCCESS,
  EDIT_COUNTRY_FAIL,
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

export function getCountry(id) {
  return {
    type: GET_COUNTRY,
    id,
  };
}

export function getCountrySuccess(country) {
  return {
    type: GET_COUNTRY_SUCCESS,
    country,
  };
}

export function getCountryFail(error) {
  return {
    type: GET_COUNTRY_FAIL,
    error,
  };
}

export function editCountry(countryInfo, id) {
  return {
    type: EDIT_COUNTRY,
    countryInfo,
    id,
  };
}

export function editCountrySuccess(country) {
  return {
    type: EDIT_COUNTRY_SUCCESS,
    country,
  };
}

export function editCountryFail(error) {
  return {
    type: EDIT_COUNTRY_FAIL,
    error,
  };
}
