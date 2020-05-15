import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  GET_DOCUMENT,
  GET_DOCUMENT_SUCCESS,
  GET_DOCUMENT_FAIL,
} from './constants';

export const initialState = fromJS({
  document: {},

  getDocumentStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function viewDocumentReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
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
        .set('document', fromJS(action.document));
    case GET_DOCUMENT_FAIL:
      return state
        .setIn(['getDocumentStatus', 'loading'], false)
        .setIn(['getDocumentStatus', 'loaded'], false)
        .setIn(['getDocumentStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default viewDocumentReducer;
