/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { Form } from 'semantic-ui-react';

class ColourPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleChange = e => {
    const { colour, handleChange } = this.props;
    const { hex } = e;
    handleChange(e, { name: colour.get('name'), value: hex });
  };

  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    };
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    };
    const { colour } = this.props;
    const { show } = this.state;
    return (
      <>
        {show && (
          <div style={popover}>
            <div style={cover} onClick={this.handleClose} />
            <ChromePicker
              color={colour.get('value')}
              disableAlpha
              onChange={this.handleChange}
            />
          </div>
        )}
        <Form.Input
          fluid
          autoComplete="off"
          onFocus={this.handleClick}
          label={colour.get('label')}
          name={colour.get('name')}
          value={colour.get('value')}
          placeholder={colour.get('placeholder')}
          error={!colour.get('status') ? colour.get('errorText') : false}
        />
      </>
    );
  }
}

export default ColourPicker;
