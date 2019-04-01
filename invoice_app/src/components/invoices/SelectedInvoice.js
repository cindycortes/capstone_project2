import React, { Component } from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Row, Col
} from 'reactstrap';

import { connect } from 'react-redux';
import { selectInvoice } from '../../redux/actions/invoiceAction';
// import { invoiceNumber } from 'react-redux';

class SelectedInvoice extends Component {


    render() {

        const { invoiceNumber, shipper, consignee, rate, charge, driver, date, dateShipped, business, description_Commodity, shippersNumber, weight_Quantity } = this.props.invoice
        console.log("Invoice has been selected:", this.props.invoice)
        return (
            <div className="container">

                <Card body outline color="secondary">
                    <CardHeader tag="h3">Invoice No: {invoiceNumber} </CardHeader>
                    <CardBody >
                        <Row>
                            <Col md={8}>
                                <CardTitle>Company: {business} </CardTitle>

                            </Col>
                            <Col md={4}>
                                <CardTitle>Date: {date} </CardTitle>

                            </Col>
                        </Row>
                        <hr />
                        <br />
                        <Row>
                            <Col>
                                <CardTitle>Driver: {driver} </CardTitle>

                                <CardTitle>Shipper: {shipper} </CardTitle>

                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <CardTitle>Consignee: {consignee} </CardTitle>

                            </Col>
                        </Row>
                        <hr />
                        <br />
                        <Row>
                            <Col>
                                <CardTitle>Date Shipped: {dateShipped} </CardTitle>

                            </Col>
                            <Col>
                                <CardTitle>Rate: ${rate} </CardTitle>

                            </Col>
                            <Col>
                                <CardTitle>Charges: ${charge} </CardTitle>

                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <CardTitle> Description: {description_Commodity}</CardTitle>
                            </Col>
                        </Row>
                        <hr />
                    </CardBody>
                 
                    <CardBody>
                        <Row>
                            <Col>
                                <Button>Edit</Button>
                            </Col>
                            <Col>
                                <Button>Delete</Button>

                            </Col>
                        </Row>

                    </CardBody>
                    <CardFooter className="text-muted">Footer</CardFooter>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        invoice: state.invoices.invoiceSelected
    }
}

export default connect(mapStateToProps, { selectInvoice })(SelectedInvoice)