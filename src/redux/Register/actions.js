import { RESET_REDUCER, UPDATE_VALUE, ADD_ANOTHER_ENTRY } from "./constants";

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
export function addAnotherEntry(name, value) {
  return {
    type: ADD_ANOTHER_ENTRY,
    name,
    value,
  };
}
