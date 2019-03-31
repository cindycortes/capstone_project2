import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import InvoiceCreate from '../invoices/InvoiceCreate';
import { connect } from 'react-redux';
import {fetchBusinesses} from '../../redux/actions/businessesAction';

class InvoiceToggle extends Component {
  componentDidMount() {
    this.props.fetchBusinesses();
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

export default connect(null, {fetchBusinesses}) (InvoiceToggle);