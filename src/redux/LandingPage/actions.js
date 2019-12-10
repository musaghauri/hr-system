import { UPDATE_VALUE, RESET_REDUCER, INITIATE_CLOCK } from './constants';

export function resetReducer() {
  return {
    type: RESET_REDUCER,
  };
}
export function initiateClock() {
  return {
    type: INITIATE_CLOCK,
  };
}

export function updateValue(name, value) {
  return {
    type: UPDATE_VALUE,
    name,
    value,
  };
}
