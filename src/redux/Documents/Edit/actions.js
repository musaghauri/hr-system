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

export function editDocument(documentInfo, id) {
  return {
    type: EDIT_DOCUMENT,
    documentInfo,
    id,
  };
}

export function editDocumentSuccess(document) {
  return {
    type: EDIT_DOCUMENT_SUCCESS,
    document,
  };
}

export function editDocumentFail(error) {
  return {
    type: EDIT_DOCUMENT_FAIL,
    error,
  };
}
