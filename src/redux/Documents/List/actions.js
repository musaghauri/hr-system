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

export function resetReducer() {
  return {
    type: RESET_REDUCER,
  };
}

export function updateValue(name, value) {
  return {
    type: UPDATE_VALUE,
    name,
    value,
  };
}

export function deleteDocument(id, index) {
  return {
    type: DELETE_DOCUMENT,
    id,
    index,
  };
}

export function deleteDocumentSuccess(index) {
  return {
    type: DELETE_DOCUMENT_SUCCESS,
    index,
  };
}

export function deleteDocumentFail(error) {
  return {
    type: DELETE_DOCUMENT_FAIL,
    error,
  };
}

export function getDocuments() {
  return {
    type: GET_DOCUMENTS,
  };
}

export function getDocumentsSuccess(documents) {
  return {
    type: GET_DOCUMENTS_SUCCESS,
    documents,
  };
}

export function getDocumentsFail(error) {
  return {
    type: GET_DOCUMENTS_FAIL,
    error,
  };
}
