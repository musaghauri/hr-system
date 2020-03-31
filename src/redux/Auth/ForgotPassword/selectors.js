import { createSelector } from "reselect";

/**
 * Direct selector to the viewDriver state domain
 */
const selectForgotPasswordDomain = () => state => state.get("forgotPassword");

const selectformDetails = () =>
  createSelector(selectForgotPasswordDomain(), forgotPasswordState =>
    forgotPasswordState.get("formDetails")
  );

export { selectformDetails };
