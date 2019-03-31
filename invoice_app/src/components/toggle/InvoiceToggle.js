import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import InvoiceCreate from '../invoices/InvoiceCreate';

const InvoiceToggle = () => (
  <div>
    <Button color="primary" size="lg" block id="togglerInvoice" style={{ marginBottom: '1rem' }}>
      Create New Invoice
    </Button>
    <UncontrolledCollapse toggler="#togglerInvoice">
      <Card>
        <CardBody>
          <InvoiceCreate />
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default InvoiceToggle;