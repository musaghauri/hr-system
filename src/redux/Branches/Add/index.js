import React, { Component } from 'react';
import AddBranch from '@components/views/Branches/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { 
  resetReducer, 
  addBranch, 
  updateValue, 
  getStates, 
  getCities
} from './actions';
import {
  selectFormDetails, 
  selectAddBranchStatus ,
  selectDepartments,
  selectGetDepartmentsStatus,
  selectCountries,
  selectGetCountriesStatus,
  selectStates,
  selectGetStatesStatus,
  selectCities,
  selectGetCitiesStatus,
} from './selectors';

class AddBranchContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  updateFormDetails = formDetails => {
    const { onUpdateValue } = this.props;
    onUpdateValue('formDetails', formDetails);
  };

  validateForm = formData => validateFormData(formData);

  submitForm = formDetails => {
    const { onAddBranch } = this.props;
    const branchData = submitFormData(formDetails);
    onAddBranch(branchData);
  };

  render() {
    const { 
      addBranchStatus, 
      onUpdateValue, 
      formDetails, 
      departments, 
      getCountriesStatus,
      getStatesStatus,
      getCitiesStatus,
      getDepartmentsStatus,
      states,
      countries,
      cities,
      onGetStates,
      onGetCities
    } = this.props;
    return (
      <AddBranch
        submitLabel="Add Branch"
        successMessage="Branch added successfully!"
        submitColor="green"
        getStates={onGetStates}
        getCities={onGetCities}
        formDetails={formDetails}
        countries={countries}
        states={states}
        cities={cities}
        departments={departments}
        getCountriesStatus={getCountriesStatus}
        getStatesStatus={getStatesStatus}
        getCitiesStatus={getCitiesStatus}
        getDepartmentsStatus={getDepartmentsStatus}
        submitStatus={addBranchStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addBranchStatus: selectAddBranchStatus(),
  formDetails: selectFormDetails(),
  departments: selectDepartments(),
  countries: selectCountries(),
  states: selectStates(),
  cities: selectCities(),
  getDepartmentsStatus: selectGetDepartmentsStatus(),
  getCountriesStatus: selectGetCountriesStatus(),
  getStatesStatus: selectGetStatesStatus(),
  getCitiesStatus: selectGetCitiesStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddBranch: bindActionCreators(addBranch, dispatch),
    onGetStates: bindActionCreators(getStates, dispatch),
    onGetCities: bindActionCreators(getCities, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBranchContainer);
