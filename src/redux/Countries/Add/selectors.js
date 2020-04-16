import { createSelector } from 'reselect';

/**
 * Direct selector to the Add Country state domain
 */
const selectAddCountryDomain = () => state => state.get('addCountry');

const selectAddCountryStatus = () =>
  createSelector(selectAddCountryDomain(), addCountryState =>
    addCountryState.get('addCountryStatus')
  );

const selectFormDetails = () =>
  createSelector(selectAddCountryDomain(), addCountryState =>
    addCountryState.get('formDetails')
  );

export { selectAddCountryStatus, selectFormDetails };
