import React from "react";
import { Row, Col, Form, Button, Jumbotron } from "react-bootstrap";
import { PropTypes } from "prop-types";
import "./add-new-ticket.style.css";
function AddTicketForm({
  handleOnChange,
  handleOnSubmit,
  formDataError,
  formData,
}) {
  console.log(formData);
  return (
      <Jumbotron className=" mt-4 mb-4 add-new-ticket">
          <h1 className='text-center text-info'>Add New Ticket</h1>
          <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              placeholder="subject"
              onChange={handleOnChange}
              value={formData.subject}
              required
            />
            <Form.Text className='text-danger'>{formDataError.subject && "Subject is Required" }</Form.Text>
          </Col>
        </Form.Group>
        <Form.Group className="mt-4 mb-4" as={Row}>
          <Form.Label column sm={3}>
            Issue Date
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              onChange={handleOnChange}
              value={formData.issueDate}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Details
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              name="detail"
              rows="5"
              onChange={handleOnChange}
              value={formData.detail}
              required
            />
          </Col>
        </Form.Group>
        <Button
          variant="info"
          type="submit"
          style={{ width: "100%", margin: "2rem auto" }}
        >
          Add Ticket
        </Button>
      </Form>
    </Jumbotron>
  );
}

export default AddTicketForm;

AddTicketForm.propTyps = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  formDataError: PropTypes.object.isRequired,
};
