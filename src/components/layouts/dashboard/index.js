import React, { Component } from 'react';
// import Header from './header';
import Sidebar from './sidebar';
// import Footer from './footer';

class Dashboard extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        {/* <Header /> */}
        <Sidebar>{children}</Sidebar>
        {/* <Footer /> */}
      </>
    );
  }
}

export default Dashboard;
