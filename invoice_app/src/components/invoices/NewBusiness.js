import React, { Component } from 'react';
import { Field, reduxForm } from redux-form;
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Row, Col } from 'reactstrap';
import { createBusiness } from '../../redux/actions/businessesAction';


let NewBusiness = props => {


    return (
        <Form className="container">
            <h1>Add New Business </h1>
            <Row>
                <Col md={3}>

                    <FormGroup>
                        <Label for="InvoiceNumber">Invoice No.</Label>
                        <Field className="form-control" name="InvoiceNumber" component="input" type="text" placeholder="Invoice Number" />
                    </FormGroup>
                </Col>

            </Row>

            <Row>

                <Col>
                    <FormGroup>
                        <Label for="Shipper">Shipper</Label>
                        <Field className="form-control" name="Shipper" component="textarea" type="text" placeholder="Shipper's Name and Address" />
                    </FormGroup>
                </Col>

            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="Consignee">Consignee</Label>
                        <Field className="form-control" name="Consignee" component="textarea" type="text" placeholder="Consignee's Name and Address" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md={3}>
                    <FormGroup>
                        <Label for="DateShipped">Date Shipped: </Label>
                        <Field className="form-control" name="DateShipped" component="input" type="date" label="dateShipped" />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="DriverId">Driver </Label>
                        <Field className="form-control" name="DriverId" component="select" placeholder="Driver's Name" >
                            <option></option>
                            <option value="1">Cindy</option>
                            <option value="2">Daniel</option>
                        </Field>

                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="ShippersNumbers">Shippers No. : </Label>
                        <Field className="form-control" name="ShippersNumbers" component="input" type="text" placeholder="Order #" />
                    </FormGroup>
                </Col>

            </Row>

            <Row>
                <Col md={6}>

                    <FormGroup>
                        <Label for="Description_Commodity">Description_Commodity </Label>
                        <Field className="form-control" name="Description_Commodity" component="textarea" type="textarea" placeholder="Check In / Check Out" />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for="Weight_Quantity">Weight / Quantity </Label>
                        <Field className="form-control" name="Weight_Quantity" component="input" type="text" placeholder="weight_quantity" />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for="Rate">Rate </Label>
                        <Field className="form-control" name="Rate" component="input" type="text" placeholder="rate" />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for="Charges">Charges </Label>
                        <Field className="form-control" name="Charges" component="input" type="text" placeholder="charges" />
                    </FormGroup>
                </Col>
            </Row>

            <button type="submit" disabled={submitting}>Submit</button>
        </Form>
    )
}

NewBusiness = reduxForm({
    form: 'newBusiness',
    destroyOnUnmount: false
})(NewBusiness)

export default connect(null, {createBusiness})(NewBusiness)