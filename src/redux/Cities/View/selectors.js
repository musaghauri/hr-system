import { createSelector } from 'reselect';

/**
 * Direct selector to the View City city domain
 */
const selectViewCityDomain = () => city => city.get('viewCity');

const selectCity = () =>
  createSelector(selectViewCityDomain(), viewCityCity =>
    viewCityCity.get('city')
  );

const selectGetCityStatus = () =>
  createSelector(selectViewCityDomain(), viewCityCity =>
    viewCityCity.get('getCityStatus')
  );

export { selectCity, selectGetCityStatus };
