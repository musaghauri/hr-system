import React, { Component } from 'react';
import EditDocument from '@components/views/Documents/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, editDocument, updateValue } from './actions';
import {
  selectFormDetails,
  selectEditDocumentStatus,
  selectGetDocumentStatus,
} from './selectors';

class EditDocumentContainer extends Component {
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
    const { onEditDocument, query } = this.props;
    const { documentId } = query;
    const documentData = submitFormData(formDetails);
    onEditDocument(documentData, documentId);
  };

  render() {
    const { editDocumentStatus, onUpdateValue, formDetails } = this.props;
    return (
      <EditDocument
        submitLabel="Edit Document"
        successMessage="Document edited successfully!"
        submitColor="yellow"
        formDetails={formDetails}
        submitStatus={editDocumentStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getDocumentStatus: selectGetDocumentStatus(),
  editDocumentStatus: selectEditDocumentStatus(),
  formDetails: selectFormDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEditDocument: bindActionCreators(editDocument, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditDocumentContainer);
