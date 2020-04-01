import React, { Component } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Register from "@redux/Register";
import { Container } from "semantic-ui-react";

class Dashboard extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
        <Sidebar>{children}</Sidebar>
        <Container textAlign="center" style={{ maxWidth: "calc(100%-152px" }}>
          <Register />
        </Container>
        {/* <Footer /> */}
      </>
    );
  }
}

export default Dashboard;
