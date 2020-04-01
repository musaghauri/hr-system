import { createSelector } from "reselect";

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = () => state => state.get("login");

const selectFormDetails = () =>
  createSelector(selectLoginDomain(), loginState =>
    loginState.get("formDetails")
  );

export { selectFormDetails };
