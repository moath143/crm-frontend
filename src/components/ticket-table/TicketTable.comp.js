import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function TicketTable({ tickets }) {
  return (
    <Table striped bordered hover className="text-center table-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.id}</td>
                <td>
                  <Link to={`/ticket/${row.id}`}>
                    {row.subject}
                  </Link>
                </td>
                <td> {row.status} </td>
                <td> {row.addedAt} </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No Tickets Show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default TicketTable;

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};
