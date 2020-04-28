import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_PERMISSION,
  ADD_PERMISSION_SUCCESS,
  ADD_PERMISSION_FAIL,
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

export function addPermission(permissionInfo) {
  return {
    type: ADD_PERMISSION,
    permissionInfo,
  };
}

export function addPermissionSuccess(permission) {
  return {
    type: ADD_PERMISSION_SUCCESS,
    permission,
  };
}

export function addPermissionFail(error) {
  return {
    type: ADD_PERMISSION_FAIL,
    error,
  };
}
