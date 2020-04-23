import React, { Component } from 'react';
import EditPriority from '@components/views/Priorities/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, editPriority, updateValue } from './actions';
import {
  selectFormDetails,
  selectEditPriorityStatus,
  selectGetPriorityStatus,
} from './selectors';

class EditPriorityContainer extends Component {
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
    const { onEditPriority, query } = this.props;
    const { priorityId } = query;
    const priorityData = submitFormData(formDetails);
    onEditPriority(priorityData, priorityId);
  };

  render() {
    const { editPriorityStatus, onUpdateValue, formDetails } = this.props;
    return (
      <EditPriority
        submitLabel="Edit Priority"
        successMessage="Priority edited successfully!"
        submitColor="yellow"
        formDetails={formDetails}
        submitStatus={editPriorityStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getPriorityStatus: selectGetPriorityStatus(),
  editPriorityStatus: selectEditPriorityStatus(),
  formDetails: selectFormDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEditPriority: bindActionCreators(editPriority, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPriorityContainer);
