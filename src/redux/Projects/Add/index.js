import React, { Component } from 'react';
import AddProject from '@components/views/Projects/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, addProject, updateValue } from './actions';
import { 
  selectFormDetails, 
  selectAddProjectStatus, 
  selectEmployees,
  selectGetEmployeesStatus 
} from './selectors';

class AddProjectContainer extends Component {
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
    const { onAddProject } = this.props;
    const projectData = submitFormData(formDetails);
    onAddProject(projectData);
  };

  render() {
    const { 
      addProjectStatus, 
      onUpdateValue, 
      formDetails, 
      employees,
      getEmployeesStatus
    } = this.props;
    return (
      <AddProject
        submitLabel="Add Project"
        successMessage="Project added successfully!"
        submitColor="green"
        formDetails={formDetails}
        employees={employees}
        getEmployeesStatus={getEmployeesStatus}
        submitStatus={addProjectStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addProjectStatus: selectAddProjectStatus(),
  formDetails: selectFormDetails(),
  employees: selectEmployees(),
  getEmployeesStatus: selectGetEmployeesStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddProject: bindActionCreators(addProject, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProjectContainer);
