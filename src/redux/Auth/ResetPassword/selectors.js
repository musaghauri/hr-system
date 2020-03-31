import { createSelector } from "reselect";

/**
 * Direct selector to the viewDriver state domain
 */
const selectResetPasswordDomain = () => state => state.get("resetPassword");

const selectformDetails = () =>
  createSelector(selectResetPasswordDomain(), resetPasswordState =>
    resetPasswordState.get("formDetails")
  );

export { selectformDetails };
