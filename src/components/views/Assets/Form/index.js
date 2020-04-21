import React, { Component } from 'react';
import Link from 'next/link';
import { DateInput } from 'semantic-ui-calendar-react';
import {
  Button,
  Form,
  Message,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';
import _assign from 'lodash/assign';

class AssetForm extends Component {
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
    } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <Header textAlign="center" as="h3">
                Asset
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
                <Form.Input
                  fluid
                  label={formDetails.getIn(['cost', 'label'])}
                  name={formDetails.getIn(['cost', 'name'])}
                  value={formDetails.getIn(['cost', 'value'])}
                  placeholder={formDetails.getIn(['cost', 'placeholder'])}
                  error={
                    !formDetails.getIn(['cost', 'status'])
                      ? formDetails.getIn(['cost', 'errorText'])
                      : false
                  }
                  onChange={this.handleChange}
                />
                <DateInput
                  fluid
                  iconPosition="left"
                  label={formDetails.getIn(['purchasedAt', 'label'])}
                  name={formDetails.getIn(['purchasedAt', 'name'])}
                  value={formDetails.getIn(['purchasedAt', 'value'])}
                  placeholder={formDetails.getIn([
                    'purchasedAt',
                    'placeholder',
                  ])}
                  error={
                    !formDetails.getIn(['purchasedAt', 'status'])
                      ? formDetails.getIn(['purchasedAt', 'errorText'])
                      : false
                  }
                  onChange={this.handleChange}
                />
                <Link href="/assets">
                  <a>Back to Assets</a>
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

export default AssetForm;
