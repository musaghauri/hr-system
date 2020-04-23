import React, { Component } from 'react';
import Link from 'next/link';
import { ChromePicker } from 'react-color';
import {
  Button,
  Form,
  Message,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';
import _assign from 'lodash/assign';

class PriorityForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayColorPicker: false,
    }
  }
  handleChange = (e, {name, value}) => {
    if(!name & !value){
      name="colour";
      value=e.hex;
    }
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
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
    const {
      formDetails,
      submitStatus,
      submitLabel,
      successMessage,
      submitColor,
    } = this.props;
    const { displayColorPicker } = this.state;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <Header textAlign="center" as="h3">
                Priority
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
                <div>
                  { displayColorPicker &&
                    (<div style={ popover }>
                      <div style={ cover } onClick={ this.handleClose }/>
                      <ChromePicker 
                        color = {formDetails.getIn(['colour', 'value'])}
                        disableAlpha
                        onChange={this.handleChange}
                      />
                    </div> ) 
                  }
                </div>
                <Form.Input
                  fluid
                  autoComplete="off"
                  onFocus={ this.handleClick }
                  label={formDetails.getIn(['colour', 'label'])}
                  name={formDetails.getIn(['colour', 'name'])}
                  value={formDetails.getIn(['colour', 'value'])}
                  placeholder={formDetails.getIn([
                    'colour',
                    'placeholder',
                  ])}
                  error={
                    !formDetails.getIn(['colour', 'status'])
                      ? formDetails.getIn(['colour', 'errorText'])
                      : false
                  }
                />
                <Link href="/priorities">
                  <a>Back to Priorities</a>
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

export default PriorityForm;
