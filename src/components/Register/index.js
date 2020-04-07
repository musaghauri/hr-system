import React, { Component } from "react";
import Personal from "./Personal";
import Official from "./Official";
import Salary from "./Salary";
import LeaveBalance from "./LeaveBalance";
import Experience from "./Experience";
import Duty from "./Duty";
import Dependent from "./Dependent";
import Contact from "./Contact";
import CompanyAsset from "./CompanyAsset";
import Academic from "./Academic";

class Register extends Component {
  state = {
    step: 1,
  };

  nextStep = () => {
    const { step } = this.state;
    if (step < 10) {
      this.setState({
        step: step + 1,
      });
    }
  };

  prevStep = () => {
    const { step } = this.state;
    if (step > 1) {
      this.setState({
        step: step - 1,
      });
    }
  };

  render() {
    const { step } = this.state;
    const {
      formDetails,
      updateValue,
      handleSubmit,
      addAnotherEntry,
    } = this.props;
    switch (step) {
      case 1:
        return (
          <Personal
            formDetails={formDetails}
            updateValue={updateValue}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 2:
        return (
          <Official
            formDetails={formDetails}
            updateValue={updateValue}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <Contact
            formDetails={formDetails}
            updateValue={updateValue}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      case 4:
        return (
          <Salary
            formDetails={formDetails}
            updateValue={updateValue}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 5:
        return (
          <Academic
            formDetails={formDetails}
            updateValue={updateValue}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      case 6:
        return (
          <Experience
            formDetails={formDetails}
            updateValue={updateValue}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      case 7:
        return (
          <Dependent
            formDetails={formDetails}
            updateValue={updateValue}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      case 8:
        return (
          <CompanyAsset
            formDetails={formDetails}
            updateValue={updateValue}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      case 9:
        return (
          <LeaveBalance
            formDetails={formDetails}
            updateValue={updateValue}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 10:
        return (
          <Duty
            formDetails={formDetails}
            updateValue={updateValue}
            handleSubmit={handleSubmit}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
    }
  }
}
export default Register;
