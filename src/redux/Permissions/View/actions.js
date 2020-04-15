import {
  RESET_REDUCER,
  GET_PERMISSION,
  GET_PERMISSION_SUCCESS,
  GET_PERMISSION_FAIL,
} from './constants';

export function resetReducer() {
  return {
    type: RESET_REDUCER,
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
