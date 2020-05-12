/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import routes from '../routes';

class SidebarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: 'push',
      direction: 'left',
    };
  }

  render() {
    const { animation, direction } = this.state;
    const { children, router } = this.props;
    return (
      <div>
        <Sidebar.Pushable
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            // top: 70,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            transform: 'none',
          }}
          as={Segment}
        >
          <Sidebar
            as={Menu}
            animation={animation}
            direction={direction}
            icon="labeled"
            inverted
            vertical
            visible
            width="thin"
          >
            {routes.map((route, rI) =>
              route.type === 'eventHandler' ? (
                <Menu.Item key={`route_${rI}`} onClick={route.handleClick}>
                  <Icon name={route.icon} />
                  {route.label}
                </Menu.Item>
              ) : (
                <Link key={`route_${rI}`} href={route.route}>
                  <a>
                    <Menu.Item
                      active={router.asPath === route.route}
                      as={route.name}
                    >
                      <Icon name={route.icon} />
                      {route.label}
                    </Menu.Item>
                  </a>
                </Link>
              )
            )}
          </Sidebar>
          <Sidebar.Pusher style={{ overflow: 'scroll' }}>
            <Segment basic>{children}</Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default withRouter(SidebarComponent);
