import {
  RESET_REDUCER,
  GET_ROLE,
  GET_ROLE_SUCCESS,
  GET_ROLE_FAIL,
} from './constants';

export function resetReducer() {
  return {
    type: RESET_REDUCER,
  };
}

export function getRole(id) {
  return {
    type: GET_ROLE,
    id,
  };
}

export function getRoleSuccess(role) {
  return {
    type: GET_ROLE_SUCCESS,
    role,
  };
}

export function getRoleFail(error) {
  return {
    type: GET_ROLE_FAIL,
    error,
  };
}
