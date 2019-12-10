import { createSelector } from 'reselect';

/**
 * Direct selector to the landing page state domain
 */
const selectLandingPageDomain = () => state => state.get('landingPage');

const selectClock = () =>
  createSelector(selectLandingPageDomain(), landingPageState =>
    landingPageState.get('clock')
  );
export { selectClock };
