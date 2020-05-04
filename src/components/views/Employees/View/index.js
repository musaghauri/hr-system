import React, { Component } from 'react';
import { Header, Grid, Segment, Tab } from 'semantic-ui-react';
import Link from 'next/link';

class ViewEmployee extends Component {
  render() {
    
const panes = [
  // { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  // { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  // { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]
    const { employee } = this.props;
    // employee.toArray().map(tabHeading =>{
    //   // console.log({tabHeading})
    // })
    // let panes = [];
    Object.keys(employee.toJS()).map(key=> {
        panes.push(
            { 
              menuItem:key,
              render : () =>
                <Tab.Pane>
                  {
                    Object.keys(employee[key]).map(subHeading=> <h1>{subHeading}</h1> ) 
                  }
                </Tab.Pane>
            }
        )
    });
    console.log(panes);
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <div>
                <Header as="h1">Employee</Header>
              </div>
              <div>
                <Header as="h3">
                  Name
                  <Header.Subheader>{employee.get('name')}</Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Email
                  <Header.Subheader>
                    {employee.get('email')}
                  </Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Role
                  <Header.Subheader>
                    {employee.getIn(['role', 'name'])}
                  </Header.Subheader>
                </Header>
              </div>
              <Link href="/employees">
                <a>Back to Employees</a>
              </Link>
            </Segment>
            {/* <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ViewEmployee;
