import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb.comp";
import SearchForm from "../../components/search-form/SearchForm.comp";
import TicketTable from "./../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-tickets.json";
function TicketList() {
    const [str, setStr] = useState("");
    const [displayTicket, setDisplayTicket] = useState(tickets);
    useEffect(() => {
    
  }, [str, displayTicket]);
    const handleOnChange = (e) => {
      const {value} = e.target
    setStr(value);
        console.log(e.target.value);
        searchTickets(value)
    };
    
    const searchTickets = (sttr) => {
        const displayTickets = tickets.filter((row) => {
            return row.subject.toLowerCase().includes(sttr.toLowerCase());
        })

        setDisplayTicket(displayTickets)
    }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket List" />
        </Col>
      </Row>
      <Row className="mt-5 mb-5">
        <Col>
          <Button>Add New Ticket</Button>
        </Col>
        <Col className="text-end">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TicketTable tickets={displayTicket} />
        </Col>
      </Row>
    </Container>
  );
}

export default TicketList;
