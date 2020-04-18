import React, { Component } from 'react';
import AddCity from '@components/views/Cities/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, addCity, updateValue, getStates } from './actions';
import {
  selectFormDetails,
  selectAddCityStatus,
  selectCountries,
  selectGetCountriesStatus,
  selectStates,
  selectGetStatesStatus,
} from './selectors';

class AddCityContainer extends Component {
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
    const { onAddCity } = this.props;
    const userData = submitFormData(formDetails);
    onAddCity(userData);
  };

  render() {
    const {
      addCityStatus,
      states,
      countries,
      onUpdateValue,
      formDetails,
      getCountriesStatus,
      getStatesStatus,
      onGetStates,
    } = this.props;
    console.log({ states: states.toJS() });
    return (
      <AddCity
        submitLabel="Add City"
        successMessage="City added successfully!"
        submitColor="green"
        getStates={onGetStates}
        formDetails={formDetails}
        submitStatus={addCityStatus}
        getCountriesStatus={getCountriesStatus}
        getStatesStatus={getStatesStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
        countries={countries}
        states={states}
      />
    );
  }
}

const mapCityToProps = createStructuredSelector({
  addCityStatus: selectAddCityStatus(),
  formDetails: selectFormDetails(),
  countries: selectCountries(),
  getCountriesStatus: selectGetCountriesStatus(),
  states: selectStates(),
  getStatesStatus: selectGetStatesStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddCity: bindActionCreators(addCity, dispatch),
    onGetStates: bindActionCreators(getStates, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(mapCityToProps, mapDispatchToProps)(AddCityContainer);
