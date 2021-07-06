import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb.comp";
import AddTicketForm from "../../components/add-ticket-form/AddTicketForm.comp";
import { shortText } from "../../utils/validation";

const initialData = {
  subject: "",
  issueDate: "",
  detail: "",
};

const initialDataError = {
  subject: false,
  issueDate: false,
  detail: false,
};
function Addticket() {
  const [formData, setFormData] = useState(initialData);
  const [formDataError, setFormDataError] = useState(initialDataError);

  useEffect(() => {}, [formData, formDataError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFormDataError(initialDataError);
    const isSubjectValid = await shortText(formData.subject);

    setFormDataError({
      ...initialDataError,
      subject: !isSubjectValid,
    });
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col sm={{ span: 8, offset: 2 }}>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formDataError={formDataError}
            formData={formData}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Addticket;
