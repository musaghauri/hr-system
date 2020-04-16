import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit Country state domain
 */
const selectEditCountryDomain = () => state => state.get('editCountry');

const selectGetCountryStatus = () =>
  createSelector(selectEditCountryDomain(), editCountryState =>
    editCountryState.get('getCountryStatus')
  );

const selectEditCountryStatus = () =>
  createSelector(selectEditCountryDomain(), editCountryState =>
    editCountryState.get('editCountryStatus')
  );

const selectFormDetails = () =>
  createSelector(selectEditCountryDomain(), editCountryState =>
    editCountryState.get('formDetails')
  );

export { selectGetCountryStatus, selectEditCountryStatus, selectFormDetails };
