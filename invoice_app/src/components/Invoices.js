import React, { Component } from 'react';
import SingleInvoice from './SingleInvoice';
import { Button, ListGroup, ListGroupItem, Table, Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux';
import { fetchInvoices, selectInvoice } from '../redux/actions/invoiceAction';
import PropTypes from 'prop-types';

class Invoices extends Component {

    componentWillMount() {
        this.props.fetchInvoices();
    }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.newInvoice) {
    //         this.props.invoices.unshift(nextProps.newInvoice)
    //     }
    // }


    renderList() {
        return this.props.invoices.map((invoice) => {

            return (

                <tr key={invoice.id}>
                    <td> {invoice.invoiceNumber}</td>
                    {/* <td> {invoice.business.businessName}</td> */}
                    <td> {invoice.shipper}</td>
                    <td> {invoice.consignee}</td>
                    <td>
                        <Button color="success" onClick={() => this.props.selectInvoice(invoice)}> Select </Button>
                        {/* <Button color="danger">Delete</Button> */}
                    </td>

                    {/* <Button color="danger" onClick={() => deleteInvoice(invoice.id)}>Delete</Button> */}
                </tr>
            )
        });
    }

    

    render() {


        return (
            <Container>
                <Row>
                    <Col xs="6">

                        <h2>List of Invoices</h2>
                        <Button href="/newinvoice" className="my-3" color="primary">Add Invoice</Button>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Invoice #</th>
                                    {/* <th>Business</th> */}
                                    <th>Shipper</th>
                                    <th>Consignee</th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.renderList()}

                            </tbody>
                        </Table>

                    </Col>

                    <Col xs="6">
                        <SingleInvoice />


                    </Col>
                </Row>
            </Container >
        )
    }
}

Invoices.propTypes = {
    fetchInvoices: PropTypes.func.isRequired,
    invoices: PropTypes.array.isRequired,
    invoice: PropTypes.object.isRequired,
    newInvoice: PropTypes.object
};

const mapStateToProps = function (state) {
    return {
        invoices: state.invoices.invoiceList,
        invoice: state.invoice

    }
}

const matchDispatchToProps= function (dispatch) {
    return {
        selectInvoice: selectInvoice
    }
}


export default connect(mapStateToProps, matchDispatchToProps, { fetchInvoices, selectInvoice })(Invoices);