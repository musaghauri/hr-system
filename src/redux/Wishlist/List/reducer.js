import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  DELETE_WISH,
  DELETE_WISH_SUCCESS,
  DELETE_WISH_FAIL,
  GET_WISHLIST,
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_FAIL,
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
      label: 'Priority',
      name: 'priority',
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
  wishlist: {
    items: [],
    total_count: 0,
  },
  getWishlistStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  deleteWishStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function wishlistReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case DELETE_WISH:
      return state
        .setIn(['deleteWishStatus', 'loading'], true)
        .setIn(['deleteWishStatus', 'loaded'], false)
        .setIn(['deleteWishStatus', 'error'], false);
    case DELETE_WISH_SUCCESS:
      return state
        .setIn(['deleteWishStatus', 'loading'], false)
        .setIn(['deleteWishStatus', 'loaded'], true)
        .setIn(['deleteWishStatus', 'error'], false)
        .deleteIn(['wishlist', 'items', action.index]);
    case DELETE_WISH_FAIL:
      return state
        .setIn(['deleteWishStatus', 'loading'], false)
        .setIn(['deleteWishStatus', 'loaded'], false)
        .setIn(['deleteWishStatus', 'error'], action.error);
    case GET_WISHLIST:
      return state
        .setIn(['getWishlistStatus', 'loading'], true)
        .setIn(['getWishlistStatus', 'loaded'], false)
        .setIn(['getWishlistStatus', 'error'], false);
    case GET_WISHLIST_SUCCESS:
      return state
        .setIn(['getWishlistStatus', 'loading'], false)
        .setIn(['getWishlistStatus', 'loaded'], true)
        .setIn(['getWishlistStatus', 'error'], false)
        .set('wishlist', fromJS(action.wishlist));
    case GET_WISHLIST_FAIL:
      return state
        .setIn(['getWishlistStatus', 'loading'], false)
        .setIn(['getWishlistStatus', 'loaded'], false)
        .setIn(['getWishlistStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default wishlistReducer;
