import { fromJS } from 'immutable';
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
  addRoleStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  getPermissionsStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function addRoleReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case ADD_ROLE:
      return state
        .setIn(['addRoleStatus', 'loading'], true)
        .setIn(['addRoleStatus', 'loaded'], false)
        .setIn(['addRoleStatus', 'error'], false);
    case ADD_ROLE_SUCCESS:
      return state
        .setIn(['addRoleStatus', 'loading'], false)
        .setIn(['addRoleStatus', 'loaded'], true)
        .setIn(['addRoleStatus', 'error'], false);
    case ADD_ROLE_FAIL:
      return state
        .setIn(['addRoleStatus', 'loading'], false)
        .setIn(['addRoleStatus', 'loaded'], false)
        .setIn(['addRoleStatus', 'error'], action.error);
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

export default addRoleReducer;
