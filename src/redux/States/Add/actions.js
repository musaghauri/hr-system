import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_STATE,
  ADD_STATE_SUCCESS,
  ADD_STATE_FAIL,
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

export function addState(stateInfo) {
  return {
    type: ADD_STATE,
    stateInfo,
  };
}

export function addStateSuccess(state) {
  return {
    type: ADD_STATE_SUCCESS,
    state,
  };
}

export function addStateFail(error) {
  return {
    type: ADD_STATE_FAIL,
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
