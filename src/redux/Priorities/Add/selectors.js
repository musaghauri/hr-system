import { createSelector } from 'reselect';

/**
 * Direct selector to the Add Priority state domain
 */
const selectAddPriorityDomain = () => state => state.get('addPriority');

const selectAddPriorityStatus = () =>
  createSelector(selectAddPriorityDomain(), addPriorityState =>
  addPriorityState.get('addPriorityStatus')
  );

const selectFormDetails = () =>
  createSelector(selectAddPriorityDomain(), addPriorityState =>
  addPriorityState.get('formDetails')
  );
const selectPriorities = () =>
  createSelector(selectAddPriorityDomain(), addPriorityState =>
  addPriorityState.get('priorities')
  );

const selectGetPrioritiesStatus = () =>
  createSelector(selectAddPriorityDomain(), addPriorityState =>
  addPriorityState.get('getPrioritiesStatus')
  );
export {
  selectAddPriorityStatus,
  selectFormDetails,
  selectPriorities,
  selectGetPrioritiesStatus,
};
