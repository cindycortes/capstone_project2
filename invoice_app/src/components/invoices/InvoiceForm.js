import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createInvoice, editInvoice } from '../../redux/actions/invoiceAction';
import { Form, FormGroup, Label, Row, Col } from 'reactstrap';





let InvoiceForm = props => {

    function submitNewInvoice(values) {
        console.log("values", values);
        props.editInvoice(values)
    }


    const { handleSubmit, submitting } = props;

    return (
        <Form className="container" onSubmit={handleSubmit(submitNewInvoice)}>
           
            <Row>
                <Col md={2}>
                    <FormGroup>
                        <Label for="UserId">UserId</Label>
                        <Field className="form-control" name="UserId" component="select" placeholder="UserId">
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </Field>


                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="BusinessId">Business Name</Label>
                        <Field className="form-control" name="BusinessId" component="select" placeholder="Business Name">
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </Field>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="Date">Date</Label>
                        <Field className="form-control" name="Date" component="input" type="date" label="date" />
                    </FormGroup>
                </Col>
                <Col md={3}>

                    <FormGroup>
                        <Label for="invoiceNumber">Invoice No.</Label>
                        <Field className="form-control" name="invoiceNumber" component="input" type="text" placeholder="Invoice Number" />
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

//initial values

InvoiceForm = reduxForm({
    form: 'invoiceForm',
    destroyOnUnmount: false
})(InvoiceForm)

export default connect(null, { editInvoice })(InvoiceForm)