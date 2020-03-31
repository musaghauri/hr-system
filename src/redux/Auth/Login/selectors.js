import { createSelector } from "reselect";

/**
 * Direct selector to the viewDriver state domain
 */
const selectLoginDomain = () => state => state.get("login");

const selectformDetails = () =>
  createSelector(selectLoginDomain(), loginState =>
    loginState.get("formDetails")
  );

export { selectformDetails };
