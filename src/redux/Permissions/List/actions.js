import {
  RESET_REDUCER,
  UPDATE_VALUE,
  DELETE_PERMISSION,
  DELETE_PERMISSION_SUCCESS,
  DELETE_PERMISSION_FAIL,
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

export function deletePermission(id, index) {
  return {
    type: DELETE_PERMISSION,
    id,
    index,
  };
}

export function deletePermissionSuccess(index) {
  return {
    type: DELETE_PERMISSION_SUCCESS,
    index,
  };
}

export function deletePermissionFail(error) {
  return {
    type: DELETE_PERMISSION_FAIL,
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
