import React from "react";
import { Row, Col } from "reactstrap";
import AddressCompany from "./AddressCompany";
import AddressCustomer from "./AddressCustomer";
import InvoiceCalender from "./InvoiceCalender";
import classes from "./invoice.module.css";
import InvoiceTable from "./InvoiceTable";
// import InvoiceTablebootstrap from "./InvoiceTablebootstrap";

const Invoice = () => {
  return (
    <div>
      <Row className={classes.part1}>
        <h3>--------INVOICE--------</h3>
      </Row>
      <Row>
        <Col>
          <AddressCompany />
        </Col>
        <Col>
          <InvoiceCalender />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddressCustomer />
        </Col>
      </Row>
      <Row>
        <Col>
          <InvoiceTable />
          {/* <InvoiceTablebootstrap/> */}
        </Col>
      </Row>
    </div>
  );
};

export default Invoice;
