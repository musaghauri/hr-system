import React, { Component } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import routes from './routes.json';

class Dashboard extends Component {
  render() {
    const { router } = this.props;
    return (
      <div className="wrapper">
        <div className="sidebar" data-color="white" data-active-color="danger">
          <div className="logo">
            <a
              href="http://www.creative-tim.com"
              className="simple-text logo-mini"
            >
              <div className="logo-image-small">
                <img src="/assets/img/logo-small.png" alt="logo" />
              </div>
            </a>
            <a
              href="http://www.creative-tim.com"
              className="simple-text logo-normal"
            >
              HR System
            </a>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              {routes.map((route, rI) => (
                <Link key={`route_${rI}`} href={route.route}>
                  <li className={router.asPath === route.route ? 'active' : ''}>
                    <a>
                      <i className={route.icon} />
                      <p>{route.label}</p>
                    </a>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
