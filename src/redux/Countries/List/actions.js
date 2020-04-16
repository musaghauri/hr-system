import {
  RESET_REDUCER,
  UPDATE_VALUE,
  DELETE_COUNTRY,
  DELETE_COUNTRY_SUCCESS,
  DELETE_COUNTRY_FAIL,
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
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

export function deleteCountry(id, index) {
  return {
    type: DELETE_COUNTRY,
    id,
    index,
  };
}

export function deleteCountrySuccess(index) {
  return {
    type: DELETE_COUNTRY_SUCCESS,
    index,
  };
}

export function deleteCountryFail(error) {
  return {
    type: DELETE_COUNTRY_FAIL,
    error,
  };
}

export function getCountries() {
  return {
    type: GET_COUNTRIES,
  };
}

export function getCountriesSuccess(countries) {
  return {
    type: GET_COUNTRIES_SUCCESS,
    countries,
  };
}

export function getCountriesFail(error) {
  return {
    type: GET_COUNTRIES_FAIL,
    error,
  };
}
