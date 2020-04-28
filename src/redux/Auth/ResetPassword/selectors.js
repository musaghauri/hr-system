import { createSelector } from "reselect";

/**
 * Direct selector to the resetPassword state domain
 */
const selectResetPasswordDomain = () => state => state.get("resetPassword");

const selectFormDetails = () =>
  createSelector(selectResetPasswordDomain(), resetPasswordState =>
    resetPasswordState.get("formDetails")
  );

export { selectFormDetails };
