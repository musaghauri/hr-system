import { fromJS } from 'immutable';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_ROLES,
  GET_ROLES_SUCCESS,
  GET_ROLES_FAIL,
  RESET_REDUCER,
  UPDATE_VALUE,
} from './constants';

export const initialState = fromJS({
  formDetails: {
    email: {
      name: 'email',
      label: 'Email',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired', 'isEmail'],
      fieldName: 'email',
      placeholder: 'example@email.com',
      type: 'email',
    },
    password: {
      name: 'password',
      label: 'Password',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'password',
      placeholder: 'Type your password',
      type: 'password',
    },
    role: {
      name: 'role',
      label: 'Role',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'role',
      placeholder: 'Select a role',
    },
  },
  roles: [],
  getRolesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  loginStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case LOGIN:
      return state
        .setIn(['loginStatus', 'loading'], true)
        .setIn(['loginStatus', 'loaded'], false)
        .setIn(['loginStatus', 'error'], false);
    case LOGIN_SUCCESS:
      return state
        .setIn(['loginStatus', 'loading'], false)
        .setIn(['loginStatus', 'loaded'], true)
        .setIn(['loginStatus', 'error'], false)
        .set('formDetails', initialState.get('formDetails'));
    case LOGIN_FAIL:
      return state
        .setIn(['loginStatus', 'loading'], false)
        .setIn(['loginStatus', 'loaded'], false)
        .setIn(['loginStatus', 'error'], action.error);
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

export default loginReducer;
