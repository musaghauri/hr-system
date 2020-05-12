import React, { Component } from 'react';
import Tabs from '@components/widgets/Tabs';
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
    const employeeTabs = [
      {
        menuItem: {
          key: 'personal',
          icon: 'users',
          content: 'Personal Information',
        },
        tab: <Personal employee={employee} />,
      },
      {
        menuItem: {
          key: 'official',
          icon: 'users',
          content: 'Official Information',
        },
        tab: <Official info={employee.get('officialInformation')} />,
      },
      {
        menuItem: {
          key: 'contact',
          icon: 'users',
          content: 'Contact Information',
        },
        tab: <Contact info={employee.get('contactInformation')} />,
      },
      {
        menuItem: {
          key: 'salary',
          icon: 'users',
          content: 'Salary Information',
        },
        tab: <Salary info={employee.get('salarySettings')} />,
      },
      {
        menuItem: { key: 'academics', icon: 'users', content: 'Academics' },
        tab: <Academic info={employee.get('academics')} />,
      },
      {
        menuItem: { key: 'experience', icon: 'users', content: 'Experience' },
        tab: <Experience info={employee.get('experience')} />,
      },
      {
        menuItem: { key: 'dependent', icon: 'users', content: 'Dependents' },
        tab: <Dependent info={employee.get('dependents')} />,
      },
      {
        menuItem: { key: 'asset', icon: 'users', content: 'Assets' },
        tab: <Asset info={employee.get('companyAssets')} />,
      },
      {
        menuItem: { key: 'duty', icon: 'users', content: 'Duties' },
        tab: <Duty info={employee.get('duties')} />,
      },
    ];

    return (
      <Tabs
        menu={{ fluid: true, vertical: true, tabular: true }}
        tabs={employeeTabs}
      />
    );
  }
}

export default ViewEmployee;
