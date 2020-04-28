import React, { Component } from 'react';
import { Header, Grid, Segment, Button } from 'semantic-ui-react';
import Link from 'next/link';

class ViewCountry extends Component {
  render() {
    const { country } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <div>
                <Header as="h1">Country</Header>
              </div>
              <div>
                <Header as="h3">
                  Name
                  <Header.Subheader>{country.get('name')}</Header.Subheader>
                </Header>
              </div>
              <Link href="/countries">
                <a>Back to Countries</a>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ViewCountry;
