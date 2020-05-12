import React, { Component } from 'react';
import { Header, Grid, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import { formatDate } from '@utils/date';

class Personal extends Component {
  render() {
    const { employee } = this.props;
    const info = employee.get('personalInformation');
    return (
      <Grid columns={4}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <div>
              <Header as="h3">
                Name
                <Header.Subheader>
                  {employee && employee.get('name')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Father Name
                <Header.Subheader>
                  {info && info.get('fatherName')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Role
                <Header.Subheader>
                  {employee && employee.getIn(['role', 'name'])}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Email
                <Header.Subheader>
                  {employee && employee.get('email')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Active
                <Header.Subheader>
                  {employee && employee.get('isActive') ? (
                    <Icon name="check" color="green" />
                  ) : (
                    <Icon name="times" color="red" />
                  )}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Verified
                <Header.Subheader>
                  {employee && employee.get('isVerified') ? (
                    <Icon name="check" color="green" />
                  ) : (
                    <Icon name="times" color="red" />
                  )}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Company Email
                <Header.Subheader>
                  {info && info.get('companyEmail')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Date Of Birth
                <Header.Subheader>
                  {info && formatDate(info.get('dateOfBirth'))}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Gender
                <Header.Subheader>
                  {info && info.get('gender')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Nationality
                <Header.Subheader>
                  {info && info.getIn(['nationality', 'name'])}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Country
                <Header.Subheader>
                  {info && info.getIn(['city', 'state', 'country', 'name'])}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                State
                <Header.Subheader>
                  {info && info.getIn(['city', 'state', 'name'])}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                City
                <Header.Subheader>
                  {info && info.getIn(['city', 'name'])}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Religion
                <Header.Subheader>
                  {info && info.get('religion')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Marital Status
                <Header.Subheader>
                  {info && info.get('maritalStatus')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Blood Group
                <Header.Subheader>
                  {info && info.get('bloodGroup')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Disability
                <Header.Subheader>
                  {info && info.get('disability')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                CNIC
                <Header.Subheader>{info && info.get('cnic')}</Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                NTN
                <Header.Subheader>{info && info.get('ntn')}</Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Domicile
                <Header.Subheader>
                  {info && info.getIn(['domicile', 'name'])}
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

export default Personal;
