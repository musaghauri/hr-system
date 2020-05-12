import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';

class Intro extends Component {
  handleChange = (e, { name, value }) => {
    const { updateValue } = this.props;
    updateValue(['formDetails', name, 'value'], value);
  };

  render() {
    const { formDetails, roles, getRolesStatus, nextStep } = this.props;
    const isActive = formDetails.getIn(['isActive', 'value']);
    const isVerified = formDetails.getIn(['isVerified', 'value']);
    return (
      <Form stacked="true">
        <Header textAlign="center" as="h3">
          Basic Information
        </Header>
        <Form.Input
          fluid
          type="text"
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
          type="email"
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
        <Form.Select
          fluid
          search
          options={roles.toJS()}
          loading={getRolesStatus.get('loading')}
          label={formDetails.getIn(['role', 'label'])}
          name={formDetails.getIn(['role', 'name'])}
          value={formDetails.getIn(['role', 'value'])}
          placeholder={formDetails.getIn(['role', 'placeholder'])}
          error={
            !formDetails.getIn(['role', 'status'])
              ? formDetails.getIn(['role', 'errorText'])
              : false
          }
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          type="password"
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
        <Form.Group widths="equal">
          <Form.Button
            toggle
            fluid
            name={formDetails.getIn(['isActive', 'name'])}
            active={isActive}
            content={isActive ? 'Activated' : 'Deactivated'}
            onClick={(e, { name }) =>
              this.handleChange(e, { name, value: !isActive })
            }
          />
          <Form.Button
            toggle
            fluid
            name={formDetails.getIn(['isVerified', 'name'])}
            active={isVerified}
            content={isVerified ? 'Verified' : 'Unverified'}
            onClick={(e, { name }) =>
              this.handleChange(e, { name, value: !isVerified })
            }
          />
        </Form.Group>
        <Button fluid onClick={nextStep}>
          Next
        </Button>
      </Form>
    );
  }
}

export default Intro;
