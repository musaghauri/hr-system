import React, { Component } from 'react';
import { Header, Grid, Segment, Button } from 'semantic-ui-react';
import Link from 'next/link';

class ViewPriority extends Component {
  render() {
    const { priority } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <div>
                <Header as="h1">Priority</Header>
              </div>
              <div>
                <Header as="h3">
                  Name
                  <Header.Subheader>{priority.get('name')}</Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Description
                  <Header.Subheader>
                    {priority.get('description')}
                  </Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Colour
                  <Header.Subheader>
                    {priority.get('colour')}
                  </Header.Subheader>
                </Header>
              </div>
              <Link href="/priorities">
                <a>Back to Priorities</a>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ViewPriority;
