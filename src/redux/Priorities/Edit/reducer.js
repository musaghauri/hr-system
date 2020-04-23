import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  GET_PRIORITY,
  GET_PRIORITY_SUCCESS,
  GET_PRIORITY_FAIL,
  EDIT_PRIORITY,
  EDIT_PRIORITY_SUCCESS,
  EDIT_PRIORITY_FAIL,
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
      placeholder: 'Enter priority name',
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
    colour: {
      name: 'colour',
      label: 'Colour',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'Colour',
      placeholder: 'Select Colour',
    },
  },
  getPriorityStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  editPriorityStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function editPriorityReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case GET_PRIORITY:
      return state
        .setIn(['getPriorityStatus', 'loading'], true)
        .setIn(['getPriorityStatus', 'loaded'], false)
        .setIn(['getPriorityStatus', 'error'], false);
    case GET_PRIORITY_SUCCESS:
      return state
        .setIn(['getPriorityStatus', 'loading'], false)
        .setIn(['getPriorityStatus', 'loaded'], true)
        .setIn(['getPriorityStatus', 'error'], false)
        .setIn(['formDetails'], fromJS(action.priority));
    case GET_PRIORITY_FAIL:
      return state
        .setIn(['getPriorityStatus', 'loading'], false)
        .setIn(['getPriorityStatus', 'loaded'], false)
        .setIn(['getPriorityStatus', 'error'], action.error);
    case EDIT_PRIORITY:
      return state
        .setIn(['editPriorityStatus', 'loading'], true)
        .setIn(['editPriorityStatus', 'loaded'], false)
        .setIn(['editPriorityStatus', 'error'], false);
    case EDIT_PRIORITY_SUCCESS:
      return state
        .setIn(['editPriorityStatus', 'loading'], false)
        .setIn(['editPriorityStatus', 'loaded'], true)
        .setIn(['editPriorityStatus', 'error'], false);
    case EDIT_PRIORITY_FAIL:
      return state
        .setIn(['editPriorityStatus', 'loading'], false)
        .setIn(['editPriorityStatus', 'loaded'], false)
        .setIn(['editPriorityStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default editPriorityReducer;
