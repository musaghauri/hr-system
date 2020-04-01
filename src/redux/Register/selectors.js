import { createSelector } from "reselect";

/**
 * Direct selector to the register state domain
 *  */
const selectRegisterDomain = () => state => state.get("register");

const selectFormDetails = () =>
  createSelector(selectRegisterDomain(), registerState =>
    registerState.get("formDetails")
  );

export { selectFormDetails };
