import {
  RESET_REDUCER,
  UPDATE_VALUE,
  GET_ASSET,
  GET_ASSET_SUCCESS,
  GET_ASSET_FAIL,
  EDIT_ASSET,
  EDIT_ASSET_SUCCESS,
  EDIT_ASSET_FAIL,
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

export function getAsset(id) {
  return {
    type: GET_ASSET,
    id,
  };
}

export function getAssetSuccess(asset) {
  return {
    type: GET_ASSET_SUCCESS,
    asset,
  };
}

export function getAssetFail(error) {
  return {
    type: GET_ASSET_FAIL,
    error,
  };
}

export function editAsset(assetInfo, id) {
  return {
    type: EDIT_ASSET,
    assetInfo,
    id,
  };
}

export function editAssetSuccess(asset) {
  return {
    type: EDIT_ASSET_SUCCESS,
    asset,
  };
}

export function editAssetFail(error) {
  return {
    type: EDIT_ASSET_FAIL,
    error,
  };
}
