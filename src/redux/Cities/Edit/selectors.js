import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit City city domain
 */
const selectEditCityDomain = () => city => city.get('editCity');

const selectGetCityStatus = () =>
  createSelector(selectEditCityDomain(), editCityCity =>
    editCityCity.get('getCityStatus')
  );

const selectEditCityStatus = () =>
  createSelector(selectEditCityDomain(), editCityCity =>
    editCityCity.get('editCityStatus')
  );

const selectFormDetails = () =>
  createSelector(selectEditCityDomain(), editCityCity =>
    editCityCity.get('formDetails')
  );
const selectCountries = () =>
  createSelector(selectEditCityDomain(), editCityCity =>
    editCityCity.get('countries')
  );

const selectGetCountriesStatus = () =>
  createSelector(selectEditCityDomain(), editCityCity =>
    editCityCity.get('getCountriesStatus')
  );
const selectStates = () =>
  createSelector(selectEditCityDomain(), addCityCity =>
    addCityCity.get('states')
  );

const selectGetStatesStatus = () =>
  createSelector(selectEditCityDomain(), addCityCity =>
    addCityCity.get('getStatesStatus')
  );
export {
  selectGetCityStatus,
  selectEditCityStatus,
  selectFormDetails,
  selectCountries,
  selectGetCountriesStatus,
  selectStates,
  selectGetStatesStatus,
};
