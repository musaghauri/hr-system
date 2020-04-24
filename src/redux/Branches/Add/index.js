import React, { Component } from 'react';
import AddBranch from '@components/views/Branches/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, addBranch, updateValue } from './actions';
import {
  selectFormDetails, 
  selectAddBranchStatus ,
  selectDepartments,
  selectGetDepartmentsStatus,
  selectCities,
  selectGetCitiesStatus
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
    const { addBranchStatus, onUpdateValue, formDetails, departments, cities } = this.props;
    return (
      <AddBranch
        submitLabel="Add Branch"
        successMessage="Branch added successfully!"
        submitColor="green"
        formDetails={formDetails}
        cities={cities}
        departments={departments}
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
  getDepartmentsStatus: selectGetDepartmentsStatus(),
  cities: selectCities(),
  getCitiesStatus: selectGetCitiesStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddBranch: bindActionCreators(addBranch, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBranchContainer);
