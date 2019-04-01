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

        const { invoiceNumber, shipper, consignee, rate, charges, driver, date, dateShipped, business, description_Commodity, shippersNumber, weight_Quantity } = this.props.invoice
        console.log("Invoice has been selected:", this.props.invoice)
        return (
            <div className="container">


                <Card body outline color="secondary">
                    <CardHeader tag="h3">Invoice No: {invoiceNumber} </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={6}>
                                <CardTitle tag="h4">Company: {business} </CardTitle>

                            </Col>
                            <Col md={6}>
                                <CardTitle>Date: {date} </CardTitle>
                                <CardTitle>Invoice #: {invoiceNumber}</CardTitle>

                            </Col>
                        </Row>
                        <hr />

                        <Row>
                            <Col>

                                <CardTitle>Driver: {driver} </CardTitle>
                                <CardTitle>Shippers No: {shippersNumber}</CardTitle>

                            </Col>
                        </Row>
                        <br />
                        <hr />
                        <Row>
                            <Col>
                                <CardTitle tag="h4"><b>Shipper:</b></CardTitle>
                                <CardText>  {shipper} </CardText>

                                <CardTitle tag="h4"><b>Consignee: </b></CardTitle>
                                <CardText>{consignee}</CardText>
                            </Col>
                        </Row>
                        <hr />
                        <br />
                        <Row>
                            <Col>
                                <CardTitle>Weight: {weight_Quantity}</CardTitle>
                            </Col>
                            <Col>
                                <CardTitle>Rate: ${rate} </CardTitle>

                            </Col>
                            <Col>
                                <CardTitle>Charges: ${charges} </CardTitle>

                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <CardTitle>Date Shipped: {dateShipped} </CardTitle>

                                <CardTitle> Description: {description_Commodity}</CardTitle>
                            </Col>
                        </Row>
                        <hr />
                    </CardBody>

                    <CardBody>
                        <Row>
                            <Col>
                                <Button href="/invoice/edit">Edit</Button>
                            </Col>
                            <Col>
                                <Button>Delete</Button>

                            </Col>
                        </Row>

                    </CardBody>
                    <CardFooter className="text-muted">CC Trucking Co.</CardFooter>
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