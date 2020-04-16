import { createSelector } from 'reselect';

/**
 * Direct selector to the View Country state domain
 */
const selectViewCountryDomain = () => state => state.get('viewCountry');

const selectCountry = () =>
  createSelector(selectViewCountryDomain(), viewCountryState =>
    viewCountryState.get('country')
  );

const selectGetCountryStatus = () =>
  createSelector(selectViewCountryDomain(), viewCountryState =>
    viewCountryState.get('getCountryStatus')
  );

export { selectCountry, selectGetCountryStatus };
