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

class BranchForm extends Component {
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
      cities,
      departments
    } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <Header textAlign="center" as="h3">
                Branch
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
                <Form.Select
                  label={formDetails.getIn(['city', 'label'])}
                  options={cities.toJS()}
                  placeholder={formDetails.getIn([
                    'city',
                    'placeholder',
                  ])}
                  search
                  fluid
                  name={formDetails.getIn(['city', 'name'])}
                  value={formDetails.getIn(['city', 'value'])}
                  onChange={this.handleChange}
                />
                <Form.TextArea
                  fluid
                  label={formDetails.getIn(['address', 'label'])}
                  name={formDetails.getIn(['address', 'name'])}
                  value={formDetails.getIn(['address', 'value'])}
                  placeholder={formDetails.getIn([
                    'address',
                    'placeholder',
                  ])}
                  error={
                    !formDetails.getIn(['address', 'status'])
                      ? formDetails.getIn(['address', 'errorText'])
                      : false
                  }
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  label={formDetails.getIn(['contact', 'label'])}
                  name={formDetails.getIn(['contact', 'name'])}
                  value={formDetails.getIn(['contact', 'value'])}
                  placeholder={formDetails.getIn([
                    'contact',
                    'placeholder',
                  ])}
                  error={
                    !formDetails.getIn(['contact', 'status'])
                      ? formDetails.getIn(['contact', 'errorText'])
                      : false
                  }
                  onChange={this.handleChange}
                />
                <Form.Select
                label={formDetails.getIn(['departments', 'label'])}
                  options={departments.toJS()}
                  placeholder={formDetails.getIn([
                    'departments',
                    'placeholder',
                  ])}
                  search
                  selection
                  fluid
                  multiple
                  name={formDetails.getIn(['departments', 'name'])}
                  value={formDetails.getIn(['departments', 'value']).toJS()}
                  onChange={this.handleChange}
                />
                <Link href="/branches">
                  <a>Back to Branches</a>
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

export default BranchForm;
