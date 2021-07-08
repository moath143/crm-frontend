import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types'
function SearchForm({handleOnChange, str}) {
    return (
      <div>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Search:{" "}
            </Form.Label>
            <Col sm='10'>
              <Form.Control onChange={handleOnChange} value={str} name="search" placeholder="Search..." />
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
}

export default SearchForm

SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
}
