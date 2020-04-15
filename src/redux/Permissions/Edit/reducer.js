import { fromJS } from 'immutable';
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
      placeholder: 'Enter permission name',
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
  },
  getPermissionStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  editPermissionStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function editPermissionReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case GET_PERMISSION:
      return state
        .setIn(['getPermissionStatus', 'loading'], true)
        .setIn(['getPermissionStatus', 'loaded'], false)
        .setIn(['getPermissionStatus', 'error'], false);
    case GET_PERMISSION_SUCCESS:
      return state
        .setIn(['getPermissionStatus', 'loading'], false)
        .setIn(['getPermissionStatus', 'loaded'], true)
        .setIn(['getPermissionStatus', 'error'], false)
        .setIn(['formDetails'], fromJS(action.permission));
    case GET_PERMISSION_FAIL:
      return state
        .setIn(['getPermissionStatus', 'loading'], false)
        .setIn(['getPermissionStatus', 'loaded'], false)
        .setIn(['getPermissionStatus', 'error'], action.error);
    case EDIT_PERMISSION:
      return state
        .setIn(['editPermissionStatus', 'loading'], true)
        .setIn(['editPermissionStatus', 'loaded'], false)
        .setIn(['editPermissionStatus', 'error'], false);
    case EDIT_PERMISSION_SUCCESS:
      return state
        .setIn(['editPermissionStatus', 'loading'], false)
        .setIn(['editPermissionStatus', 'loaded'], true)
        .setIn(['editPermissionStatus', 'error'], false);
    case EDIT_PERMISSION_FAIL:
      return state
        .setIn(['editPermissionStatus', 'loading'], false)
        .setIn(['editPermissionStatus', 'loaded'], false)
        .setIn(['editPermissionStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default editPermissionReducer;
