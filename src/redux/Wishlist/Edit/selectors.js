import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit Wish state domain
 */
const selectEditWishDomain = () => state => state.get('editWishlist');

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

  const selectPriorities = () =>
  createSelector(selectEditWishDomain(), editWishState =>
  editWishState.get('priorities')
  );


export {
  selectGetWishStatus,
  selectEditWishStatus,
  selectFormDetails,
  selectPriorities,
};
