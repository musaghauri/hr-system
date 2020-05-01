import React, { Component } from 'react';
import EditBranch from '@components/views/Branches/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { 
  resetReducer, 
  editBranch, 
  updateValue,
  getStates, 
  getCities
} from './actions';
import {
  selectFormDetails,
  selectEditBranchStatus,
  selectGetBranchStatus,
  selectDepartments,
  selectGetDepartmentsStatus,
  selectCountries,
  selectGetCountriesStatus,
  selectStates,
  selectGetStatesStatus,
  selectCities,
  selectGetCitiesStatus,
} from './selectors';

class EditBranchContainer extends Component {
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
    const { onEditBranch, query } = this.props;
    const { branchId } = query;
    const branchData = submitFormData(formDetails);
    onEditBranch(branchData, branchId);
  };

  render() {
    const { 
      editBranchStatus, 
      onUpdateValue, 
      formDetails, 
      departments, 
      states,
      countries,
      cities,
      onGetStates,
      onGetCities,
      getCountriesStatus,
      getStatesStatus,
      getCitiesStatus,
      getDepartmentsStatus
    } = this.props;
    return (
      <EditBranch
        submitLabel="Edit Branch"
        successMessage="Branch edited successfully!"
        submitColor="yellow"
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
        submitStatus={editBranchStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getBranchStatus: selectGetBranchStatus(),
  editBranchStatus: selectEditBranchStatus(),
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
    onEditBranch: bindActionCreators(editBranch, dispatch),
    onGetStates: bindActionCreators(getStates, dispatch),
    onGetCities: bindActionCreators(getCities, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBranchContainer);
