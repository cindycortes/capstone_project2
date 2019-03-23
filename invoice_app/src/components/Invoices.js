import React, { Component } from 'react';
import EditInvoice from './EditInvoice';
import { Button, ListGroup, ListGroupItem, Table } from 'reactstrap'
import { connect } from 'react-redux';
import { fetchInvoices } from '../redux/actions/invoiceAction';
import PropTypes from 'prop-types';

class Invoices extends Component {

    componentWillMount() {
        this.props.fetchInvoices();
    }


    render() {
        const invoiceList = this.props.invoices;
        if (invoiceList) {


            invoiceList.map(invoice => (

                <tr key={invoice.id}>
                    <td> {invoice.invoiceNumber}</td>
                    <td> {invoice.business}</td>
                    <td> {invoice.shipper}</td>
                    <td>{invoice.consignee}</td>
                    <td>
                        <Button color="success"> Edit </Button>

                        {/* <Button color="danger" onClick={() => deleteInvoice(invoice.id)}>Delete</Button> */}
                    </td>
                </tr>
            ));

        }




        return (
            <div>
                <h2>List of Invoices</h2>
                <Button href="/newinvoice" className="my-3" color="primary">Add Invoice</Button>
                <Table>
                    <thead>
                        <tr>
                            <th>Invoice #</th>
                            <th>Business</th>
                            <th>Shipper</th>
                            <th>Consignee</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>

                        {invoiceList ? invoiceList : null}
                    </tbody>
                </Table>

            </div>
        )
    }
}

Invoices.propTypes = {
    fetchInvoices: PropTypes.func.isRequired,
    invoices: PropTypes.array.isRequired,
    newInvoice: PropTypes.object
};

const mapStateToProps = state => ({
    invoices: state.invoices.invoices,
    newinvoice: state.invoices.invoice
})

export default connect(mapStateToProps, { fetchInvoices })(Invoices);