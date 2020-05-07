import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react';
import Link from 'next/link';

class Salary extends Component {
  render() {
    const { info } = this.props;
    return (
      <Grid columns={4}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <div>
              <Header as="h3">
                Payment Mode
                <Header.Subheader>
                  {info && info.get('paymentMode')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Ex-Gratia
                <Header.Subheader>
                  {info && info.get('exGratiaOnOvertime')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Gratuity
                <Header.Subheader>
                  {info && info.get('gratuity')}
                </Header.Subheader>
              </Header>
            </div>
            <div>
              <Header as="h3">
                Bank Details
                <Header.Subheader>
                  {info && info.get('bankDetails')}
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

export default Salary;
