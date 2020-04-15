import {
  RESET_REDUCER,
  UPDATE_VALUE,
  DELETE_ROLE,
  DELETE_ROLE_SUCCESS,
  DELETE_ROLE_FAIL,
  GET_ROLES,
  GET_ROLES_SUCCESS,
  GET_ROLES_FAIL,
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

export function deleteRole(id, index) {
  return {
    type: DELETE_ROLE,
    id,
    index,
  };
}

export function deleteRoleSuccess(index) {
  return {
    type: DELETE_ROLE_SUCCESS,
    index,
  };
}

export function deleteRoleFail(error) {
  return {
    type: DELETE_ROLE_FAIL,
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
