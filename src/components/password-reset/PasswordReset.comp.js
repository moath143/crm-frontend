import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ResetPassword({
  handleOnChange,
  handleOnResetSubmit,
  formLoadSwitcher,
  email,
}) {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center text-capitalize">
            Reset Password
          </h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleOnChange}
                value={email}
                placeholder="Enter Email"
                required
              />
            </Form.Group>
            <hr />
            <Button type="submit">Reset</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/" onClick={() => formLoadSwitcher("login")}>
            Login Now
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ResetPassword;

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formLoadSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
