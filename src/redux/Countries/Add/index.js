import React, { Component } from 'react';
import AddCountry from '@components/views/Countries/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, addCountry, updateValue } from './actions';
import { selectFormDetails, selectAddCountryStatus } from './selectors';

class AddCountryContainer extends Component {
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
    const { onAddCountry } = this.props;
    const userData = submitFormData(formDetails);
    onAddCountry(userData);
  };

  render() {
    const { addCountryStatus, onUpdateValue, formDetails } = this.props;
    return (
      <AddCountry
        submitLabel="Add Country"
        successMessage="Country added successfully!"
        submitColor="green"
        formDetails={formDetails}
        submitStatus={addCountryStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addCountryStatus: selectAddCountryStatus(),
  formDetails: selectFormDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddCountry: bindActionCreators(addCountry, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCountryContainer);
