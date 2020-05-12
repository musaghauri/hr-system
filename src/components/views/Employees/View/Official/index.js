import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react';
import Link from 'next/link';
import { formatDate } from '@utils/date';

class Official extends Component {
  render() {
    const { info } = this.props;
    return (
      <Grid columns={4}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <div>
              <Header as="h3">
                Employee Id
                <Header.Subheader>
                  {info && info.get('employeeId')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Employee Status
                <Header.Subheader>
                  {info && info.get('employeeStatus')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Designation
                <Header.Subheader>
                  {info && info.get('designation')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Social Security
                <Header.Subheader>
                  {info && info.get('socialSecurity')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Health Benefits
                <Header.Subheader>
                  {info && info.get('healthBenefits')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Provident Fund
                <Header.Subheader>
                  {info && info.get('providentFund')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Department
                <Header.Subheader>
                  {info && info.getIn(['department', 'name'])}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Joining Date
                <Header.Subheader>
                  {info ? formatDate(info.get('joiningDate')) : 'N/A'}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Resignation Date
                <Header.Subheader>
                  {info ? formatDate(info.get('resignationDate')) : 'N/A'}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Exit Date
                <Header.Subheader>
                  {info ? formatDate(info.get('exitDate')) : 'N/A'}
                </Header.Subheader>
              </Header>
            </div>
            <Link href="/employees">
              <a>Back to Employees</a>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Official;
