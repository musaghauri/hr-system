import {
  RESET_REDUCER,
  GET_DOCUMENT,
  GET_DOCUMENT_SUCCESS,
  GET_DOCUMENT_FAIL,
} from './constants';

export function resetReducer() {
  return {
    type: RESET_REDUCER,
  };
}

export function getDocument(id) {
  return {
    type: GET_DOCUMENT,
    id,
  };
}

export function getDocumentSuccess(document) {
  return {
    type: GET_DOCUMENT_SUCCESS,
    document,
  };
}

export function getDocumentFail(error) {
  return {
    type: GET_DOCUMENT_FAIL,
    error,
  };
}
