import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  GET_WISH,
  GET_WISH_SUCCESS,
  GET_WISH_FAIL,
  EDIT_WISH,
  EDIT_WISH_SUCCESS,
  EDIT_WISH_FAIL,
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
      fieldName: 'Name',
      placeholder: 'Enter wish name',
    },
    description: {
      name: 'description',
      label: 'Description',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'Description',
      placeholder: 'Enter description',
    },
    priority: {
        name: 'priority',
        label: 'Priority',
        status: true,
        errorText: '',
        value: '',
        rules: ['isRequired'],
        fieldName: 'Priority',
        placeholder: 'Enter priority',
      },
  },
  getWishStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  editWishStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function editWishReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case GET_WISH:
      return state
        .setIn(['getWishStatus', 'loading'], true)
        .setIn(['getWishStatus', 'loaded'], false)
        .setIn(['getWishStatus', 'error'], false);
    case GET_WISH_SUCCESS:
      return state
        .setIn(['getWishStatus', 'loading'], false)
        .setIn(['getWishStatus', 'loaded'], true)
        .setIn(['getWishStatus', 'error'], false)
        .setIn(['formDetails'], fromJS(action.wish));
    case GET_WISH_FAIL:
      return state
        .setIn(['getWishStatus', 'loading'], false)
        .setIn(['getWishStatus', 'loaded'], false)
        .setIn(['getWishStatus', 'error'], action.error);
    case EDIT_WISH:
      return state
        .setIn(['editWishStatus', 'loading'], true)
        .setIn(['editWishStatus', 'loaded'], false)
        .setIn(['editWishStatus', 'error'], false);
    case EDIT_WISH_SUCCESS:
      return state
        .setIn(['editWishStatus', 'loading'], false)
        .setIn(['editWishStatus', 'loaded'], true)
        .setIn(['editWishStatus', 'error'], false);
    case EDIT_WISH_FAIL:
      return state
        .setIn(['editWishStatus', 'loading'], false)
        .setIn(['editWishStatus', 'loaded'], false)
        .setIn(['editWishStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default editWishReducer;
