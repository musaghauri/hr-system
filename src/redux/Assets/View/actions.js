import {
  RESET_REDUCER,
  GET_ASSET,
  GET_ASSET_SUCCESS,
  GET_ASSET_FAIL,
} from './constants';

export function resetReducer() {
  return {
    type: RESET_REDUCER,
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
