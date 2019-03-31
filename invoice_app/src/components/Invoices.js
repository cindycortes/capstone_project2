import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem, Table, Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux';
import { fetchInvoices, selectInvoice, deleteInvoice } from '../redux/actions/invoiceAction';
import PropTypes from 'prop-types';
import InvoiceEdit from './invoices/InvoiceEdit';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import ModalButton from '../components/toggle/ModalButton';
import SelectedInvoice from './invoices/SelectedInvoice';

class Invoices extends Component {

    componentWillMount() {
        this.props.fetchInvoices();
    }



    renderList() {
        // console.log('props in invoices:', this.props);
      
        return this.props.invoices.map((invoice) => {

            return (

                <tr key={invoice.id}>
                    <td> {invoice.invoiceNumber}</td>
                    {/* <td> {invoice.business.businessName}</td> */}
                    <td> {invoice.shipper}</td>
                    <td> {invoice.consignee}</td>
                    <td>
                        <Button color="success" onClick={() => this.props.selectInvoice(invoice.id)}> Select </Button>
                        <Button color="danger" onClick={() => this.props.deleteInvoice(invoice.id)}>Delete</Button>
                        {/* <ModalButton /> */}
                        {/* <br/> */}
                        
                    </td>

                    
                </tr>
            )
        });
    }


    render() {


        return (
            <div>
                
                <Row>
                    <Col>
                        <div className="container">
                            <h2>List of Invoices</h2>
                            <Button href="/invoice/new" className="my-3" color="primary">Add Invoice</Button>
                            <SearchBar />
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Invoice #</th>
                                        <th>Shipper</th>
                                        <th>Consignee</th>
                                        <th></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderList()}
                                   

                                </tbody>
                            </Table>
                            {/* <Pagination /> */}
                        </div>
                    </Col>

                    <Col>
                        <div className="container">
                            <Row>
                                {/* <h3>Invoice Item</h3> */}
                            </Row>
                            <br/>
                            <br/>

                            <Row>

                                {/* <InvoiceEdit /> */}
                                <SelectedInvoice />
                            </Row>


                        </div>
                    </Col>
                </Row>
            </div >
        )
    }
}

Invoices.propTypes = {
    fetchInvoices: PropTypes.func.isRequired,
    selectInvoice: PropTypes.func.isRequired,
    deleteInvoice: PropTypes.func.isRequired,
    invoices: PropTypes.array.isRequired,
    invoice: PropTypes.object.isRequired,
    newInvoice: PropTypes.object
};

const mapStateToProps = function (state) {
    return {
        invoices: state.invoices.invoiceList

    }
}




export default connect(mapStateToProps, { fetchInvoices, selectInvoice, deleteInvoice })(Invoices);