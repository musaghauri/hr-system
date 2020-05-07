import React, { Component } from 'react';
import AddForm from '@components/views/Employees/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { bindActionCreators } from 'redux';
import {
  resetReducer,
  updateValue,
  addAnotherEntry,
  getStates,
  getCities,
  addEmployee,
  deleteEntry,
} from './actions';
import {
  selectRoles,
  selectGetRolesStatus,
  selectFormDetails,
  selectCountries,
  selectGetCountriesStatus,
  selectStates,
  selectGetStatesStatus,
  selectCities,
  selectGetCitiesStatus,
  selectDepartments,
  selectGetDepartmentsStatus,
  selectAssets,
  selectGetAssetsStatus,
  selectAddEmployeeStatus,
} from './selectors';

class AddEmployeeContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  validateForm = formData => validateFormData(formData);

  submitForm = formDetails => {
    const { onAddEmployee } = this.props;
    const employeeData = submitFormData(formDetails);
    console.log('final', employeeData);
    onAddEmployee(employeeData);
  };

  render() {
    const {
      formDetails,
      onUpdateValue,
      onAddAnotherEntry,
      onGetStates,
      onGetCities,
      roles,
      countries,
      states,
      cities,
      departments,
      assets,
      getRolesStatus,
      getCountriesStatus,
      getCitiesStatus,
      getStatesStatus,
      getDepartmentsStatus,
      getAssetsStatus,
      addEmployeeStatus,
      onDeleteEntry,
    } = this.props;
    return (
      <AddForm
        submitLabel="Create Employee"
        successMessage="Employee added successfully!"
        formDetails={formDetails}
        updateValue={onUpdateValue}
        addAnotherEntry={onAddAnotherEntry}
        getStates={onGetStates}
        getCities={onGetCities}
        deleteEntry={onDeleteEntry}
        roles={roles}
        countries={countries}
        states={states}
        cities={cities}
        departments={departments}
        assets={assets}
        submitColor="green"
        getRolesStatus={getRolesStatus}
        getCountriesStatus={getCountriesStatus}
        getStatesStatus={getStatesStatus}
        getCitiesStatus={getCitiesStatus}
        getDepartmentsStatus={getDepartmentsStatus}
        getAssetsStatus={getAssetsStatus}
        submitStatus={addEmployeeStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
      />
    );
  }
}
const mapStateToProps = createStructuredSelector({
  formDetails: selectFormDetails(),
  roles: selectRoles(),
  countries: selectCountries(),
  states: selectStates(),
  cities: selectCities(),
  departments: selectDepartments(),
  assets: selectAssets(),
  getRolesStatus: selectGetRolesStatus(),
  getCountriesStatus: selectGetCountriesStatus(),
  getStatesStatus: selectGetStatesStatus(),
  getCitiesStatus: selectGetCitiesStatus(),
  getDepartmentsStatus: selectGetDepartmentsStatus(),
  getAssetsStatus: selectGetAssetsStatus(),
  addEmployeeStatus: selectAddEmployeeStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onAddAnotherEntry: bindActionCreators(addAnotherEntry, dispatch),
    onGetStates: bindActionCreators(getStates, dispatch),
    onGetCities: bindActionCreators(getCities, dispatch),
    onAddEmployee: bindActionCreators(addEmployee, dispatch),
    onDeleteEntry: bindActionCreators(deleteEntry, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEmployeeContainer);
