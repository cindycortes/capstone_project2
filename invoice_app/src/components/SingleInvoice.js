import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectInvoice } from '../redux/actions/invoiceAction'
// import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SingleInvoice extends Component {

    render() {
        const { business, invoiceNumber, date, shipper, consignee, rate } = this.props.invoice;

        return (

            <form>
                <fieldset>
                <legend>Invoice No: {invoiceNumber} </legend>
                <div className="form-group row">
                    <Col md={8}>
                        <FormGroup>
                            <Label for="Business">Business</Label>
                            <Input type="select" value={business} name="business" id="Business" placeholder="business" >
                                <option>JJ Cortes Trucking</option>
                                <option>Cindy Trucking</option>

                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="date">Date</Label>
                            <Input type="date" value={date} name="date" id="date" placeholder="date" />
                            <Label for="InvoiceNumber">Invoice No. </Label>
                            <Input value={invoiceNumber} type="text" name="InvoiceNumber" id="InvoiceNumber" placeholder="Invoice Number" />
                        </FormGroup>
                    </Col>
                </div>
                <FormGroup>
                    <Label for="Shipper">Shipper</Label>
                    <Input value={shipper} type="select" name="Shipper" id="Business" placeholder="Shipper" > // Add New Shipper Button
                        <option>ABC Co</option>
                        <option>ABC Co</option>
                        <option>GHI Co</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="Consignee">Consignee</Label>
                    <Input value={consignee} type="select" name="Consignee" id="Business" placeholder="Consignee" > // Add New Consignee Button
                        <option>Zyx Co</option>
                        <option>WVUT Co</option>
                        <option>JKL Co</option>
                    </Input>
                </FormGroup>
                <Row form>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="DateShipped">DateShipped</Label>
                            <Input type="date" name="DateShipped" id="DateShipped" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="Driver">Driver</Label>
                            <Input type="text" name="Driver" id="Driver" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="ShippersNumbers">Order #</Label>
                            <Input  type="text" name="Shippers Numbers" id="ShippersNumbers" placeholder="Shippers Numbers" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="Description_Commodity">Description/Commodity</Label>
                            <Input type="text" name="Description_Commodity" id="Description_Commodity" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="Weight_Quantity">Weight/Quantity</Label>
                            <Input type="text" name="Weight_Quantity" id="Weight_Quantity" placeholder="Weight" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="Rate">Rate</Label>
                            <Input type="text" name="Rate" id="Rate" placeholder="Rate" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="Charges">Charges</Label>
                            <Input type="text" name="Charges" id="Charges" placeholder="Charges" />
                        </FormGroup>
                    </Col>
                </Row>

                <Button>Save</Button>
                </fieldset>
            </form >


        )
    }
}

const mapStateToProps = state => {
    return {
        invoice: state.invoices.invoiceSelected
    }
}

export default connect(mapStateToProps, { selectInvoice })(SingleInvoice);