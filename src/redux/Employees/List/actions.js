import { RESET_REDUCER, DELETE_EMPLOYEE } from "./constants";

export function resetReducer() {
  return {
    type: RESET_REDUCER,
  };
}

export function deleteEmployee(id){
  return {
    type: DELETE_EMPLOYEE,
    id
  }
}
