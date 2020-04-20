import React, { Component } from 'react';
import AddPriorityContainer from '@redux/Priorities/Add';
import { withAuthSync } from '@utils/auth';

class AddPriority extends Component {
  render() {
    return <AddPriorityContainer />;
  }
}

export default withAuthSync(AddPriority);
