import React, { Component } from 'react';
import { Header, Grid, Segment, Label } from 'semantic-ui-react';
import Link from 'next/link';

class ViewBranch extends Component {
  render() {
    const { branch } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <div>
                <Header as="h1">Branch</Header>
              </div>
              <div>
                <Header as="h3">
                  City
                  <Header.Subheader>{branch.getIn(['city','name'])}</Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Address
                  <Header.Subheader>
                    {branch.get('address')}
                  </Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Contact
                  <Header.Subheader>
                    {branch.getIn(['contact', 'landline'])}
                  </Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Departments
                  <Header.Subheader>
                    {
                      branch.get('departments') && branch.get('departments')
                      .toArray()
                      .map(department => (
                        <Label color="green" horizontal>
                          {department.get('name')}
                        </Label>
                      ))
                    }
                  </Header.Subheader>
                </Header>
              </div>
              <Link href="/branches">
                <a>Back to Branches</a>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ViewBranch;
