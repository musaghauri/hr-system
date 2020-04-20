import React, { Component } from 'react';
import { Header, Grid, Segment, Button } from 'semantic-ui-react';
import Link from 'next/link';

class ViewCity extends Component {
  render() {
    const { city } = this.props;
    console.log({ city: city.toJS() });
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <div>
                <Header as="h1">City</Header>
              </div>
              <div>
                <Header as="h3">
                  Name
                  <Header.Subheader>{city.get('name')}</Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  State
                  <Header.Subheader>
                    {city.getIn(['state', 'name'])}
                  </Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Country
                  <Header.Subheader>
                    {city.getIn(['state', 'country', 'name'])}
                  </Header.Subheader>
                </Header>
              </div>
              <Link href="/cities">
                <a>Back to Cities</a>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ViewCity;
