import { fromJS } from 'immutable';
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
      label: 'Permissions',
      name: 'permissions',
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
  roles: {
    items: [],
    total_count: 0,
  },
  getRolesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  deleteRoleStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function rolesListReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case DELETE_ROLE:
      return state
        .setIn(['deleteRoleStatus', 'loading'], true)
        .setIn(['deleteRoleStatus', 'loaded'], false)
        .setIn(['deleteRoleStatus', 'error'], false);
    case DELETE_ROLE_SUCCESS:
      return state
        .setIn(['deleteRoleStatus', 'loading'], false)
        .setIn(['deleteRoleStatus', 'loaded'], true)
        .setIn(['deleteRoleStatus', 'error'], false)
        .deleteIn(['roles', 'items', action.index]);
    case DELETE_ROLE_FAIL:
      return state
        .setIn(['deleteRoleStatus', 'loading'], false)
        .setIn(['deleteRoleStatus', 'loaded'], false)
        .setIn(['deleteRoleStatus', 'error'], action.error);
    case GET_ROLES:
      return state
        .setIn(['getRolesStatus', 'loading'], true)
        .setIn(['getRolesStatus', 'loaded'], false)
        .setIn(['getRolesStatus', 'error'], false);
    case GET_ROLES_SUCCESS:
      return state
        .setIn(['getRolesStatus', 'loading'], false)
        .setIn(['getRolesStatus', 'loaded'], true)
        .setIn(['getRolesStatus', 'error'], false)
        .set('roles', fromJS(action.roles));
    case GET_ROLES_FAIL:
      return state
        .setIn(['getRolesStatus', 'loading'], false)
        .setIn(['getRolesStatus', 'loaded'], false)
        .setIn(['getRolesStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default rolesListReducer;
