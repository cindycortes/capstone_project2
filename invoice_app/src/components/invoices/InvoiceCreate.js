import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createInvoice } from '../../redux/actions/invoiceAction';
import { fetchBusinesses } from '../../redux/actions/businessesAction';
import { fetchDrivers } from '../../redux/actions/driversAction';

import { Form, FormGroup, Label, Row, Col } from 'reactstrap';




let InvoiceCreate = props => {


    function submitNewInvoice(values) {
        console.log("values", values);
        props.createInvoice(values)
    }


    const { handleSubmit, submitting } = props;
    // console.log("businessList from invoice create:", props.business)
    // console.log("driversList from invoice create:", props.drivers)


    const businessList = props.business.map((bus) => {
        return (
            <option key={bus.id} value={bus.id}>{bus.businessName}

            </option>
        )
    })

    const shippersList = props.business.map((bus) => {
        return (
            <option key={bus.id} value={bus.businessName}>{bus.businessName}</option>
        )
    })

    const driversList = props.drivers.map((driver) => {
        return (
            <option key={driver.id} value={driver.id}>{driver.name}</option>
        )
    })

    return (

        <Form className="container" onSubmit={handleSubmit(submitNewInvoice)}>
            <h1>Add New Invoice </h1>
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
                            <option>Select</option>
                            {businessList}
                            {/* <option value="1">JJCortesTrucking</option>
                            <option value="2">2</option> */}
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
                        <Label for="InvoiceNumber">Invoice No.</Label>
                        <Field className="form-control" name="InvoiceNumber" component="input" type="text" placeholder="Invoice Number" />
                    </FormGroup>
                </Col>

            </Row>

            <Row>

                <Col>
                    <FormGroup>
                        <Label for="Shipper">Shipper</Label>
                        <Field className="form-control" name="Shipper" component="textarea" placeholder="Shippers Name and Address">
                            {/* <option>Select</option>
                            {shippersList} */}
                        </Field>
                    </FormGroup>
                </Col>

            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="Consignee">Consignee</Label>
                        <Field className="form-control" name="Consignee" component="textarea" placeholder="Consignee's Name and Address">
                            {/* <option>Select</option>
                            {businessList} */}
                        </Field>
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
                        <Label for="DriverId">Driver's Name </Label>
                        <Field className="form-control" name="DriverId" component="select" placeholder="Driver's Name" >
                            <option>Select</option>
                            {driversList}
                            {/* <option value="1">Cindy</option>
                            <option value="2">Daniel</option> */}
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

            <button type="submit" className="btn btn-primary btn-lg" disabled={submitting}>Submit</button>
        </Form>
    )

}

//initial values
const mapStateToProps = state => {
    return {
        business: state.businesses.businessList,
        drivers: state.drivers.driversList
    }
}

InvoiceCreate = reduxForm({
    form: 'invoiceCreate',
    destroyOnUnmount: false
})(InvoiceCreate)

export default connect(mapStateToProps, { createInvoice, fetchBusinesses })(InvoiceCreate)
