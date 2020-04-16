import React, { Component } from 'react';
import EditState from '@components/views/States/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, editState, updateValue } from './actions';
import {
  selectFormDetails,
  selectEditStateStatus,
  selectGetStateStatus,
  selectCountries,
  selectGetCountriesStatus,
} from './selectors';

class EditStateContainer extends Component {
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
    const { onEditState, query } = this.props;
    const { stateId } = query;
    const userData = submitFormData(formDetails);
    onEditState(userData, stateId);
  };

  render() {
    const {
      editStateStatus,
      countries,
      onUpdateValue,
      formDetails,
    } = this.props;
    return (
      <EditState
        submitLabel="Edit State"
        successMessage="State edited successfully!"
        submitColor="yellow"
        formDetails={formDetails}
        submitStatus={editStateStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
        countries={countries}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getStateStatus: selectGetStateStatus(),
  editStateStatus: selectEditStateStatus(),
  formDetails: selectFormDetails(),
  countries: selectCountries(),
  getCountriesStatus: selectGetCountriesStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEditState: bindActionCreators(editState, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStateContainer);
