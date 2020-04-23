import { createSelector } from 'reselect';

/**
 * Direct selector to the Add Wish state domain
 */
const selectAddWishDomain = () => state => state.get('addWish');

const selectAddWishStatus = () =>
  createSelector(selectAddWishDomain(), addWishState =>
    addWishState.get('addWishStatus')
  );

const selectFormDetails = () =>
  createSelector(selectAddWishDomain(), addWishState =>
    addWishState.get('formDetails')
  );

  const selectPriorities = () =>
  createSelector(selectAddWishDomain(), addWishState =>
  addWishState.get('priorities')
  );

export { selectAddWishStatus, selectFormDetails, selectPriorities };
