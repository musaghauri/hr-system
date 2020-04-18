import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_CITY,
  ADD_CITY_SUCCESS,
  ADD_CITY_FAIL,
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

export function addCity(cityInfo) {
  return {
    type: ADD_CITY,
    cityInfo,
  };
}

export function addCitySuccess(city) {
  return {
    type: ADD_CITY_SUCCESS,
    city,
  };
}

export function addCityFail(error) {
  return {
    type: ADD_CITY_FAIL,
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
