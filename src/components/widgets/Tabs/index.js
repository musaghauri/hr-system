import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';

class Tabs extends Component {
  render() {
    const { tabs, ...props } = this.props;
    const panes = tabs.map(tab => ({
      menuItem: tab.menuItem,
      render: () => <Tab.Pane>{tab.tab}</Tab.Pane>,
    }));

    return <Tab panes={panes} {...props} />;
  }
}

export default Tabs;
