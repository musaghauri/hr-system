import { createSelector } from 'reselect';

/**
 * Direct selector to the Add State state domain
 */
const selectAddStateDomain = () => state => state.get('addState');

const selectAddStateStatus = () =>
  createSelector(selectAddStateDomain(), addStateState =>
    addStateState.get('addStateStatus')
  );

const selectFormDetails = () =>
  createSelector(selectAddStateDomain(), addStateState =>
    addStateState.get('formDetails')
  );
const selectCountries = () =>
  createSelector(selectAddStateDomain(), addStateState =>
    addStateState.get('countries')
  );

const selectGetCountriesStatus = () =>
  createSelector(selectAddStateDomain(), addStateState =>
    addStateState.get('getCountriesStatus')
  );
export {
  selectAddStateStatus,
  selectFormDetails,
  selectCountries,
  selectGetCountriesStatus,
};
