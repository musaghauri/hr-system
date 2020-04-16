import { createSelector } from 'reselect';

/**
 * Direct selector to the View State state domain
 */
const selectViewStateDomain = () => state => state.get('viewState');

const selectState = () =>
  createSelector(selectViewStateDomain(), viewStateState =>
    viewStateState.get('state')
  );

const selectGetStateStatus = () =>
  createSelector(selectViewStateDomain(), viewStateState =>
    viewStateState.get('getStateStatus')
  );

export { selectState, selectGetStateStatus };
