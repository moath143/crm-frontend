import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import MessageHistory from "../../components/message-history/MessageHistory.comp";
import Updateticket from "../../components/update-ticket/Updateticket.comp";
import { useParams } from "react-router-dom";
// const ticket = tickets[0];

function Ticket() {
  const { tId } = useParams();
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    for (var i = 0; i < tickets.length; i++) {
      if (tickets[i].id == tId) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [message]);

  const handleOnChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert("submit successful");
  };
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weigth-bolder text-secondary">
          <div className="subject">Subject: {ticket.subject} </div>
          <div className="date">Ticket Opened: {ticket.addedAt} </div>
          <div className="status">status: {ticket.status} </div>
        </Col>
        <Col className="text-end">
          <Button variant="outline-primary">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col sm={{ span: 8, offset: 2 }}>
          <Updateticket
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            msg={message}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Ticket;
