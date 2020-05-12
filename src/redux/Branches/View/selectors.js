import { createSelector } from 'reselect';

/**
 * Direct selector to the View Branch state domain
 */
const selectViewBranchDomain = () => state => state.get('viewBranch');

const selectBranch = () =>
  createSelector(selectViewBranchDomain(), viewBranchState =>
    viewBranchState.get('branch')
  );

const selectGetBranchStatus = () =>
  createSelector(selectViewBranchDomain(), viewBranchState =>
    viewBranchState.get('getBranchStatus')
  );

export { selectBranch, selectGetBranchStatus };
