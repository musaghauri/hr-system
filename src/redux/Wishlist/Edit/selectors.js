import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit Wish state domain
 */
const selectEditWishDomain = () => state => state.get('editWish');

const selectGetWishStatus = () =>
  createSelector(selectEditWishDomain(), editWishState =>
    editWishState.get('getWishStatus')
  );

const selectEditWishStatus = () =>
  createSelector(selectEditWishDomain(), editWishState =>
    editWishState.get('editWishStatus')
  );

const selectFormDetails = () =>
  createSelector(selectEditWishDomain(), editWishState =>
    editWishState.get('formDetails')
  );

export {
  selectGetWishStatus,
  selectEditWishStatus,
  selectFormDetails,
};
