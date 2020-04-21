import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  GET_ASSET,
  GET_ASSET_SUCCESS,
  GET_ASSET_FAIL,
} from './constants';

export const initialState = fromJS({
  asset: {},

  getAssetStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function viewAssetReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case GET_ASSET:
      return state
        .setIn(['getAssetStatus', 'loading'], true)
        .setIn(['getAssetStatus', 'loaded'], false)
        .setIn(['getAssetStatus', 'error'], false);
    case GET_ASSET_SUCCESS:
      return state
        .setIn(['getAssetStatus', 'loading'], false)
        .setIn(['getAssetStatus', 'loaded'], true)
        .setIn(['getAssetStatus', 'error'], false)
        .set('asset', fromJS(action.asset));
    case GET_ASSET_FAIL:
      return state
        .setIn(['getAssetStatus', 'loading'], false)
        .setIn(['getAssetStatus', 'loaded'], false)
        .setIn(['getAssetStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default viewAssetReducer;
