import React, { Component } from 'react';
import {
  Button,
  Form,
  Message,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';
import Link from 'next/link';
import _assign from 'lodash/assign';
import { StyledAnchor } from '../custom-components';

class Login extends Component {
  handleSelectChange = (e, values) => {
    const { name, value } = values;
    const { updateValue } = this.props;
    updateValue(['formDetails', name, 'value'], value);
  };

  handleChange = e => {
    const { name, value } = e.target;
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
    const { formDetails, roles, loginStatus } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <Form onSubmit={this.handleSubmit} stacked="true">
                <Header textAlign="center" as="h3">
                  Login
                </Header>
                {loginStatus.get('error') && (
                  <Message negative floating>
                    {loginStatus.get('error')}
                  </Message>
                )}
                <Form.Input
                  fluid
                  type={formDetails.getIn(['email', 'type'])}
                  label={formDetails.getIn(['email', 'label'])}
                  name={formDetails.getIn(['email', 'name'])}
                  value={formDetails.getIn(['email', 'value'])}
                  placeholder={formDetails.getIn(['email', 'placeholder'])}
                  error={
                    !formDetails.getIn(['email', 'status'])
                      ? formDetails.getIn(['email', 'errorText'])
                      : false
                  }
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  type={formDetails.getIn(['password', 'type'])}
                  label={formDetails.getIn(['password', 'label'])}
                  name={formDetails.getIn(['password', 'name'])}
                  value={formDetails.getIn(['password', 'value'])}
                  placeholder={formDetails.getIn(['password', 'placeholder'])}
                  error={
                    !formDetails.getIn(['password', 'status'])
                      ? formDetails.getIn(['password', 'errorText'])
                      : false
                  }
                  onChange={this.handleChange}
                />
                <Form.Select
                  fluid
                  label={formDetails.getIn(['role', 'label'])}
                  options={roles}
                  placeholder={formDetails.getIn(['role', 'placeholder'])}
                  name={formDetails.getIn(['role', 'name'])}
                  value={formDetails.getIn(['role', 'value'])}
                  error={
                    !formDetails.getIn(['role', 'status'])
                      ? formDetails.getIn(['role', 'errorText'])
                      : false
                  }
                  onChange={this.handleSelectChange}
                />
                <Link href="/forgot-password">
                  <StyledAnchor>Forgot password?</StyledAnchor>
                </Link>
                <Button
                  loading={loginStatus.get('loading')}
                  fluid
                  type="submit"
                >
                  Login
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default Login;
