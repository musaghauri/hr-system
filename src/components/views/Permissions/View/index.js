import React, { Component } from 'react';
import { Header, Grid, Segment, Button } from 'semantic-ui-react';
import Link from 'next/link';

class ViewPermission extends Component {
  render() {
    const { permission } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <div>
                <Header as="h1">Permission</Header>
              </div>
              <div>
                <Header as="h3">
                  Name
                  <Header.Subheader>{permission.get('name')}</Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Description
                  <Header.Subheader>
                    {permission.get('description')}
                  </Header.Subheader>
                </Header>
              </div>
              <Link href="/permissions">
                <a>Back to Permissions</a>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ViewPermission;
