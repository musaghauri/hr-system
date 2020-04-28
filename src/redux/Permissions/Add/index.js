import React, { Component } from 'react';
import AddPermission from '@components/views/Permissions/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, addPermission, updateValue } from './actions';
import { selectFormDetails, selectAddPermissionStatus } from './selectors';

class AddPermissionContainer extends Component {
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
    const { onAddPermission } = this.props;
    const userData = submitFormData(formDetails);
    onAddPermission(userData);
  };

  render() {
    const { addPermissionStatus, onUpdateValue, formDetails } = this.props;
    return (
      <AddPermission
        submitLabel="Add Permission"
        successMessage="Permission added successfully!"
        submitColor="green"
        formDetails={formDetails}
        submitStatus={addPermissionStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addPermissionStatus: selectAddPermissionStatus(),
  formDetails: selectFormDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddPermission: bindActionCreators(addPermission, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPermissionContainer);
