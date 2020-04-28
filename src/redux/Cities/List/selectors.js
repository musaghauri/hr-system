import { createSelector } from 'reselect';

/**
 * Direct selector to the Cities List city domain
 */
const selectCitiesListDomain = () => city => city.get('citiesList');

const selectHeadings = () =>
  createSelector(selectCitiesListDomain(), citiesListCity =>
    citiesListCity.get('headings')
  );
const selectCities = () =>
  createSelector(selectCitiesListDomain(), citiesListCity =>
    citiesListCity.get('cities')
  );

const selectGetCitiesStatus = () =>
  createSelector(selectCitiesListDomain(), citiesListCity =>
    citiesListCity.get('getCitiesStatus')
  );

const selectDeleteCityStatus = () =>
  createSelector(selectCitiesListDomain(), citiesListCity =>
    citiesListCity.get('deleteCityStatus')
  );
export {
  selectHeadings,
  selectCities,
  selectGetCitiesStatus,
  selectDeleteCityStatus,
};
