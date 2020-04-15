import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_ROLE,
  ADD_ROLE_SUCCESS,
  ADD_ROLE_FAIL,
  GET_PERMISSIONS,
  GET_PERMISSIONS_SUCCESS,
  GET_PERMISSIONS_FAIL,
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

export function addRole(roleInfo) {
  return {
    type: ADD_ROLE,
    roleInfo,
  };
}

export function addRoleSuccess(role) {
  return {
    type: ADD_ROLE_SUCCESS,
    role,
  };
}

export function addRoleFail(error) {
  return {
    type: ADD_ROLE_FAIL,
    error,
  };
}

export function getPermissions() {
  return {
    type: GET_PERMISSIONS,
  };
}

export function getPermissionsSuccess(permissions) {
  return {
    type: GET_PERMISSIONS_SUCCESS,
    permissions,
  };
}

export function getPermissionsFail(error) {
  return {
    type: GET_PERMISSIONS_FAIL,
    error,
  };
}
