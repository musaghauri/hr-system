import { RESET_REDUCER, UPDATE_VALUE } from "./constants";

export function resetReducer() {
  return {
    type: RESET_REDUCER
  };
}

export function updateValue(name, value) {
  return {
    type: UPDATE_VALUE,
    name,
    value
  };
}
