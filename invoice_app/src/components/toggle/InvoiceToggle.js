import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import InvoiceCreate from '../invoices/InvoiceCreate';
import { connect } from 'react-redux';
import {fetchBusinesses} from '../../redux/actions/businessesAction';
import {fetchDrivers} from '../../redux/actions/driversAction';


class InvoiceToggle extends Component {
  componentDidMount() {
    this.props.fetchBusinesses();
    this.props.fetchDrivers()
  }

  

  
  
  render() {
    return (
      <div>
        <Button color="primary" size="lg" block id="togglerInvoice" style={{ marginBottom: '1rem' }}>
          Create New Invoice
        </Button>
        <UncontrolledCollapse toggler="#togglerInvoice">
          <Card>
            <CardBody>
              <InvoiceCreate />
              <br />
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>

    )
  }

}

export default connect(null, {fetchBusinesses, fetchDrivers}) (InvoiceToggle);