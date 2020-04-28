import React, { Component } from 'react';
import DepartmentsList from '@components/views/Departments/List';
import Router from 'next/router';
import { Icon, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer, deleteDepartment } from './actions';
import {
  selectHeadings,
  selectDepartments,
  selectGetDepartmentsStatus,
  selectDeleteDepartmentStatus,
} from './selectors';

class DepartmentsListContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  deleteDepartment = (id, index) => {
    const { onDeleteDepartment } = this.props;
    onDeleteDepartment(id, index);
  };

  makeRows = departments => {
    const { headings } = this.props;
    return departments.toArray().map((department, eIndex) =>
      headings.toArray().map(heading => {
        if (heading.get('name') === 'edit') {
          return {
            value: <Icon name="edit" color="yellow" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/department/[departmentId]/edit',
                `/department/${department.get('_id')}/edit`
              ),
          };
        }
        if (heading.get('name') === 'view') {
          return {
            value: <Icon name="eye" color="blue" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/department/[departmentId]',
                `/department/${department.get('_id')}`
              ),
          };
        }
        if (heading.get('name') === 'delete') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () =>
              this.deleteDepartment(department.get('_id'), eIndex),
          };
        }
        return {
          value: department.get(heading.get('name')),
          isFunctional: false,
        };
      })
    );
  };

  render() {
    const { headings, departments, deleteDepartmentStatus } = this.props;
    const rows = this.makeRows(departments.get('items'));
    if (deleteDepartmentStatus.get('loading'))
      return (
        <Header as="h1" textAlign="center">
          Loading ...
        </Header>
      );
    return <DepartmentsList headings={headings} departments={rows} />;
  }
}
const mapStateToProps = createStructuredSelector({
  headings: selectHeadings(),
  departments: selectDepartments(),
  getDepartmentsStatus: selectGetDepartmentsStatus(),
  deleteDepartmentStatus: selectDeleteDepartmentStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onDeleteDepartment: bindActionCreators(deleteDepartment, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentsListContainer);
