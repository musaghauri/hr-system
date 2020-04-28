import React, { Component } from 'react';
import EditDepartment from '@components/views/Departments/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, editDepartment, updateValue } from './actions';
import {
  selectFormDetails,
  selectEditDepartmentStatus,
  selectGetDepartmentStatus,
} from './selectors';

class EditDepartmentContainer extends Component {
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
    const { onEditDepartment, query } = this.props;
    const { departmentId } = query;
    const departmentData = submitFormData(formDetails);
    onEditDepartment(departmentData, departmentId);
  };

  render() {
    const { editDepartmentStatus, onUpdateValue, formDetails } = this.props;
    return (
      <EditDepartment
        submitLabel="Edit Department"
        successMessage="Department edited successfully!"
        submitColor="yellow"
        formDetails={formDetails}
        submitStatus={editDepartmentStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getDepartmentStatus: selectGetDepartmentStatus(),
  editDepartmentStatus: selectEditDepartmentStatus(),
  formDetails: selectFormDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEditDepartment: bindActionCreators(editDepartment, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditDepartmentContainer);
