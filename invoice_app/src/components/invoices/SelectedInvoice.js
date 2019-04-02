import React, { Component } from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Row, Col
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectInvoice, editInvoice, editButton } from '../../redux/actions/invoiceAction';
import moment from 'moment';

class SelectedInvoice extends Component {


    render() {


        const { invoiceNumber, shipper, consignee, rate, charges, driver, date, dateShipped, business, description_Commodity, shippersNumbers, weight_Quantity, id } = this.props.invoice
        console.log("Invoice has been selected:", this.props.invoice)


        console.log("props in edit Button", this.props)
        const invoiceDate = moment(date).format('MM-DD-YYYY')
        const shippedDate = moment(dateShipped).format('MM-DD-YYYY')


        return (
            <div className="container">


                <Card body outline color="secondary">
                    <CardHeader tag="h3">Invoice No: {invoiceNumber} </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={6}>
                                <CardTitle tag="h4">Business:{business} </CardTitle>
                                <CardText>{business}</CardText>
                                <span>CC Trucking</span><br />
                                <span>123 ABC St. Phoenix, AZ 85041</span><br />
                                <span>123-123-1234</span>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col md={6}>
                                        <CardText tag="h4"> Invoice No: </CardText>
                                    </Col>
                                    <Col md={6}>
                                        <CardText tag="h6">{invoiceNumber}</CardText>
                                    </Col>

                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                        <CardTitle tag="h4">Date:</CardTitle>
                                    </Col>
                                    <Col>
                                    
                                        <span>{invoiceDate}</span>
                                    </Col>

                                </Row>


                            </Col>
                        </Row>
                        <hr />

                        <Row>
                            <Col md={6}>
                                <Row>
                                    <Col>
                                        <CardTitle tag="h4">Driver: {driver} </CardTitle>

                                    </Col>
                                    <Col md={2}>
                                        <span>{driver}</span>
                                    </Col>
                                </Row>
                            </Col>


                            <Col md={6}>
                                <Row>
                                    <Col md={6}>
                                        <CardTitle tag="h4">Shippers No: </CardTitle>

                                    </Col>
                                    <Col md={4}>
                                        <span>{shippersNumbers}</span>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                        <br />
                        <hr />
                        <Row>
                            <Col>
                                <CardTitle tag="h4">Shipper:</CardTitle>
                                <CardText>  {shipper} </CardText>

                                <CardTitle tag="h4">Consignee:</CardTitle>
                                <CardText>{consignee}</CardText>
                            </Col>
                        </Row>
                        <hr />
                        <br />
                        <Row>
                            <Col>
                                <CardTitle tag="h4">Weight: {weight_Quantity}</CardTitle>
                            </Col>
                            <Col>
                                <CardTitle tag="h4">Rate: ${rate} </CardTitle>

                            </Col>
                            <Col>
                                <CardTitle>Charges: ${charges} </CardTitle>

                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <CardTitle tag="h4">Date Shipped: {shippedDate} </CardTitle>

                                <CardTitle tag="h4"> Description: {description_Commodity}</CardTitle>
                            </Col>
                        </Row>
                        <hr />
                    </CardBody>

                    <CardBody>
                        <Row>
                            <Col>
                                <Button onClick={() => this.props.history.push(`/invoice/${id}/edit`)}>Edit</Button>
                            </Col>
                            <Col>


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

export default withRouter(connect(mapStateToProps, { selectInvoice, editInvoice, editButton })(SelectedInvoice))