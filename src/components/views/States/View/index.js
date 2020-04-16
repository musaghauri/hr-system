import React, { Component } from 'react';
import { Header, Grid, Segment, Button } from 'semantic-ui-react';
import Link from 'next/link';

class ViewState extends Component {
  render() {
    const { state } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <div>
                <Header as="h1">State</Header>
              </div>
              <div>
                <Header as="h3">
                  Name
                  <Header.Subheader>{state.get('name')}</Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Country
                  <Header.Subheader>
                    {state.getIn(['country', 'name'])}
                  </Header.Subheader>
                </Header>
              </div>
              <Link href="/states">
                <a>Back to States</a>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ViewState;
