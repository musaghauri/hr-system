import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_DOCUMENT,
  ADD_DOCUMENT_SUCCESS,
  ADD_DOCUMENT_FAIL,
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
      placeholder: 'Enter document name',
    },
  },
  addDocumentStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function addDocumentReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case ADD_DOCUMENT:
      return state
        .setIn(['addDocumentStatus', 'loading'], true)
        .setIn(['addDocumentStatus', 'loaded'], false)
        .setIn(['addDocumentStatus', 'error'], false);
    case ADD_DOCUMENT_SUCCESS:
      return state
        .setIn(['addDocumentStatus', 'loading'], false)
        .setIn(['addDocumentStatus', 'loaded'], true)
        .setIn(['addDocumentStatus', 'error'], false);
    case ADD_DOCUMENT_FAIL:
      return state
        .setIn(['addDocumentStatus', 'loading'], false)
        .setIn(['addDocumentStatus', 'loaded'], false)
        .setIn(['addDocumentStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default addDocumentReducer;
