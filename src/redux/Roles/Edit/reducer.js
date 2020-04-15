import { fromJS } from 'immutable';
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

export const initialState = fromJS({
  formDetails: {
    name: {
      name: 'name',
      label: 'Name',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'name',
      placeholder: 'Enter role name',
    },
    description: {
      name: 'description',
      label: 'Description',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'description',
      placeholder: 'Enter description',
      type: 'description',
    },
    permissions: {
      name: 'permissions',
      label: 'Permissions',
      status: true,
      errorText: '',
      value: [],
      rules: [],
      fieldName: 'permissions',
      placeholder: 'Select Permissions',
      type: 'permissions',
    },
  },
  permissions: [],
  getRoleStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  getPermissionsStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  editRoleStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function editRoleReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case GET_ROLE:
      return state
        .setIn(['getRoleStatus', 'loading'], true)
        .setIn(['getRoleStatus', 'loaded'], false)
        .setIn(['getRoleStatus', 'error'], false);
    case GET_ROLE_SUCCESS:
      return state
        .setIn(['getRoleStatus', 'loading'], false)
        .setIn(['getRoleStatus', 'loaded'], true)
        .setIn(['getRoleStatus', 'error'], false)
        .setIn(['formDetails'], fromJS(action.role));
    case GET_ROLE_FAIL:
      return state
        .setIn(['getRoleStatus', 'loading'], false)
        .setIn(['getRoleStatus', 'loaded'], false)
        .setIn(['getRoleStatus', 'error'], action.error);
    case EDIT_ROLE:
      return state
        .setIn(['editRoleStatus', 'loading'], true)
        .setIn(['editRoleStatus', 'loaded'], false)
        .setIn(['editRoleStatus', 'error'], false);
    case EDIT_ROLE_SUCCESS:
      return state
        .setIn(['editRoleStatus', 'loading'], false)
        .setIn(['editRoleStatus', 'loaded'], true)
        .setIn(['editRoleStatus', 'error'], false);
    case EDIT_ROLE_FAIL:
      return state
        .setIn(['editRoleStatus', 'loading'], false)
        .setIn(['editRoleStatus', 'loaded'], false)
        .setIn(['editRoleStatus', 'error'], action.error);
    case GET_PERMISSIONS:
      return state
        .setIn(['getPermissionsStatus', 'loading'], true)
        .setIn(['getPermissionsStatus', 'loaded'], false)
        .setIn(['getPermissionsStatus', 'error'], false);
    case GET_PERMISSIONS_SUCCESS:
      return state
        .setIn(['getPermissionsStatus', 'loading'], false)
        .setIn(['getPermissionsStatus', 'loaded'], true)
        .setIn(['getPermissionsStatus', 'error'], false)
        .set('permissions', fromJS(action.permissions));
    case GET_PERMISSIONS_FAIL:
      return state
        .setIn(['getPermissionsStatus', 'loading'], false)
        .setIn(['getPermissionsStatus', 'loaded'], false)
        .setIn(['getPermissionsStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default editRoleReducer;
