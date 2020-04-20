import React, { Component } from 'react';
import AddPriority from '@components/views/Priorities/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, addPriority, updateValue } from './actions';
import { selectFormDetails, selectAddPriorityStatus } from './selectors';

class AddPriorityContainer extends Component {
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
    const { onAddPriority } = this.props;
    const userData = submitFormData(formDetails);
    onAddPriority(userData);
  };

  render() {
    const { addPriorityStatus, onUpdateValue, formDetails } = this.props;
    return (
      <AddPriority
        submitLabel="Add Priority"
        successMessage="Priority added successfully!"
        submitColor="green"
        formDetails={formDetails}
        submitStatus={addPriorityStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addPriorityStatus: selectAddPriorityStatus(),
  formDetails: selectFormDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddPriority: bindActionCreators(addPriority, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPriorityContainer);
