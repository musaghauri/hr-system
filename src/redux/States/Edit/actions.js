import {
  RESET_REDUCER,
  UPDATE_VALUE,
  GET_STATE,
  GET_STATE_SUCCESS,
  GET_STATE_FAIL,
  EDIT_STATE,
  EDIT_STATE_SUCCESS,
  EDIT_STATE_FAIL,
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

export function getState(id) {
  return {
    type: GET_STATE,
    id,
  };
}

export function getStateSuccess(state) {
  return {
    type: GET_STATE_SUCCESS,
    state,
  };
}

export function getStateFail(error) {
  return {
    type: GET_STATE_FAIL,
    error,
  };
}

export function editState(stateInfo, id) {
  return {
    type: EDIT_STATE,
    stateInfo,
    id,
  };
}

export function editStateSuccess(state) {
  return {
    type: EDIT_STATE_SUCCESS,
    state,
  };
}

export function editStateFail(error) {
  return {
    type: EDIT_STATE_FAIL,
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
