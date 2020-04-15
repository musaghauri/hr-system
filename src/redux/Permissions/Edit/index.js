import React, { Component } from 'react';
import EditPermission from '@components/views/Permissions/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, editPermission, updateValue } from './actions';
import {
  selectFormDetails,
  selectEditPermissionStatus,
  selectGetPermissionStatus,
} from './selectors';

class EditPermissionContainer extends Component {
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
    const { onEditPermission, query } = this.props;
    const { permissionId } = query;
    const userData = submitFormData(formDetails);
    onEditPermission(userData, permissionId);
  };

  render() {
    const { editPermissionStatus, onUpdateValue, formDetails } = this.props;
    return (
      <EditPermission
        submitLabel="Edit Permission"
        successMessage="Permission edited successfully!"
        submitColor="yellow"
        formDetails={formDetails}
        submitStatus={editPermissionStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getPermissionStatus: selectGetPermissionStatus(),
  editPermissionStatus: selectEditPermissionStatus(),
  formDetails: selectFormDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEditPermission: bindActionCreators(editPermission, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPermissionContainer);
