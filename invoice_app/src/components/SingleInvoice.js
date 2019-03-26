import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectInvoice } from '../redux/actions/invoiceAction'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SingleInvoice extends Component {

    render() {
        const { business, invoiceNumber, date, dateShipped, driver, shippersNumbers, description_Commodity,weight_Quantity, charges, shipper, consignee, rate } = this.props.invoice;
       
        return (

            <form>
                <fieldset>
                    <legend>Invoice No: {invoiceNumber} </legend>
                    <div className="form-group row">
                        <Col md={8}>
                            <FormGroup>
                                <Label>Company</Label>
                                <Input type="text" value={business} name="business" id="Business" placeholder="Trucking Company Name" >
                                   
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="date">Date</Label>
                                <Input value={date} type="date" name="date" id="date" placeholder="date" />
                                <Label for="InvoiceNumber">Invoice No. </Label>
                                <Input value={invoiceNumber} type="text" name="InvoiceNumber" id="InvoiceNumber" placeholder="Invoice Number" />
                            </FormGroup>
                        </Col>
                    </div>
                    <FormGroup>
                        <Label for="Shipper">Shipper</Label>
                        <Input value={shipper} type="text" name="Shipper" id="Business" placeholder="Shipper" > // Add New Shipper Button
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Consignee">Consignee</Label>
                        <Input value={consignee} type="text" name="Consignee" id="Business" placeholder="Consignee" > // Add New Consignee Button
                            
                        </Input>
                    </FormGroup>
                    <Row form>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="DateShipped">DateShipped</Label>
                                <Input value={dateShipped} type="date" name="DateShipped" id="DateShipped" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="Driver">Driver</Label>
                                <Input value={driver} type="text" name="Driver" id="Driver" />
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="ShippersNumbers">Order #</Label>
                                <Input value={shippersNumbers} type="text" name="Shippers Numbers" id="ShippersNumbers" placeholder="Shippers Numbers" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="Description_Commodity">Description/Commodity</Label>
                                <Input value={description_Commodity} type="text" name="Description_Commodity" id="Description_Commodity" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="Weight_Quantity">Weight/Quantity</Label>
                                <Input value={weight_Quantity} type="text" name="Weight_Quantity" id="Weight_Quantity" placeholder="Weight" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="Rate">Rate</Label>
                                <Input value={rate} type="text" name="Rate" id="Rate" placeholder="Rate" />
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="Charges">Charges</Label>
                                <Input value={charges} type="text" name="Charges" id="Charges" placeholder="Charges" />
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