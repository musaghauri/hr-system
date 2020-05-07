import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import Personal from './Personal';
import Official from './Official';
import Contact from './Contact';
import Salary from './Salary';
import Academic from './Academic';
import Experience from './Experience';
import Dependent from './Dependent';
import Asset from './Asset';
import Duty from './Duty';

class ViewEmployee extends Component {
  render() {
    const { employee } = this.props;
    const panes = [
      {
        menuItem: 'Personal Information',
        render: () => (
          <Tab.Pane>
            <Personal employee={employee} />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Official Information',
        render: () => (
          <Tab.Pane>
            <Official info={employee.get('officialInformation')} />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Contact Information',
        render: () => (
          <Tab.Pane>
            <Contact info={employee.get('contactInformation')} />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Salary Settings',
        render: () => (
          <Tab.Pane>
            <Salary info={employee.get('salarySettings')} />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Academics',
        render: () => (
          <Tab.Pane>
            <Academic info={employee.get('academics')} />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Experience',
        render: () => (
          <Tab.Pane>
            <Experience info={employee.get('experience')} />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Dependents',
        render: () => (
          <Tab.Pane>
            <Dependent info={employee.get('dependents')} />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Assets',
        render: () => (
          <Tab.Pane>
            <Asset info={employee.get('companyAssets')} />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Duties',
        render: () => (
          <Tab.Pane>
            <Duty info={employee.get('duties')} />
          </Tab.Pane>
        ),
      },
    ];
    return (
      <Tab
        menu={{ fluid: true, vertical: true, tabular: true }}
        panes={panes}
      />
    );
  }
}

export default ViewEmployee;
