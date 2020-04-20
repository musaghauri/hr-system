import {
  RESET_REDUCER,
  UPDATE_VALUE,
  GET_CITY,
  GET_CITY_SUCCESS,
  GET_CITY_FAIL,
  EDIT_CITY,
  EDIT_CITY_SUCCESS,
  EDIT_CITY_FAIL,
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  GET_STATES,
  GET_STATES_SUCCESS,
  GET_STATES_FAIL,
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

export function getCity(id) {
  return {
    type: GET_CITY,
    id,
  };
}

export function getCitySuccess(city) {
  return {
    type: GET_CITY_SUCCESS,
    city,
  };
}

export function getCityFail(error) {
  return {
    type: GET_CITY_FAIL,
    error,
  };
}

export function editCity(cityInfo, id) {
  return {
    type: EDIT_CITY,
    cityInfo,
    id,
  };
}

export function editCitySuccess(city) {
  return {
    type: EDIT_CITY_SUCCESS,
    city,
  };
}

export function editCityFail(error) {
  return {
    type: EDIT_CITY_FAIL,
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

export function getStates(countryId) {
  return {
    type: GET_STATES,
    countryId,
  };
}

export function getStatesSuccess(states) {
  return {
    type: GET_STATES_SUCCESS,
    states,
  };
}

export function getStatesFail(error) {
  return {
    type: GET_STATES_FAIL,
    error,
  };
}
