import { createSelector } from "reselect";

/**
 * Direct selector to the forgotPassword state domain
 */
const selectForgotPasswordDomain = () => state => state.get("forgotPassword");

const selectFormDetails = () =>
  createSelector(selectForgotPasswordDomain(), forgotPasswordState =>
    forgotPasswordState.get("formDetails")
  );

export { selectFormDetails };
