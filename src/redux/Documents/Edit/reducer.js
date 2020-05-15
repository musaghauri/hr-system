import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  GET_DOCUMENT,
  GET_DOCUMENT_SUCCESS,
  GET_DOCUMENT_FAIL,
  EDIT_DOCUMENT,
  EDIT_DOCUMENT_SUCCESS,
  EDIT_DOCUMENT_FAIL,
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
  getDocumentStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  editDocumentStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function editDocumentReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case GET_DOCUMENT:
      return state
        .setIn(['getDocumentStatus', 'loading'], true)
        .setIn(['getDocumentStatus', 'loaded'], false)
        .setIn(['getDocumentStatus', 'error'], false);
    case GET_DOCUMENT_SUCCESS:
      return state
        .setIn(['getDocumentStatus', 'loading'], false)
        .setIn(['getDocumentStatus', 'loaded'], true)
        .setIn(['getDocumentStatus', 'error'], false)
        .setIn(['formDetails'], fromJS(action.document));
    case GET_DOCUMENT_FAIL:
      return state
        .setIn(['getDocumentStatus', 'loading'], false)
        .setIn(['getDocumentStatus', 'loaded'], false)
        .setIn(['getDocumentStatus', 'error'], action.error);
    case EDIT_DOCUMENT:
      return state
        .setIn(['editDocumentStatus', 'loading'], true)
        .setIn(['editDocumentStatus', 'loaded'], false)
        .setIn(['editDocumentStatus', 'error'], false);
    case EDIT_DOCUMENT_SUCCESS:
      return state
        .setIn(['editDocumentStatus', 'loading'], false)
        .setIn(['editDocumentStatus', 'loaded'], true)
        .setIn(['editDocumentStatus', 'error'], false);
    case EDIT_DOCUMENT_FAIL:
      return state
        .setIn(['editDocumentStatus', 'loading'], false)
        .setIn(['editDocumentStatus', 'loaded'], false)
        .setIn(['editDocumentStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default editDocumentReducer;
