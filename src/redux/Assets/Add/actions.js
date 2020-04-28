import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_ASSET,
  ADD_ASSET_SUCCESS,
  ADD_ASSET_FAIL,
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

export function addAsset(assetInfo) {
  return {
    type: ADD_ASSET,
    assetInfo,
  };
}

export function addAssetSuccess(asset) {
  return {
    type: ADD_ASSET_SUCCESS,
    asset,
  };
}

export function addAssetFail(error) {
  return {
    type: ADD_ASSET_FAIL,
    error,
  };
}
