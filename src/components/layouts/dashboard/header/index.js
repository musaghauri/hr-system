import React, { Component } from 'react';
import { Menu, Button, Dropdown, Image, Input } from 'semantic-ui-react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'features',
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu
        size="massive"
        stackable
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: '9',
          width: '100%',
        }}
      >
        <Menu.Item header>
          <Image src="/images/logo.png" size="mini" avatar /> <span>HRMS</span>
        </Menu.Item>

        <Menu.Item
          name="features"
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Features
        </Menu.Item>

        <Menu.Item
          name="testimonials"
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Testimonials
        </Menu.Item>

        <Menu.Item
          name="sign-in"
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
          <Dropdown item text="Muhammad Musa">
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
