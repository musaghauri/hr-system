import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_ROLES,
  GET_ROLES_SUCCESS,
  GET_ROLES_FAIL,
  UPDATE_VALUE,
  RESET_REDUCER,
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

export function login(loginInfo) {
  return {
    type: LOGIN,
    loginInfo,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    error,
  };
}

export function getRoles() {
  return {
    type: GET_ROLES,
  };
}

export function getRolesSuccess(roles) {
  return {
    type: GET_ROLES_SUCCESS,
    roles,
  };
}

export function getRolesFail(error) {
  return {
    type: GET_ROLES_FAIL,
    error,
  };
}
