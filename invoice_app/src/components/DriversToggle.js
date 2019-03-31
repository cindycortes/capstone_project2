import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import NewDriver from './invoices/NewDriver'

const DriversToggle = () => (
  <div>
    <Button color="primary" size="lg" id="togglerDriver" style={{ marginBottom: '1rem' }}>
      Create New Driver
    </Button>
    <UncontrolledCollapse toggler="#togglerDriver">
      <Card>
        <CardBody>
          <NewDriver />
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default DriversToggle;