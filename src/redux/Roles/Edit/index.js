import React, { Component } from 'react';
import EditRole from '@components/views/Roles/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, editRole, updateValue } from './actions';
import {
  selectFormDetails,
  selectEditRoleStatus,
  selectGetRoleStatus,
  selectPermissions,
  selectGetPermissionsStatus,
} from './selectors';

class EditRoleContainer extends Component {
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
    const { onEditRole, query } = this.props;
    const { roleId } = query;
    const userData = submitFormData(formDetails);
    onEditRole(userData, roleId);
  };

  render() {
    const {
      editRoleStatus,
      permissions,
      onUpdateValue,
      formDetails,
    } = this.props;
    return (
      <EditRole
        submitLabel="Edit Role"
        successMessage="Role edited successfully!"
        submitColor="yellow"
        formDetails={formDetails}
        submitStatus={editRoleStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
        permissions={permissions}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getRoleStatus: selectGetRoleStatus(),
  editRoleStatus: selectEditRoleStatus(),
  formDetails: selectFormDetails(),
  permissions: selectPermissions(),
  getPermissionsStatus: selectGetPermissionsStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEditRole: bindActionCreators(editRole, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRoleContainer);
