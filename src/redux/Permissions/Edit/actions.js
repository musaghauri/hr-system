import {
  RESET_REDUCER,
  UPDATE_VALUE,
  GET_PERMISSION,
  GET_PERMISSION_SUCCESS,
  GET_PERMISSION_FAIL,
  EDIT_PERMISSION,
  EDIT_PERMISSION_SUCCESS,
  EDIT_PERMISSION_FAIL,
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

export function getPermission(id) {
  return {
    type: GET_PERMISSION,
    id,
  };
}

export function getPermissionSuccess(permission) {
  return {
    type: GET_PERMISSION_SUCCESS,
    permission,
  };
}

export function getPermissionFail(error) {
  return {
    type: GET_PERMISSION_FAIL,
    error,
  };
}

export function editPermission(permissionInfo, id) {
  return {
    type: EDIT_PERMISSION,
    permissionInfo,
    id,
  };
}

export function editPermissionSuccess(permission) {
  return {
    type: EDIT_PERMISSION_SUCCESS,
    permission,
  };
}

export function editPermissionFail(error) {
  return {
    type: EDIT_PERMISSION_FAIL,
    error,
  };
}
