import React, { Component } from 'react';
import EditForm from '@components/views/Employees/Form';

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
  editEmployee
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
  selectEditEmployeeStatus
} from './selectors';

class EditEmployeeContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }
  validateForm = formData => validateFormData(formData);

  submitForm = formDetails => {
    const { onEditEmployee, query } = this.props;
    const { employeeId } = query;
    const employeeData = submitFormData(formDetails);
    console.log('final',employeeData);
    onEditEmployee(employeeData, employeeId);
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
      editEmployeeStatus
     } = this.props;
    return (
      <EditForm 
        submitLabel="Edit Employee"
        successMessage="Employee edited successfully!"
        formDetails={formDetails}
        updateValue={onUpdateValue}
        addAnotherEntry={onAddAnotherEntry}
        getStates={onGetStates}
        getCities={onGetCities}
        roles={roles}
        countries={countries}
        states={states}
        cities={cities}
        departments={departments}
        assets={assets}
        submitColor="yellow"
        getRolesStatus={getRolesStatus}
        getCountriesStatus={getCountriesStatus}
        getStatesStatus={getStatesStatus}
        getCitiesStatus={getCitiesStatus}
        getDepartmentsStatus={getDepartmentsStatus}
        getAssetsStatus={getAssetsStatus}
        submitStatus={editEmployeeStatus}
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
  editEmployeeStatus: selectEditEmployeeStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onAddAnotherEntry: bindActionCreators(addAnotherEntry, dispatch),
    onGetStates: bindActionCreators(getStates, dispatch),
    onGetCities: bindActionCreators(getCities, dispatch),
    onEditEmployee: bindActionCreators(editEmployee, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEmployeeContainer);
