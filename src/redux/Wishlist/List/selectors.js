import { createSelector } from 'reselect';

/**
 * Direct selector to the Wishlist List state domain
 */
const selectWishlistDomain = () => state => state.get('wishlist');

const selectHeadings = () =>
  createSelector(selectWishlistDomain(), wishlistState =>
    wishlistState.get('headings')
  );
const selectWishlist = () =>
  createSelector(selectWishlistDomain(), wishlistState =>
    wishlistState.get('wishlist')
  );

const selectGetWishlistStatus = () =>
  createSelector(selectWishlistDomain(), wishlistState =>
    wishlistState.get('getWishlistStatus')
  );

const selectDeleteWishStatus = () =>
  createSelector(selectWishlistDomain(), wishlistState =>
    wishlistState.get('deleteWishStatus')
  );
export {
  selectHeadings,
  selectWishlist,
  selectGetWishlistStatus,
  selectDeleteWishStatus,
};
