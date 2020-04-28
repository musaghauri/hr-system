import React, { Component } from 'react';
import AddState from '@components/views/States/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, addState, updateValue } from './actions';
import {
  selectFormDetails,
  selectAddStateStatus,
  selectCountries,
  selectGetCountriesStatus,
} from './selectors';

class AddStateContainer extends Component {
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
    const { onAddState } = this.props;
    const userData = submitFormData(formDetails);
    onAddState(userData);
  };

  render() {
    const {
      addStateStatus,
      countries,
      onUpdateValue,
      formDetails,
    } = this.props;
    return (
      <AddState
        submitLabel="Add State"
        successMessage="State added successfully!"
        submitColor="green"
        formDetails={formDetails}
        submitStatus={addStateStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
        countries={countries}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addStateStatus: selectAddStateStatus(),
  formDetails: selectFormDetails(),
  countries: selectCountries(),
  getCountriesStatus: selectGetCountriesStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddState: bindActionCreators(addState, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStateContainer);
