import { createSelector } from 'reselect';

/**
 * Direct selector to the View Wish state domain
 */
const selectViewWishDomain = () => state => state.get('viewWishlist');

const selectWish = () =>
  createSelector(selectViewWishDomain(), viewWishState =>
    viewWishState.get('wish')
  );

const selectGetWishStatus = () =>
  createSelector(selectViewWishDomain(), viewWishState =>
    viewWishState.get('getWishStatus')
  );

export { selectWish, selectGetWishStatus };
