import React, { Component } from 'react';
import EditAsset from '@components/views/Assets/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, editAsset, updateValue } from './actions';
import {
  selectFormDetails,
  selectEditAssetStatus,
  selectGetAssetStatus,
} from './selectors';

class EditAssetContainer extends Component {
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
    const { onEditAsset, query } = this.props;
    const { assetId } = query;
    const assetData = submitFormData(formDetails);
    onEditAsset(assetData, assetId);
  };

  render() {
    const { editAssetStatus, onUpdateValue, formDetails } = this.props;
    return (
      <EditAsset
        submitLabel="Edit Asset"
        successMessage="Asset edited successfully!"
        submitColor="yellow"
        formDetails={formDetails}
        submitStatus={editAssetStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getAssetStatus: selectGetAssetStatus(),
  editAssetStatus: selectEditAssetStatus(),
  formDetails: selectFormDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEditAsset: bindActionCreators(editAsset, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAssetContainer);
