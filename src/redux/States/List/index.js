import React, { Component } from 'react';
import StatesList from '@components/views/States/List';
import Router from 'next/router';
import { Icon, Header, Label } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer, deleteState } from './actions';
import {
  selectHeadings,
  selectStates,
  selectGetStatesStatus,
  selectDeleteStateStatus,
} from './selectors';

class StatesListContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  deleteState = (id, index) => {
    const { onDeleteState } = this.props;
    onDeleteState(id, index);
  };

  makeRows = states => {
    const { headings } = this.props;
    return states.toArray().map((state, eIndex) =>
      headings.toArray().map(heading => {
        if (heading.get('name') === 'edit') {
          return {
            value: <Icon name="edit" color="yellow" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/state/[stateId]/edit',
                `/state/${state.get('_id')}/edit`
              ),
          };
        }
        if (heading.get('name') === 'view') {
          return {
            value: <Icon name="eye" color="blue" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace('/state/[stateId]', `/state/${state.get('_id')}`),
          };
        }
        if (heading.get('name') === 'block') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () => this.deleteState(state.get('_id'), eIndex),
          };
        }
        if (heading.get('name') === 'country') {
          return {
            value: state.getIn([heading.get('name'), 'name']),
            isFunctional: false,
          };
        }
        return {
          value: state.get(heading.get('name')),
          isFunctional: false,
        };
      })
    );
  };

  render() {
    const { headings, states, deleteStateStatus } = this.props;
    const rows = this.makeRows(states.get('items'));
    if (deleteStateStatus.get('loading'))
      return (
        <Header as="h1" textAlign="center">
          Loading ...
        </Header>
      );
    return <StatesList headings={headings} states={rows} />;
  }
}
const mapStateToProps = createStructuredSelector({
  headings: selectHeadings(),
  states: selectStates(),
  getStatesStatus: selectGetStatesStatus(),
  deleteStateStatus: selectDeleteStateStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onDeleteState: bindActionCreators(deleteState, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatesListContainer);
