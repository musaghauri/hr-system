import React, { Component } from 'react';
import EditCountry from '@components/views/Countries/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, editCountry, updateValue } from './actions';
import {
  selectFormDetails,
  selectEditCountryStatus,
  selectGetCountryStatus,
} from './selectors';

class EditCountryContainer extends Component {
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
    const { onEditCountry, query } = this.props;
    const { countryId } = query;
    const userData = submitFormData(formDetails);
    onEditCountry(userData, countryId);
  };

  render() {
    const { editCountryStatus, onUpdateValue, formDetails } = this.props;
    return (
      <EditCountry
        submitLabel="Edit Country"
        successMessage="Country edited successfully!"
        submitColor="yellow"
        formDetails={formDetails}
        submitStatus={editCountryStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getCountryStatus: selectGetCountryStatus(),
  editCountryStatus: selectEditCountryStatus(),
  formDetails: selectFormDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEditCountry: bindActionCreators(editCountry, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCountryContainer);
