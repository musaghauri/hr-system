import {
  RESET_REDUCER,
  UPDATE_VALUE,
  DELETE_STATE,
  DELETE_STATE_SUCCESS,
  DELETE_STATE_FAIL,
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

export function deleteState(id, index) {
  return {
    type: DELETE_STATE,
    id,
    index,
  };
}

export function deleteStateSuccess(index) {
  return {
    type: DELETE_STATE_SUCCESS,
    index,
  };
}

export function deleteStateFail(error) {
  return {
    type: DELETE_STATE_FAIL,
    error,
  };
}

export function getStates() {
  return {
    type: GET_STATES,
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
