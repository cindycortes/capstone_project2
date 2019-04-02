import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import InvoiceEdit from '../invoices/InvoiceEdit';
import { connect } from 'react-redux';
import {fetchBusinesses} from '../../redux/actions/businessesAction';
import {fetchDrivers} from '../../redux/actions/driversAction';


class EditInvoiceToggle extends Component {
  componentDidMount() {
    this.props.fetchBusinesses();
    this.props.fetchDrivers()
  }

  render() {
    return (
      <div>
        <Button color="primary" size="lg" block id="togglerInvoice" style={{ marginBottom: '1rem' }}>
          Edit Invoice
        </Button>
        <UncontrolledCollapse toggler="#togglerInvoice">
          <Card>
            <CardBody>
              <InvoiceEdit />
              <br />
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>

    )
  }

}

export default connect(null, {fetchBusinesses, fetchDrivers}) (EditInvoiceToggle);