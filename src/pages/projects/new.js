import React, { Component } from 'react';
import AddProjectContainer from '@redux/Projects/Add';
import { withAuthSync } from '@utils/auth';

class AddProject extends Component {
  render() {
    return <AddProjectContainer />;
  }
}

export default withAuthSync(AddProject);
