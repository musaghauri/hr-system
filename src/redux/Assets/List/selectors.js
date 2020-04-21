import { createSelector } from 'reselect';

/**
 * Direct selector to the Assets List state domain
 */
const selectAssetsListDomain = () => state => state.get('assetsList');

const selectHeadings = () =>
  createSelector(selectAssetsListDomain(), assetsListState =>
    assetsListState.get('headings')
  );
const selectAssets = () =>
  createSelector(selectAssetsListDomain(), assetsListState =>
    assetsListState.get('assets')
  );

const selectGetAssetsStatus = () =>
  createSelector(selectAssetsListDomain(), assetsListState =>
    assetsListState.get('getAssetsStatus')
  );

const selectDeleteAssetStatus = () =>
  createSelector(selectAssetsListDomain(), assetsListState =>
    assetsListState.get('deleteAssetStatus')
  );
export {
  selectHeadings,
  selectAssets,
  selectGetAssetsStatus,
  selectDeleteAssetStatus,
};
