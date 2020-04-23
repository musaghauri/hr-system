import React, { Component } from 'react';
import PrioritiesList from '@components/views/Priorities/List';
import Router from 'next/router';
import { Icon, Header, Label } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer, deletePriority } from './actions';
import {
  selectHeadings,
  selectPriorities,
  selectGetPrioritiesStatus,
  selectDeletePriorityStatus,
} from './selectors';

class PrioritiesListContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  deletePriority = (id, index) => {
    const { onDeletePriority } = this.props;
    onDeletePriority(id, index);
  };

  makeRows = priorities => {
    const { headings } = this.props;
    return priorities.toArray().map((priority, eIndex) =>
      headings.toArray().map(heading => {
        if (heading.get('name') === 'edit') {
          return {
            value: <Icon name="edit" color="yellow" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/priority/[priorityId]/edit',
                `/priority/${priority.get('_id')}/edit`
              ),
          };
        }
        if (heading.get('name') === 'view') {
          return {
            value: <Icon name="eye" color="blue" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/priority/[priorityId]',
                `/priority/${priority.get('_id')}`
              ),
          };
        }
        if (heading.get('name') === 'delete') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () =>
              this.deletePriority(priority.get('_id'), eIndex),
          };
        }
        if (heading.get('name') === 'colour') {
          return {
            value: <Label style={{ "backgroundColor" : `${priority.get('colour')}` }}>{priority.get('colour')}</Label>,
            isFunctional: true,
          };
        }
        return {
          value: priority.get(heading.get('name')),
          isFunctional: false,
        };
      })
    );
  };

  render() {
    const { headings, priorities, deletePriorityStatus } = this.props;
    const rows = this.makeRows(priorities.get('items'));
    if (deletePriorityStatus.get('loading'))
      return (
        <Header as="h1" textAlign="center">
          Loading ...
        </Header>
      );
    return <PrioritiesList headings={headings} priorities={rows} />;
  }
}
const mapStateToProps = createStructuredSelector({
  headings: selectHeadings(),
  priorities: selectPriorities(),
  getPrioritiesStatus: selectGetPrioritiesStatus(),
  deletePriorityStatus: selectDeletePriorityStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onDeletePriority: bindActionCreators(deletePriority, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrioritiesListContainer);
