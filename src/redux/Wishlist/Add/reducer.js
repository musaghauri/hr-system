import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_WISH,
  ADD_WISH_SUCCESS,
  ADD_WISH_FAIL,
  GET_PRIORITIES,
  GET_PRIORITIES_SUCCESS,
  GET_PRIORITIES_FAIL
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
  priorities: [],
  addWishStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function addWishReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case ADD_WISH:
      return state
        .setIn(['addWishStatus', 'loading'], true)
        .setIn(['addWishStatus', 'loaded'], false)
        .setIn(['addWishStatus', 'error'], false);
    case ADD_WISH_SUCCESS:
      return state
        .setIn(['addWishStatus', 'loading'], false)
        .setIn(['addWishStatus', 'loaded'], true)
        .setIn(['addWishStatus', 'error'], false);
    case ADD_WISH_FAIL:
      return state
        .setIn(['addWishStatus', 'loading'], false)
        .setIn(['addWishStatus', 'loaded'], false)
        .setIn(['addWishStatus', 'error'], action.error);
    case GET_PRIORITIES:
      return state
        .setIn(['getPrioritiesStatus', 'loading'], true)
        .setIn(['getPrioritiesStatus', 'loaded'], false)
        .setIn(['getPrioritiesStatus', 'error'], false);
    case GET_PRIORITIES_SUCCESS:
      return state
        .setIn(['getPrioritiesStatus', 'loading'], false)
        .setIn(['getPrioritiesStatus', 'loaded'], true)
        .setIn(['getPrioritiesStatus', 'error'], false)
        .set('priorities', fromJS(action.priorities));
    case GET_PRIORITIES_FAIL:
      return state
        .setIn(['getPrioritiesStatus', 'loading'], false)
        .setIn(['getPrioritiesStatus', 'loaded'], false)
        .setIn(['getPrioritiesStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default addWishReducer;
