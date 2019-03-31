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

        const { invoiceNumber, shipper, consignee, rate, charge, driver, date, dateShipped, business, description_Commodity, shippersNumber, weight_Quantity} = this.props.invoice
        console.log("Invoice has been selected:", this.props.invoice)
        return (
            <div className="container">

                <Card body outline color="secondary">
                    <CardHeader tag="h3">Invoice No: {invoiceNumber} </CardHeader>
                    <CardBody >
                        <Row>
                            <Col>
                                <CardTitle>Company: {business} </CardTitle>

                            </Col>
                            <Col>

                                <CardTitle>Driver: {driver} </CardTitle>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <CardTitle>Shipper: {shipper} </CardTitle>

                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <CardTitle>Consignee: {consignee} </CardTitle>


                            </Col>
                        </Row>
                        <br/>
                        <CardTitle>Date Shipped: {dateShipped} </CardTitle>

                        <CardTitle>Date: {date} </CardTitle>
                        <CardTitle>Rate: ${rate} </CardTitle>
                        <CardTitle>Charges: ${charge} </CardTitle>


                    </CardBody>
                    <CardBody>
                        <CardTitle> Description: {description_Commodity}</CardTitle>
                    </CardBody>
                        <Button>Go somewhere</Button>
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