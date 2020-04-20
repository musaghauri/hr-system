import { fromJS } from 'immutable';
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

export const initialState = fromJS({
    formDetails: {
        name: {
          name: 'name',
          label: 'Name',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired'],
          fieldName: 'name',
          placeholder: 'Enter asset name',
        },
        description: {
          name: 'description',
          label: 'Description',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired'],
          fieldName: 'description',
          placeholder: 'Enter description',
          type: 'description',
        },
        cost: {
          name: 'cost',
          label: 'Cost',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired'],
          fieldName: 'cost',
          placeholder: 'Enter cost',
          type: 'cost',
        },
        purchasedAt: {
          name: 'purchasedAt',
          label: 'Purchased At',
          status: true,
          errorText: '',
          value: '',
          rules: ['isRequired'],
          fieldName: 'purchasedAt',
          placeholder: 'Enter purchased at date',
          type: 'purchased at',
        },
      },
  getAssetStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  editAssetStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function editAssetReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
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
        .setIn(['formDetails'], fromJS(action.asset));
    case GET_ASSET_FAIL:
      return state
        .setIn(['getAssetStatus', 'loading'], false)
        .setIn(['getAssetStatus', 'loaded'], false)
        .setIn(['getAssetStatus', 'error'], action.error);
    case EDIT_ASSET:
      return state
        .setIn(['editAssetStatus', 'loading'], true)
        .setIn(['editAssetStatus', 'loaded'], false)
        .setIn(['editAssetStatus', 'error'], false);
    case EDIT_ASSET_SUCCESS:
      return state
        .setIn(['editAssetStatus', 'loading'], false)
        .setIn(['editAssetStatus', 'loaded'], true)
        .setIn(['editAssetStatus', 'error'], false);
    case EDIT_ASSET_FAIL:
      return state
        .setIn(['editAssetStatus', 'loading'], false)
        .setIn(['editAssetStatus', 'loaded'], false)
        .setIn(['editAssetStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default editAssetReducer;
