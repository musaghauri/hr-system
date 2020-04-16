import {
  RESET_REDUCER,
  GET_STATE,
  GET_STATE_SUCCESS,
  GET_STATE_FAIL,
} from './constants';

export function resetReducer() {
  return {
    type: RESET_REDUCER,
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
