import React, { Component } from 'react';
import _assign from 'lodash/assign';
import _pick from 'lodash/pick';
import _times from 'lodash/times';
import { Button, Grid, Segment, Icon } from 'semantic-ui-react';

import Personal from './Personal';
import Official from './Official';
import Salary from './Salary';
// import LeaveBalance from './LeaveBalance';
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
      step: 1,
      totalSteps: 10,
    };
  }

  validateStep = () => {
    const { step } = this.state;
    const { validateForm, updateValue, formDetails } = this.props;
    const modifiedData = _pick(formDetails.toJS(), ATTRIBUTES[step - 1]);
    const result = validateForm(modifiedData);
    const newFormDetails = _assign(formDetails.toJS(), result.updatedFormData);
    updateValue(['formDetails'], newFormDetails);
    return result.validateFlag;
  };

  nextStep = () => {
    const { step } = this.state;
    if (this.validateStep() && step < 10) {
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

  renderStepForm = step => {
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
      submitLabel,
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
      case 1:
        return (
          <Intro
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            roles={roles}
            getRolesStatus={getRolesStatus}
            nextStep={this.nextStep}
          />
        );
      case 2:
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
      case 3:
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
      case 4:
        return (
          <Contact
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            deleteEntry={deleteEntry}
            makeRows={this.makeRows}
            validateStep={this.validateStep}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      case 5:
        return (
          <Salary
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 6:
        return (
          <Academic
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            deleteEntry={deleteEntry}
            makeRows={this.makeRows}
            validateStep={this.validateStep}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      case 7:
        return (
          <Experience
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            deleteEntry={deleteEntry}
            makeRows={this.makeRows}
            validateStep={this.validateStep}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      case 8:
        return (
          <Dependent
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            deleteEntry={deleteEntry}
            makeRows={this.makeRows}
            validateStep={this.validateStep}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      case 9:
        return (
          <CompanyAsset
            formDetails={formDetails}
            validateForm={validateForm}
            updateValue={updateValue}
            deleteEntry={deleteEntry}
            assets={assets}
            getAssetsStatus={getAssetsStatus}
            makeRows={this.makeRows}
            validateStep={this.validateStep}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      // case 9:
      //   return (
      //     <LeaveBalance
      //       formDetails={formDetails}
      //       validateForm={validateForm}
      //       updateValue={updateValue}
      //       nextStep={this.nextStep}
      //       prevStep={this.prevStep}
      //     />
      //   );
      case 10:
        return (
          <Duty
            formDetails={formDetails}
            updateValue={updateValue}
            handleSubmit={handleSubmit}
            deleteEntry={deleteEntry}
            submitLabel={submitLabel}
            submitColor={submitColor}
            submitStatus={submitStatus}
            validateForm={validateForm}
            successMessage={successMessage}
            makeRows={this.makeRows}
            validateStep={this.validateStep}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addAnotherEntry={addAnotherEntry}
          />
        );
      default:
        return <h3>Loading...</h3>;
    }
  };

  goToStep = step => this.setState({ step });

  makeRows = (headings, pathName, items, handleEdit, deleteEntry) =>
    items.toArray().map((item, itemI) =>
      headings.toArray().map(heading => {
        if (heading.get('name') === 'edit') {
          return {
            value: <Icon name="edit" color="yellow" />,
            isFunctional: true,
            handleChange: () => handleEdit(itemI),
          };
        }
        if (heading.get('name') === 'remove') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () => deleteEntry(['formDetails', pathName, itemI]),
          };
        }
        if (heading.get('name') === 'status') {
          console.log(item.getIn(['status', 'value']).toString());
        }
        return {
          value: item.getIn([heading.get('name'), 'value']).toString(),
          error: !item.getIn([heading.get('name'), 'status'])
            ? item.getIn([heading.get('name'), 'errorText'])
            : false,
          isFunctional: false,
        };
      })
    );

  render() {
    const { step, totalSteps } = this.state;
    return (
      <>
        <Grid columns={2} centered>
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={10}>
              <Segment>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '10px',
                  }}
                >
                  {_times(totalSteps, i => (
                    <Button
                      key={`button_${i + 1}`}
                      icon
                      color="blue"
                      circular
                      active={step === i + 1}
                      // onClick={() => this.goToStep(i + 1)}
                    >
                      {i + 1}
                    </Button>
                  ))}
                </div>
                {this.renderStepForm(step)}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default EmployeeForm;
