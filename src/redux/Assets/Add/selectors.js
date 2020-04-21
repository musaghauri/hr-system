import { createSelector } from 'reselect';

/**
 * Direct selector to the Add Asset state domain
 */
const selectAddAssetDomain = () => state => state.get('addAsset');

const selectAddAssetStatus = () =>
  createSelector(selectAddAssetDomain(), addAssetState =>
    addAssetState.get('addAssetStatus')
  );

const selectFormDetails = () =>
  createSelector(selectAddAssetDomain(), addAssetState =>
    addAssetState.get('formDetails')
  );

export { selectAddAssetStatus, selectFormDetails };
