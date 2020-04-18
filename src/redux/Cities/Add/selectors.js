import { createSelector } from 'reselect';

/**
 * Direct selector to the Add City city domain
 */
const selectAddCityDomain = () => city => city.get('addCity');

const selectAddCityStatus = () =>
  createSelector(selectAddCityDomain(), addCityCity =>
    addCityCity.get('addCityStatus')
  );

const selectFormDetails = () =>
  createSelector(selectAddCityDomain(), addCityCity =>
    addCityCity.get('formDetails')
  );
const selectCountries = () =>
  createSelector(selectAddCityDomain(), addCityCity =>
    addCityCity.get('countries')
  );

const selectGetCountriesStatus = () =>
  createSelector(selectAddCityDomain(), addCityCity =>
    addCityCity.get('getCountriesStatus')
  );
const selectStates = () =>
  createSelector(selectAddCityDomain(), addCityCity =>
    addCityCity.get('states')
  );

const selectGetStatesStatus = () =>
  createSelector(selectAddCityDomain(), addCityCity =>
    addCityCity.get('getStatesStatus')
  );
export {
  selectAddCityStatus,
  selectFormDetails,
  selectCountries,
  selectGetCountriesStatus,
  selectStates,
  selectGetStatesStatus,
};
