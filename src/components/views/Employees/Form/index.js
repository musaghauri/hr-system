import React, { Component } from 'react';
import _assign from 'lodash/assign';
import _pick from 'lodash/pick';

import Personal from './Personal';
import Official from './Official';
import Salary from './Salary';
import LeaveBalance from './LeaveBalance';
import Experience from './Experience';
import Duty from './Duty';
import Dependent from './Dependent';
import Contact from './Contact';
import CompanyAsset from './CompanyAsset';
import Academic from './Academic';
import Intro from './Intro';

const ATTRIBUTES = [
  ['name', 'email', 'role', 'password', 'isActive', 'isVerified'],
  ['personalInformation'],
  ['officialInformation'],
  ['contactInformation'],
  ['salarySettings'],
  ['academics'],
  ['experience'],
  ['dependents'],
  ['companyAssets'],
  ['leaveBalance'],
  ['duties'],
];

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 3,
    };
  }

  nextStep = () => {
    const { step } = this.state;
    const { validateForm, updateValue, formDetails } = this.props;
    const modifiedData = _pick(formDetails.toJS(), ATTRIBUTES[step]);
    const result = validateForm(modifiedData);
    const newFormDetails = _assign(formDetails.toJS(), result.updatedFormData);
    updateValue(['formDetails'], newFormDetails);
    if (result.validateFlag && step < 10) {
      this.setState({ step: step + 1 });
    }
  };

  prevStep = () => {
    const { step } = this.state;
    if (step > 0) {
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
      validateForm,
      addAnotherEntry,
      roles,
      countries,
      states,
      cities,
      departments,
      assets,
      submitColor,
      getStates,
      getCities,
      getCountriesStatus,
      getStatesStatus,
      getCitiesStatus,
      getDepartmentsStatus,
      getAssetsStatus,
      submitStatus,
      successMessage,
      getRolesStatus,
      deleteEntry,
    } = this.props;
    switch (step) {
      case 0:
        return (
          <Intro
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            roles={roles}
            getRolesStatus={getRolesStatus}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 1:
        return (
          <Personal
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            getStates={getStates}
            getCities={getCities}
            countries={countries}
            states={states}
            cities={cities}
            getCountriesStatus={getCountriesStatus}
            getStatesStatus={getStatesStatus}
            getCitiesStatus={getCitiesStatus}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 2:
        return (
          <Official
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            departments={departments}
            getDepartmentsStatus={getDepartmentsStatus}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <Contact
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            deleteEntry={deleteEntry}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      case 4:
        return (
          <Salary
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 5:
        return (
          <Academic
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            deleteEntry={deleteEntry}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      case 6:
        return (
          <Experience
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            deleteEntry={deleteEntry}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      case 7:
        return (
          <Dependent
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            deleteEntry={deleteEntry}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      case 8:
        return (
          <CompanyAsset
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            deleteEntry={deleteEntry}
            assets={assets}
            getAssetsStatus={getAssetsStatus}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      case 9:
        return (
          <LeaveBalance
            formDetails={formDetails}
            validateForm={validateForm}
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
            deleteEntry={deleteEntry}
            submitColor={submitColor}
            submitStatus={submitStatus}
            validateForm={validateForm}
            successMessage={successMessage}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      default:
        return <h3>Loading...</h3>;
    }
  }
}

export default EmployeeForm;
