import React, { Component } from 'react';
import Link from 'next/link';
import {
  Button,
  Form,
  Message,
  Grid,
  Header,
  Segment,
  Dropdown,
} from 'semantic-ui-react';
import _assign from 'lodash/assign';

class RoleForm extends Component {
  handleChange = e => {
    const { name, value } = e.target;
    const { updateValue } = this.props;
    updateValue(['formDetails', name, 'value'], value);
  };

  handleSelectChange = (e, { value }, name) => {
    console.log({ e, value, name });
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
      permissions,
    } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <Header textAlign="center" as="h3">
                Role
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
                <Form.Input
                  fluid
                  label={formDetails.getIn(['description', 'label'])}
                  name={formDetails.getIn(['description', 'name'])}
                  value={formDetails.getIn(['description', 'value'])}
                  placeholder={formDetails.getIn([
                    'description',
                    'placeholder',
                  ])}
                  error={
                    !formDetails.getIn(['description', 'status'])
                      ? formDetails.getIn(['description', 'errorText'])
                      : false
                  }
                  onChange={this.handleChange}
                />
                <Dropdown
                  options={permissions.toJS()}
                  placeholder={formDetails.getIn([
                    'permissions',
                    'placeholder',
                  ])}
                  search
                  selection
                  fluid
                  multiple
                  value={formDetails.getIn(['permissions', 'value']).toJS()}
                  onChange={(e, params) =>
                    this.handleSelectChange(
                      e,
                      params,
                      formDetails.getIn(['permissions', 'name'])
                    )
                  }
                />
                <Link href="/roles">
                  <a>Back to Roles</a>
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

export default RoleForm;
