import {
  RESET_REDUCER,
  GET_COUNTRY,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_FAIL,
} from './constants';

export function resetReducer() {
  return {
    type: RESET_REDUCER,
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
