import React, { Component } from 'react';
import ProjectsList from '@components/views/Projects/List';
import Router from 'next/router';
import { Icon, Header, Label } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer, deleteProject } from './actions';
import {
  selectHeadings,
  selectProjects,
  selectGetProjectsStatus,
  selectDeleteProjectStatus,
} from './selectors';

class ProjectsListContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  deleteProject = (id, index) => {
    const { onDeleteProject } = this.props;
    onDeleteProject(id, index);
  };

  makeRows = projects => {
    const { headings } = this.props;
    return projects.toArray().map((project, eIndex) =>
      headings.toArray().map(heading => {
        if (heading.get('name') === 'edit') {
          return {
            value: <Icon name="edit" color="yellow" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/project/[projectId]/edit',
                `/project/${project.get('_id')}/edit`
              ),
          };
        }
        if (heading.get('name') === 'view') {
          return {
            value: <Icon name="eye" color="blue" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/project/[projectId]',
                `/project/${project.get('_id')}`
              ),
          };
        }
        if (heading.get('name') === 'delete') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () =>
              this.deleteProject(project.get('_id'), eIndex),
          };
        }
        if (heading.get('name') === 'employees') {
          return {
            value: project
              .get(heading.get('name'))
              .toArray()
              .map(employee => (
                <Label color="green" horizontal>
                  {employee.get('name')}
                </Label>
              )),
            isFunctional: false,
          };
        }
        return {
          value: project.get(heading.get('name')),
          isFunctional: false,
        };
      })
    );
  };

  render() {
    const { headings, projects, deleteProjectStatus } = this.props;
    const rows = this.makeRows(projects.get('items'));
    if (deleteProjectStatus.get('loading'))
      return (
        <Header as="h1" textAlign="center">
          Loading ...
        </Header>
      );
    return <ProjectsList headings={headings} projects={rows} />;
  }
}
const mapStateToProps = createStructuredSelector({
  headings: selectHeadings(),
  projects: selectProjects(),
  getProjectsStatus: selectGetProjectsStatus(),
  deleteProjectStatus: selectDeleteProjectStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onDeleteProject: bindActionCreators(deleteProject, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsListContainer);
