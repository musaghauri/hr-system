import React, { Component } from 'react';
import Link from 'next/link';
import {
  Button,
  Form,
  Message,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';
import _assign from 'lodash/assign';

class ProjectForm extends Component {
  handleChange = (e, { name, value }) => {
    const { updateValue } = this.props;
    updateValue(['formDetails', name, 'value'], value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { validateForm, updateValue, handleSubmit } = this.props;
    const { formDetails } = this.props;
    const modifiedUser = formDetails.toJS();
    const result = validateForm(modifiedUser);
    const newFormDetails = _assign(modifiedUser, result.updatedFormData);
    updateValue(['formDetails'], newFormDetails);
    if (result.validateFlag) {
      handleSubmit(newFormDetails);
    }
  };

  render() {
    const {
      formDetails,
      submitStatus,
      submitLabel,
      successMessage,
      submitColor,
      employees
    } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <Header textAlign="center" as="h3">
                Project
              </Header>
              {submitStatus.get('error') && (
                <Message negative floating>
                  {submitStatus.get('error')}
                </Message>
              )}
              {submitStatus.get('loaded') && (
                <Message success>{successMessage}</Message>
              )}
              <Form onSubmit={this.handleSubmit} stacked="true">
                <Form.Input
                  fluid
                  label={formDetails.getIn(['name', 'label'])}
                  name={formDetails.getIn(['name', 'name'])}
                  value={formDetails.getIn(['name', 'value'])}
                  placeholder={formDetails.getIn(['name', 'placeholder'])}
                  error={
                    !formDetails.getIn(['name', 'status'])
                      ? formDetails.getIn(['name', 'errorText'])
                      : false
                  }
                  onChange={this.handleChange}
                />
                <Form.Select
                  options={employees.toJS()}
                  placeholder={formDetails.getIn([
                    'employees',
                    'placeholder',
                  ])}
                  search
                  selection
                  fluid
                  multiple
                  name={formDetails.getIn(['employees', 'name'])}
                  value={formDetails.getIn(['employees', 'value']).toJS()}
                  onChange={this.handleChange}
                />
                <Link href="/projects">
                  <a>Back to Projects</a>
                </Link>
                <Button
                  loading={submitStatus.get('loading')}
                  fluid
                  color={submitColor}
                  type="submit"
                >
                  {submitLabel}
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ProjectForm;
