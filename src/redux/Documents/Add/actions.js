import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_DOCUMENT,
  ADD_DOCUMENT_SUCCESS,
  ADD_DOCUMENT_FAIL,
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

export function addDocument(documentInfo) {
  return {
    type: ADD_DOCUMENT,
    documentInfo,
  };
}

export function addDocumentSuccess(document) {
  return {
    type: ADD_DOCUMENT_SUCCESS,
    document,
  };
}

export function addDocumentFail(error) {
  return {
    type: ADD_DOCUMENT_FAIL,
    error,
  };
}
