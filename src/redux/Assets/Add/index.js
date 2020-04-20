import React, { Component } from 'react';
import AssetForm from '@components/views/Assets/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, addAsset, updateValue } from './actions';
import { selectFormDetails, selectAddAssetStatus } from './selectors';

class AddAssetContainer extends Component {
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
    const { onAddAsset } = this.props;
    const userData = submitFormData(formDetails);
    onAddAsset(userData);
  };

  render() {
    const { addAssetStatus, onUpdateValue, formDetails } = this.props;
    return (
      <AssetForm
        submitLabel="Add Asset"
        successMessage="Asset added successfully!"
        submitColor="green"
        formDetails={formDetails}
        submitStatus={addAssetStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addAssetStatus: selectAddAssetStatus(),
  formDetails: selectFormDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddAsset: bindActionCreators(addAsset, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAssetContainer);
