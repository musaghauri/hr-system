import { fromJS } from 'immutable';
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

export const initialState = fromJS({
  headings: [
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'Description',
      name: 'description',
    },
    {
      label: 'Edit',
      name: 'edit',
    },
    {
      label: 'Block',
      name: 'block',
    },
    {
      label: 'View',
      name: 'view',
    },
  ],
  permissions: {
    items: [],
    total_count: 0,
  },
  getPermissionsStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  deletePermissionStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function permissionsListReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case DELETE_PERMISSION:
      return state
        .setIn(['deletePermissionStatus', 'loading'], true)
        .setIn(['deletePermissionStatus', 'loaded'], false)
        .setIn(['deletePermissionStatus', 'error'], false);
    case DELETE_PERMISSION_SUCCESS:
      return state
        .setIn(['deletePermissionStatus', 'loading'], false)
        .setIn(['deletePermissionStatus', 'loaded'], true)
        .setIn(['deletePermissionStatus', 'error'], false)
        .deleteIn(['permissions', 'items', action.index]);
    case DELETE_PERMISSION_FAIL:
      return state
        .setIn(['deletePermissionStatus', 'loading'], false)
        .setIn(['deletePermissionStatus', 'loaded'], false)
        .setIn(['deletePermissionStatus', 'error'], action.error);
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

export default permissionsListReducer;
