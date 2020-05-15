import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  DELETE_DOCUMENT,
  DELETE_DOCUMENT_SUCCESS,
  DELETE_DOCUMENT_FAIL,
  GET_DOCUMENTS,
  GET_DOCUMENTS_SUCCESS,
  GET_DOCUMENTS_FAIL,
} from './constants';

export const initialState = fromJS({
  headings: [
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'Edit',
      name: 'edit',
    },
    {
      label: 'Delete',
      name: 'delete',
    },
    {
      label: 'View',
      name: 'view',
    },
  ],
  documents: {
    items: [],
    total_count: 0,
  },
  getDocumentsStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  deleteDocumentStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function documentsListReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case DELETE_DOCUMENT:
      return state
        .setIn(['deleteDocumentStatus', 'loading'], true)
        .setIn(['deleteDocumentStatus', 'loaded'], false)
        .setIn(['deleteDocumentStatus', 'error'], false);
    case DELETE_DOCUMENT_SUCCESS:
      return state
        .setIn(['deleteDocumentStatus', 'loading'], false)
        .setIn(['deleteDocumentStatus', 'loaded'], true)
        .setIn(['deleteDocumentStatus', 'error'], false)
        .deleteIn(['documents', 'items', action.index]);
    case DELETE_DOCUMENT_FAIL:
      return state
        .setIn(['deleteDocumentStatus', 'loading'], false)
        .setIn(['deleteDocumentStatus', 'loaded'], false)
        .setIn(['deleteDocumentStatus', 'error'], action.error);
    case GET_DOCUMENTS:
      return state
        .setIn(['getDocumentsStatus', 'loading'], true)
        .setIn(['getDocumentsStatus', 'loaded'], false)
        .setIn(['getDocumentsStatus', 'error'], false);
    case GET_DOCUMENTS_SUCCESS:
      return state
        .setIn(['getDocumentsStatus', 'loading'], false)
        .setIn(['getDocumentsStatus', 'loaded'], true)
        .setIn(['getDocumentsStatus', 'error'], false)
        .set('documents', fromJS(action.documents));
    case GET_DOCUMENTS_FAIL:
      return state
        .setIn(['getDocumentsStatus', 'loading'], false)
        .setIn(['getDocumentsStatus', 'loaded'], false)
        .setIn(['getDocumentsStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default documentsListReducer;
