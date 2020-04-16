import { createSelector } from 'reselect';

/**
 * Direct selector to the Countries List state domain
 */
const selectCountriesListDomain = () => state => state.get('countriesList');

const selectHeadings = () =>
  createSelector(selectCountriesListDomain(), countriesListState =>
    countriesListState.get('headings')
  );
const selectCountries = () =>
  createSelector(selectCountriesListDomain(), countriesListState =>
    countriesListState.get('countries')
  );

const selectGetCountriesStatus = () =>
  createSelector(selectCountriesListDomain(), countriesListState =>
    countriesListState.get('getCountriesStatus')
  );

const selectDeleteCountryStatus = () =>
  createSelector(selectCountriesListDomain(), countriesListState =>
    countriesListState.get('deleteCountryStatus')
  );
export {
  selectHeadings,
  selectCountries,
  selectGetCountriesStatus,
  selectDeleteCountryStatus,
};
