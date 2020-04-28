import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import Login from '@components/views/Auth/Login';
import { validateFormData } from '@utils/validations';
import { login, resetReducer, updateValue } from './actions';
import {
  selectLoginStatus,
  selectFormDetails,
  selectRoles,
  selectGetRolesStatus,
} from './selectors';

class LoginContainer extends Component {
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
    const { onLogin } = this.props;
    const userData = submitFormData(formDetails);
    onLogin(userData);
  };

  render() {
    const { loginStatus, onUpdateValue, formDetails, roles } = this.props;
    return (
      <Login
        roles={roles.toJS()}
        formDetails={formDetails}
        loginStatus={loginStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loginStatus: selectLoginStatus(),
  formDetails: selectFormDetails(),
  roles: selectRoles(),
  getRolesStatus: selectGetRolesStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLogin: bindActionCreators(login, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
