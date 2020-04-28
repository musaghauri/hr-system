import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit State state domain
 */
const selectEditStateDomain = () => state => state.get('editState');

const selectGetStateStatus = () =>
  createSelector(selectEditStateDomain(), editStateState =>
    editStateState.get('getStateStatus')
  );

const selectEditStateStatus = () =>
  createSelector(selectEditStateDomain(), editStateState =>
    editStateState.get('editStateStatus')
  );

const selectFormDetails = () =>
  createSelector(selectEditStateDomain(), editStateState =>
    editStateState.get('formDetails')
  );
const selectCountries = () =>
  createSelector(selectEditStateDomain(), editStateState =>
    editStateState.get('countries')
  );

const selectGetCountriesStatus = () =>
  createSelector(selectEditStateDomain(), editStateState =>
    editStateState.get('getCountriesStatus')
  );
export {
  selectGetStateStatus,
  selectEditStateStatus,
  selectFormDetails,
  selectCountries,
  selectGetCountriesStatus,
};
