import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Row, Col } from 'reactstrap';
import { createBusiness } from '../../redux/actions/businessesAction';


let NewBusiness = props => {

    function submitNewBusiness(values) {
        console.log("business Values", values);
        props.createBusiness(values)
    }

    const { handleSubmit, submitting } = props;
    return (
        <Form className="container" onSubmit={handleSubmit(submitNewBusiness)}>
            <h1>Add New Business </h1>
            <Row>
                <Col md={8}>

                    <FormGroup>
                        <Label for="businessName">Business Name</Label>
                        <Field className="form-control" name="businessName" component="input" type="text" placeholder="Business Name" />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="businessNumber">Phone Number</Label>
                        <Field className="form-control" name="businessNumber" component="input" type="text" placeholder="Phone Number" />
                    </FormGroup>

                </Col>

            </Row>

            <Row>

                <Col>
                    <FormGroup>
                        <Label for="businessAddress">Business Address</Label>
                        <Field className="form-control" name="businessAddress" component="textarea" type="text" placeholder="Street, City, State, ZipCode" />
                    </FormGroup>
                </Col>

            </Row>
            <Row>

            </Row>


            <button type="submit" disabled={submitting}>Add Business</button>
        </Form>
    )
}

NewBusiness = reduxForm({
    form: 'newBusiness',
    destroyOnUnmount: false
})(NewBusiness)

export default connect(null, { createBusiness })(NewBusiness)