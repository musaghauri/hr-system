import { createSelector } from 'reselect';

/**
 * Direct selector to the Branches List state domain
 */
const selectBranchesListDomain = () => state => state.get('branchesList');

const selectHeadings = () =>
  createSelector(selectBranchesListDomain(), branchesListState =>
    branchesListState.get('headings')
  );
const selectBranches = () =>
  createSelector(selectBranchesListDomain(), branchesListState =>
    branchesListState.get('branches')
  );

const selectGetBranchesStatus = () =>
  createSelector(selectBranchesListDomain(), branchesListState =>
    branchesListState.get('getBranchesStatus')
  );

const selectDeleteBranchStatus = () =>
  createSelector(selectBranchesListDomain(), branchesListState =>
    branchesListState.get('deleteBranchStatus')
  );
export {
  selectHeadings,
  selectBranches,
  selectGetBranchesStatus,
  selectDeleteBranchStatus,
};