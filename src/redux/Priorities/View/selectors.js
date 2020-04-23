import { createSelector } from 'reselect';

/**
 * Direct selector to the View Priority state domain
 */
const selectViewPriorityDomain = () => state => state.get('viewPriority');

const selectPriority = () =>
  createSelector(selectViewPriorityDomain(), viewPriorityState =>
    viewPriorityState.get('priority')
  );

const selectGetPriorityStatus = () =>
  createSelector(selectViewPriorityDomain(), viewPriorityState =>
    viewPriorityState.get('getPriorityStatus')
  );

export { selectPriority, selectGetPriorityStatus };
