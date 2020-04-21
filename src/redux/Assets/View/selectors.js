import { createSelector } from 'reselect';

/**
 * Direct selector to the View Asset state domain
 */
const selectViewAssetDomain = () => state => state.get('viewAsset');

const selectAsset = () =>
  createSelector(selectViewAssetDomain(), viewAssetState =>
    viewAssetState.get('asset')
  );

const selectGetAssetStatus = () =>
  createSelector(selectViewAssetDomain(), viewAssetState =>
    viewAssetState.get('getAssetStatus')
  );

export { selectAsset, selectGetAssetStatus };
