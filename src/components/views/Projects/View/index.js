import React, { Component } from 'react';
import { Header, Grid, Segment, Label } from 'semantic-ui-react';
import Link from 'next/link';

class ViewProject extends Component {
  render() {
    const { project } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <div>
                <Header as="h1">Project</Header>
              </div>
              <div>
                <Header as="h3">
                  Id
                  <Header.Subheader>{project.get('_id')}</Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Name
                  <Header.Subheader>{project.get('name')}</Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Employees
                  <Header.Subheader>
                    {
                      project.get('employees') && 
                      project.get('employees')
                        .toArray()
                        .map(employee => (
                        <Label color="green" horizontal>
                          {employee.get('name')}
                        </Label>))
                    }
                  </Header.Subheader>
                </Header>
              </div>
              <Link href="/projects">
                <a>Back to Projects</a>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ViewProject;
