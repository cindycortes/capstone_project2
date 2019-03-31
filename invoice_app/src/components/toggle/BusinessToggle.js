import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import NewBusiness from '../invoices/NewBusiness'

const BusinessToggle = () => (
  <div>
    <Button color="primary" size="lg" block id="togglerBusiness" style={{ marginBottom: '1rem' }}>
      Create New Business
    </Button>
    <UncontrolledCollapse toggler="#togglerBusiness">
      <Card>
        <CardBody>
          <NewBusiness />
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default BusinessToggle;