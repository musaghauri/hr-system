import { fromJS } from 'immutable';
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

export const initialState = fromJS({
  headings: [
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'Description',
      name: 'description',
    },
    {
      label: 'Cost',
      name: 'cost',
    },
    {
      label: 'Purchased At',
      name: 'purchasedAt',
    },
    {
      label: 'Used By',
      name: 'usedBy',
    },
    {
      label: 'Edit',
      name: 'edit',
    },
    {
      label: 'Delete',
      name: 'delete',
    },
    {
      label: 'View',
      name: 'view',
    },
  ],
  assets: {
    items: [],
    total_count: 0,
  },
  getAssetsStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  deleteAssetStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function assetsListReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case DELETE_ASSET:
      return state
        .setIn(['deleteAssetStatus', 'loading'], true)
        .setIn(['deleteAssetStatus', 'loaded'], false)
        .setIn(['deleteAssetStatus', 'error'], false);
    case DELETE_ASSET_SUCCESS:
      return state
        .setIn(['deleteAssetStatus', 'loading'], false)
        .setIn(['deleteAssetStatus', 'loaded'], true)
        .setIn(['deleteAssetStatus', 'error'], false)
        .deleteIn(['assets', 'items', action.index]);
    case DELETE_ASSET_FAIL:
      return state
        .setIn(['deleteAssetStatus', 'loading'], false)
        .setIn(['deleteAssetStatus', 'loaded'], false)
        .setIn(['deleteAssetStatus', 'error'], action.error);
    case GET_ASSETS:
      return state
        .setIn(['getAssetsStatus', 'loading'], true)
        .setIn(['getAssetsStatus', 'loaded'], false)
        .setIn(['getAssetsStatus', 'error'], false);
    case GET_ASSETS_SUCCESS:
      return state
        .setIn(['getAssetsStatus', 'loading'], false)
        .setIn(['getAssetsStatus', 'loaded'], true)
        .setIn(['getAssetsStatus', 'error'], false)
        .set('assets', fromJS(action.assets));
    case GET_ASSETS_FAIL:
      return state
        .setIn(['getAssetsStatus', 'loading'], false)
        .setIn(['getAssetsStatus', 'loaded'], false)
        .setIn(['getAssetsStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default assetsListReducer;
