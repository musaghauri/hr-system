import React, { Component } from 'react';
import BranchesList from '@components/views/Branches/List';
import Router from 'next/router';
import { Icon, Header, Label } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer, deleteBranch } from './actions';
import {
  selectHeadings,
  selectBranches,
  selectGetBranchesStatus,
  selectDeleteBranchStatus,
} from './selectors';

class BranchesListContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  deleteBranch = (id, index) => {
    const { onDeleteBranch } = this.props;
    onDeleteBranch(id, index);
  };

  makeRows = branches => {
    const { headings } = this.props;
    return branches.toArray().map((branch, eIndex) =>
      headings.toArray().map(heading => {
        if (heading.get('name') === 'city') {
          return {
            value: branch.getIn(['city','name']),
            isFunctional: false,
          };
        }
        if (heading.get('name') === 'departments') {
          return {
            value: branch
            .get(heading.get('name'))
            .toArray()
            .map(department => (
              <Label color="green" horizontal>
                {department.get('name')}
              </Label>
            )),
            isFunctional: false,
          };
        }
        if (heading.get('name') === 'edit') {
          return {
            value: <Icon name="edit" color="yellow" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/branch/[branchId]/edit',
                `/branch/${branch.get('_id')}/edit`
              ),
          };
        }
        if (heading.get('name') === 'view') {
          return {
            value: <Icon name="eye" color="blue" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/branch/[branchId]',
                `/branch/${branch.get('_id')}`
              ),
          };
        }
        if (heading.get('name') === 'delete') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () =>
              this.deleteBranch(branch.get('_id'), eIndex),
          };
        }
        return {
          value: branch.get(heading.get('name')),
          isFunctional: false,
        };
      })
    );
  };

  render() {
    const { headings, branches, deleteBranchStatus } = this.props;
    const rows = this.makeRows(branches.get('items'));
    if (deleteBranchStatus.get('loading'))
      return (
        <Header as="h1" textAlign="center">
          Loading ...
        </Header>
      );
    return <BranchesList headings={headings} branches={rows} />;
  }
}
const mapStateToProps = createStructuredSelector({
  headings: selectHeadings(),
  branches: selectBranches(),
  getBranchesStatus: selectGetBranchesStatus(),
  deleteBranchStatus: selectDeleteBranchStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onDeleteBranch: bindActionCreators(deleteBranch, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BranchesListContainer);