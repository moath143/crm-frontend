import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from 'prop-types'
function Updateticket({ msg, handleOnChange, handleOnSubmit }) {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label className="d-block">Reply</Form.Label>
      <Form.Text>Please Reply Your Message Here or Update The Ticket</Form.Text>
      <Form.Control
        as="textarea"
        name="detail"
        rows="5"
        onChange={handleOnChange}
      />
      <div className="text-end mt-4 mb-5">
        <Button type="submit" className="">
          Reply
        </Button>
      </div>
    </Form>
  );
}

export default Updateticket;

Updateticket.propTypes = {
  msg: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};
