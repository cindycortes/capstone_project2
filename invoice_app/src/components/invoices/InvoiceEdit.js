import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { editInvoice, selectInvoice } from '../../redux/actions/invoiceAction';
import { Form, FormGroup, Label, Row, Col } from 'reactstrap';
import { fetchBusinesses } from '../../redux/actions/businessesAction';
import { fetchDrivers } from '../../redux/actions/driversAction';



let InvoiceEdit = props => {


    function submitEditInvoice(values) {
        alert('You have successfully edit your invoice!')
        console.log("edit values", values);
        props.editInvoice(values.id, values)
    }

    console.log("businessList from InvoiceEdit:", props.business)
    console.log("driversList from InvoiceEdit:", props.drivers)


    const businessList = props.business.map((bus) => {
        return (
            <option key={bus.id} value={bus.id}>{bus.businessName}

            </option>
        )
    })


    const driversList = props.drivers.map((driver) => {
        return (
            <option key={driver.id} value={driver.id}>{driver.name}</option>
        )
    })


    const { businessId, invoiceNumber, date, dateShipped, driver, shippersNumbers, description_Commodity, weight_Quantity, charges, shipper, consignee, rate, userId } = props.initialValues;
    const { handleSubmit, submitting } = props;


    return (

        <Form className="container" onSubmit={handleSubmit(submitEditInvoice)}>

            <Row>
                <Col>

                    <h2>Edit Invoice No. {invoiceNumber} </h2>
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                    <FormGroup>
                        <Label for="UserId">UserId</Label>
                        <Field className="form-control" name="userId" component="select" placeholder="UserId">
                            <option></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </Field>


                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="businessId">Business Name</Label>
                        <Field className="form-control" name="businessId" component="select" placeholder="Business Name">
                            <option>Select</option>
                            {businessList}

                        </Field>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="Date">Date</Label>
                        <Field className="form-control" name="date" component="input" type="date" label="date" />
                    </FormGroup>
                </Col>
                <Col md={3}>

                    <FormGroup>
                        <Label for="InvoiceNumber">Invoice No.</Label>
                        <Field className="form-control" name="invoiceNumber" component="input" type="text" placeholder="Invoice Number" />
                    </FormGroup>
                </Col>

            </Row>

            <Row>

                <Col>
                    <FormGroup>
                        <Label for="Shipper">Shipper</Label>
                        <Field className="form-control" name="shipper" value={shipper} component="input" type="text" placeholder="Shipper's Name and Address" />
                    </FormGroup>
                </Col>

            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="Consignee">Consignee</Label>
                        <Field className="form-control" name="consignee" value={consignee} component="input" type="text" placeholder="Consignee's Name and Address" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col md={3}>
                    <FormGroup>
                        <Label for="DateShipped">Date Shipped: </Label>
                        <Field className="form-control" name="dateShipped" component="input" type="date" label="dateShipped" />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="DriverId">Driver </Label>
                        <Field className="form-control" name="driverId" component="select" placeholder="Driver's Name" >
                            <option>Select</option>
                            {driversList}

                        </Field>

                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="ShippersNumbers">Shippers No. : </Label>
                        <Field className="form-control" name="shippersNumbers" component="input" type="text" placeholder="Order #" />
                    </FormGroup>
                </Col>

            </Row>

            <Row>
                <Col md={6}>

                    <FormGroup>
                        <Label for="Description_Commodity">Description_Commodity </Label>
                        <Field className="form-control" name="description_Commodity" component="textarea" type="textarea" placeholder="Check In / Check Out" />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for="Weight_Quantity">Weight / Quantity </Label>
                        <Field className="form-control" name="weight_Quantity" component="input" type="text" placeholder="weight_quantity" />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for="Rate">Rate </Label>
                        <Field className="form-control" name="rate" component="input" type="text" placeholder="rate" />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for="Charges">Charges </Label>
                        <Field className="form-control" name="charges" component="input" type="text" placeholder="charges" />
                    </FormGroup>
                </Col>
            </Row>

            <button type="submit" >Save</button>
        </Form>

    )


}

//initial values
const mapStateToProps = (state, props) => {
    console.log("invoice edit mstp", state)
    return {
        business: state.businesses.businessList,
        drivers: state.drivers.driversList,
        initialValues: state.invoices.invoiceSelected
    }
}

InvoiceEdit = reduxForm({
    form: 'invoiceEditForm',
    destroyOnUnmount: false

})(InvoiceEdit)

export default connect(mapStateToProps, { editInvoice, selectInvoice, fetchBusinesses, fetchDrivers })(InvoiceEdit)


