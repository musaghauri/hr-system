import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit Asset state domain
 */
const selectEditAssetDomain = () => state => state.get('editAsset');

const selectGetAssetStatus = () =>
  createSelector(selectEditAssetDomain(), editAssetState =>
    editAssetState.get('getAssetStatus')
  );

const selectEditAssetStatus = () =>
  createSelector(selectEditAssetDomain(), editAssetState =>
    editAssetState.get('editAssetStatus')
  );

const selectFormDetails = () =>
  createSelector(selectEditAssetDomain(), editAssetState =>
    editAssetState.get('formDetails')
  );

export { selectGetAssetStatus, selectEditAssetStatus, selectFormDetails };
