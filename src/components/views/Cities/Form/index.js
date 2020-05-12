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

class CityForm extends Component {
  handleChange = e => {
    const { name, value } = e.target;
    const { updateValue } = this.props;
    updateValue(['formDetails', name, 'value'], value);
  };

  handleSelectChange = (e, { value }, name) => {
    const { updateValue, getStates } = this.props;
    if (name === 'country') getStates(value);
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
      countries,
      states,
      getCountriesStatus,
      getStatesStatus,
    } = this.props;
    // console.log({ countries: countries.toJS() });
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <Header textAlign="center" as="h3">
                City
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
                <Dropdown
                  options={countries.toJS()}
                  loading={getCountriesStatus.get('loading')}
                  placeholder={formDetails.getIn(['country', 'placeholder'])}
                  search
                  selection
                  fluid
                  value={formDetails.getIn(['country', 'value'])}
                  onChange={(e, params) =>
                    this.handleSelectChange(
                      e,
                      params,
                      formDetails.getIn(['country', 'name'])
                    )
                  }
                  error={
                    !formDetails.getIn(['country', 'status'])
                      ? formDetails.getIn(['country', 'errorText'])
                      : false
                  }
                />
                <Dropdown
                  style={{ marginTop: '20px' }}
                  disabled={!getStatesStatus.get('loaded')}
                  label={formDetails.getIn(['name', 'label'])}
                  labeled
                  options={states.toJS()}
                  placeholder={formDetails.getIn(['state', 'placeholder'])}
                  search
                  selection
                  fluid
                  value={formDetails.getIn(['state', 'value'])}
                  onChange={(e, params) =>
                    this.handleSelectChange(
                      e,
                      params,
                      formDetails.getIn(['state', 'name'])
                    )
                  }
                  error={
                    !formDetails.getIn(['state', 'status'])
                      ? formDetails.getIn(['state', 'errorText'])
                      : false
                  }
                />
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
                <Link href="/cities">
                  <a>Back to Cities</a>
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

export default CityForm;
