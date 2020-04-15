import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_PERMISSION,
  ADD_PERMISSION_SUCCESS,
  ADD_PERMISSION_FAIL,
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
  addPermissionStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function addPermissionReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case ADD_PERMISSION:
      return state
        .setIn(['addPermissionStatus', 'loading'], true)
        .setIn(['addPermissionStatus', 'loaded'], false)
        .setIn(['addPermissionStatus', 'error'], false);
    case ADD_PERMISSION_SUCCESS:
      return state
        .setIn(['addPermissionStatus', 'loading'], false)
        .setIn(['addPermissionStatus', 'loaded'], true)
        .setIn(['addPermissionStatus', 'error'], false);
    case ADD_PERMISSION_FAIL:
      return state
        .setIn(['addPermissionStatus', 'loading'], false)
        .setIn(['addPermissionStatus', 'loaded'], false)
        .setIn(['addPermissionStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default addPermissionReducer;
