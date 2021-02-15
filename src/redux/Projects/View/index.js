import React, { Component } from 'react';
import ViewProject from '@components/views/Projects/View';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer } from './actions';
import { selectProject, selectGetProjectStatus } from './selectors';

class ViewProjectContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  render() {
    const { project } = this.props;
    return <ViewProject project={project} />;
  }
}
const mapStateToProps = createStructuredSelector({
  project: selectProject(),
  getProjectStatus: selectGetProjectStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewProjectContainer);
