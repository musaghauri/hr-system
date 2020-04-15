import React, { Component } from 'react';
import AddRole from '@components/views/Roles/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, addRole, updateValue } from './actions';
import {
  selectFormDetails,
  selectAddRoleStatus,
  selectPermissions,
  selectGetPermissionsStatus,
} from './selectors';

class AddRoleContainer extends Component {
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
    const { onAddRole } = this.props;
    const userData = submitFormData(formDetails);
    onAddRole(userData);
  };

  render() {
    const {
      addRoleStatus,
      permissions,
      onUpdateValue,
      formDetails,
    } = this.props;
    return (
      <AddRole
        submitLabel="Add Role"
        successMessage="Role added successfully!"
        submitColor="green"
        formDetails={formDetails}
        submitStatus={addRoleStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
        permissions={permissions}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addRoleStatus: selectAddRoleStatus(),
  formDetails: selectFormDetails(),
  permissions: selectPermissions(),
  getPermissionsStatus: selectGetPermissionsStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddRole: bindActionCreators(addRole, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRoleContainer);
