import { fromJS } from "immutable";
import { RESET_REDUCER, UPDATE_FORM_DETAILS } from "./constants";

export const initialState = fromJS({
  formDetails: {
    personalInformation: {
      name: { value: "" },
      companyEmail: { value: "" },
      fatherName: { value: "" },
      dateOfBirth: { value: "" },
      gender: { value: "" },
      nationality: { value: "" },
      city: { value: "" },
      country: { value: "" },
      religion: { value: "" },
      maritalStatus: { value: "" },
      bloodGroup: { value: "" },
      disability: { value: "" },
      cnic: { value: "" },
      ntn: { value: "" },
      domicile: { value: "" }
    },
    officialInformation: {
      employeeId: { value: "" },
      employeeStatus: { value: "" },
      designation: { value: "" },
      socialSecurity: { value: "" },
      healthBenefits: { value: "" },
      providentFund: { value: "" },
      department: { value: "" },
      joiningDate: { value: "" },
      resignationDate: { value: "" },
      exitDate: { value: "" }
    },
    contactInformation: {
      title: { value: "" },
      type: { value: "" },
      detail: { value: "" }
    },
    salarySettings: {
      modeOfPayment: { value: "" },
      exGratiaOnOvertime: { value: "" },
      gratuity: { value: "" },
      bankDetails: { value: "" }
    },
    academics: {
      degreeName: { value: "" },
      board: { value: "" },
      university: { value: "" },
      marks: { value: "" },
      grade: { value: "" }
    },
    experience: {
      organization: { value: "" },
      designation: { value: "" },
      duration: { value: "" },
      leavingReason: { value: "" },
      salary: { value: "" }
    },
    dependants: {
      name: { value: "" },
      gender: { value: "" },
      relation: { value: "" },
      contact: { value: "" },
      dateOfBirth: { value: "" }
    },
    companyAssets: {
      id: { value: "" },
      detail: { value: "" },
      returnable: { value: true },
      status: { value: false },
      issueData: { value: "" }
    },
    leaveBalance: { value: "" },
    duties: {
      job: { value: "" },
      frequency: { value: "" },
      effectiveFrom: { value: "" },
      enchancedTill: { value: "" }
    }
  }
});

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_FORM_DETAILS:
      return state.setIn(
        [
          "formDetails",
          fromJS(action.parentName),
          fromJS(action.name),
          "value"
        ],
        fromJS(action.value)
      );
    default:
      return state;
  }
}

export default registerReducer;
