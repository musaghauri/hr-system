import React, { Component } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';

class Dashboard extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="wrapper">
        <Sidebar />
        <div className="main-panel">
          <Header />
          <div className="content">{children}</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
