import { RESET_REDUCER, UPDATE_FORM_DETAILS } from "./constants";

export function resetReducer() {
  return {
    type: RESET_REDUCER
  };
}

export function updateFormDetails(parentName, name, value) {
  return {
    type: UPDATE_FORM_DETAILS,
    parentName,
    name,
    value
  };
}
