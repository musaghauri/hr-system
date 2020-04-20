import { createSelector } from 'reselect';

/**
 * Direct selector to the Priorities List state domain
 */
const selectPrioritiesListDomain = () => state => state.get('prioritiesList');

const selectHeadings = () =>
  createSelector(selectPrioritiesListDomain(), prioritiesListState =>
    prioritiesListState.get('headings')
  );
const selectPriorities = () =>
  createSelector(selectPrioritiesListDomain(), prioritiesListState =>
    prioritiesListState.get('priorities')
  );

const selectGetPrioritiesStatus = () =>
  createSelector(selectPrioritiesListDomain(), prioritiesListState =>
    prioritiesListState.get('getPrioritiesStatus')
  );

const selectDeletePriorityStatus = () =>
  createSelector(selectPrioritiesListDomain(), prioritiesListState =>
    prioritiesListState.get('deletePriorityStatus')
  );
export {
  selectHeadings,
  selectPriorities,
  selectGetPrioritiesStatus,
  selectDeletePriorityStatus,
};
