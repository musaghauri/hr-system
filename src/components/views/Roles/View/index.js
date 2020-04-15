import React, { Component } from 'react';
import { Header, Grid, Segment, Button } from 'semantic-ui-react';
import Link from 'next/link';

class ViewRole extends Component {
  render() {
    const { role } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <div>
                <Header as="h1">Role</Header>
              </div>
              <div>
                <Header as="h3">
                  Name
                  <Header.Subheader>{role.get('name')}</Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Description
                  <Header.Subheader>{role.get('description')}</Header.Subheader>
                </Header>
              </div>
              <Link href="/roles">
                <a>Back to Roles</a>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ViewRole;
