import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TicketTable from "../../components/ticket-table/TicketTable.comp";
import Tickets from "../../assets/data/dummy-tickets.json";
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb.comp";
function Dashboard() {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button>Addd New Ticket</Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="mb-2">Recently Added Tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={Tickets} />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
