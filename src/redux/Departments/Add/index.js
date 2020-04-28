import React, { Component } from 'react';
import AddDepartment from '@components/views/Departments/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, addDepartment, updateValue } from './actions';
import { selectFormDetails, selectAddDepartmentStatus } from './selectors';

class AddDepartmentContainer extends Component {
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
    const { onAddDepartment } = this.props;
    const departmentData = submitFormData(formDetails);
    onAddDepartment(departmentData);
  };

  render() {
    const { addDepartmentStatus, onUpdateValue, formDetails } = this.props;
    return (
      <AddDepartment
        submitLabel="Add Department"
        successMessage="Department added successfully!"
        submitColor="green"
        formDetails={formDetails}
        submitStatus={addDepartmentStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addDepartmentStatus: selectAddDepartmentStatus(),
  formDetails: selectFormDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddDepartment: bindActionCreators(addDepartment, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDepartmentContainer);
