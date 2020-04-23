import {
  RESET_REDUCER,
  UPDATE_VALUE,
  DELETE_ASSET,
  DELETE_ASSET_SUCCESS,
  DELETE_ASSET_FAIL,
  GET_ASSETS,
  GET_ASSETS_SUCCESS,
  GET_ASSETS_FAIL,
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

export function deleteAsset(id, index) {
  return {
    type: DELETE_ASSET,
    id,
    index,
  };
}

export function deleteAssetSuccess(index) {
  return {
    type: DELETE_ASSET_SUCCESS,
    index,
  };
}

export function deleteAssetFail(error) {
  return {
    type: DELETE_ASSET_FAIL,
    error,
  };
}

export function getAssets() {
  return {
    type: GET_ASSETS,
  };
}

export function getAssetsSuccess(assets) {
  return {
    type: GET_ASSETS_SUCCESS,
    assets,
  };
}

export function getAssetsFail(error) {
  return {
    type: GET_ASSETS_FAIL,
    error,
  };
}
