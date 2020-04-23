import React, { Component } from 'react';
import { Header, Grid, Segment, Button } from 'semantic-ui-react';
import Link from 'next/link';

class ViewDepartment extends Component {
  render() {
    const { department } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <div>
                <Header as="h1">Department</Header>
              </div>
              <div>
                <Header as="h3">
                  Name
                  <Header.Subheader>{department.get('name')}</Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Company Name
                  <Header.Subheader>{department.get('company')}</Header.Subheader>
                </Header>
              </div>
              <Link href="/departments">
                <a>Back to Departments</a>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ViewDepartment;
