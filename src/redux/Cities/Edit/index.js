import React, { Component } from 'react';
import EditCity from '@components/views/Cities/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, editCity, updateValue, getStates } from './actions';
import {
  selectFormDetails,
  selectEditCityStatus,
  selectGetCityStatus,
  selectCountries,
  selectStates,
  selectGetCountriesStatus,
  selectGetStatesStatus,
} from './selectors';

class EditCityContainer extends Component {
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
    const { onEditCity, query } = this.props;
    const { cityId } = query;
    const userData = submitFormData(formDetails);
    onEditCity(userData, cityId);
  };

  render() {
    const {
      editCityStatus,
      countries,
      states,
      onUpdateValue,
      formDetails,
      getCountriesStatus,
      getStatesStatus,
      onGetStates,
    } = this.props;
    return (
      <EditCity
        submitLabel="Edit City"
        successMessage="City edited successfully!"
        submitColor="yellow"
        getStates={onGetStates}
        formDetails={formDetails}
        submitStatus={editCityStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
        countries={countries}
        states={states}
        getCountriesStatus={getCountriesStatus}
        getStatesStatus={getStatesStatus}
      />
    );
  }
}

const mapCityToProps = createStructuredSelector({
  getCityStatus: selectGetCityStatus(),
  editCityStatus: selectEditCityStatus(),
  formDetails: selectFormDetails(),
  countries: selectCountries(),
  states: selectStates(),
  getCountriesStatus: selectGetCountriesStatus(),
  getStatesStatus: selectGetStatesStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEditCity: bindActionCreators(editCity, dispatch),
    onGetStates: bindActionCreators(getStates, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(mapCityToProps, mapDispatchToProps)(EditCityContainer);
