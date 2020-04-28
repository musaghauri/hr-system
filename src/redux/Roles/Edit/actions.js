import {
  RESET_REDUCER,
  UPDATE_VALUE,
  GET_ROLE,
  GET_ROLE_SUCCESS,
  GET_ROLE_FAIL,
  EDIT_ROLE,
  EDIT_ROLE_SUCCESS,
  EDIT_ROLE_FAIL,
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

export function editRole(roleInfo, id) {
  return {
    type: EDIT_ROLE,
    roleInfo,
    id,
  };
}

export function editRoleSuccess(role) {
  return {
    type: EDIT_ROLE_SUCCESS,
    role,
  };
}

export function editRoleFail(error) {
  return {
    type: EDIT_ROLE_FAIL,
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
