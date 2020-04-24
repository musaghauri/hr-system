import React, { Component } from 'react';
import EditBranch from '@components/views/Branches/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, editBranch, updateValue } from './actions';
import {
  selectFormDetails,
  selectEditBranchStatus,
  selectGetBranchStatus,
  selectDepartments,
  selectGetDepartmentsStatus,
  selectCities,
  selectGetCitiesStatus
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
    const { editBranchStatus, onUpdateValue, formDetails, departments, cities } = this.props;
    return (
      <EditBranch
        submitLabel="Edit Branch"
        successMessage="Branch edited successfully!"
        submitColor="yellow"
        formDetails={formDetails}
        cities={cities}
        departments={departments}
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
  getDepartmentsStatus: selectGetDepartmentsStatus(),
  cities: selectCities(),
  getCitiesStatus: selectGetCitiesStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEditBranch: bindActionCreators(editBranch, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBranchContainer);
