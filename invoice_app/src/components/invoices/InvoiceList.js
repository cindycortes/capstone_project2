import React from 'react';
import { connect } from 'react-redux';
import { fetchInvoices } from '../../redux/actions/invoiceAction';

class InvoiceList extends React.Component {
    componentDidMount() {
        this.props.fetchInvoices();
    }
}

