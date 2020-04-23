import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_PRIORITY,
  ADD_PRIORITY_SUCCESS,
  ADD_PRIORITY_FAIL,
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
  addPriorityStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function addPriorityReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case ADD_PRIORITY:
      return state
        .setIn(['addPriorityStatus', 'loading'], true)
        .setIn(['addPriorityStatus', 'loaded'], false)
        .setIn(['addPriorityStatus', 'error'], false);
    case ADD_PRIORITY_SUCCESS:
      return state
        .setIn(['addPriorityStatus', 'loading'], false)
        .setIn(['addPriorityStatus', 'loaded'], true)
        .setIn(['addPriorityStatus', 'error'], false);
    case ADD_PRIORITY_FAIL:
      return state
        .setIn(['addPriorityStatus', 'loading'], false)
        .setIn(['addPriorityStatus', 'loaded'], false)
        .setIn(['addPriorityStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default addPriorityReducer;
