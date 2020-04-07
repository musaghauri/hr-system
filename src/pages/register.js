import React, { Component } from "react";
import RegisterContainer from "@redux/Register";
import { Container } from "semantic-ui-react";

class Register extends Component {
  render() {
    return (
      <Container style={{ marginTop: "80px" }}>
        <RegisterContainer />
      </Container>
    );
  }
}

export default Register;
