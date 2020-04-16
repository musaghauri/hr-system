import { createSelector } from 'reselect';

/**
 * Direct selector to the States List state domain
 */
const selectStatesListDomain = () => state => state.get('statesList');

const selectHeadings = () =>
  createSelector(selectStatesListDomain(), statesListState =>
    statesListState.get('headings')
  );
const selectStates = () =>
  createSelector(selectStatesListDomain(), statesListState =>
    statesListState.get('states')
  );

const selectGetStatesStatus = () =>
  createSelector(selectStatesListDomain(), statesListState =>
    statesListState.get('getStatesStatus')
  );

const selectDeleteStateStatus = () =>
  createSelector(selectStatesListDomain(), statesListState =>
    statesListState.get('deleteStateStatus')
  );
export {
  selectHeadings,
  selectStates,
  selectGetStatesStatus,
  selectDeleteStateStatus,
};
