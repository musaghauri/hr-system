import React, { Component } from 'react';
import AddDocument from '@components/views/Documents/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, addDocument, updateValue } from './actions';
import { selectFormDetails, selectAddDocumentStatus } from './selectors';

class AddDocumentContainer extends Component {
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
    const { onAddDocument } = this.props;
    const documentData = submitFormData(formDetails);
    onAddDocument(documentData);
  };

  render() {
    const { addDocumentStatus, onUpdateValue, formDetails } = this.props;
    return (
      <AddDocument
        submitLabel="Add Document"
        successMessage="Document added successfully!"
        submitColor="green"
        formDetails={formDetails}
        submitStatus={addDocumentStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addDocumentStatus: selectAddDocumentStatus(),
  formDetails: selectFormDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddDocument: bindActionCreators(addDocument, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDocumentContainer);
