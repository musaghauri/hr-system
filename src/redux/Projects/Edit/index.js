import React, { Component } from 'react';
import EditProject from '@components/views/Projects/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, editProject, updateValue } from './actions';
import {
  selectFormDetails,
  selectEditProjectStatus,
  selectGetProjectStatus,
  selectEmployees,
  selectGetEmployeesStatus
} from './selectors';

class EditProjectContainer extends Component {
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
    const { onEditProject, query } = this.props;
    const { projectId } = query;
    const projectData = submitFormData(formDetails);
    onEditProject(projectData, projectId);
  };

  render() {
    const { 
      editProjectStatus, 
      onUpdateValue, 
      formDetails,
      employees,
      getEmployeesStatus
    } = this.props;
    return (
      <EditProject
        submitLabel="Edit Project"
        successMessage="Project edited successfully!"
        submitColor="yellow"
        formDetails={formDetails}
        employees={employees}
        getEmployeesStatus={getEmployeesStatus}
        submitStatus={editProjectStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getProjectStatus: selectGetProjectStatus(),
  editProjectStatus: selectEditProjectStatus(),
  formDetails: selectFormDetails(),
  employees: selectEmployees(),
  getEmployeesStatus: selectGetEmployeesStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEditProject: bindActionCreators(editProject, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProjectContainer);
