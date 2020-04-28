import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit Priority state domain
 */
const selectEditPriorityDomain = () => state => state.get('editPriority');

const selectGetPriorityStatus = () =>
  createSelector(selectEditPriorityDomain(), editPriorityState =>
    editPriorityState.get('getPriorityStatus')
  );

const selectEditPriorityStatus = () =>
  createSelector(selectEditPriorityDomain(), editPriorityState =>
    editPriorityState.get('editPriorityStatus')
  );

const selectFormDetails = () =>
  createSelector(selectEditPriorityDomain(), editPriorityState =>
    editPriorityState.get('formDetails')
  );

export {
  selectGetPriorityStatus,
  selectEditPriorityStatus,
  selectFormDetails,
};
