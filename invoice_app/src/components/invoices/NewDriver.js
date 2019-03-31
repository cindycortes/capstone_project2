import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Row, Col } from 'reactstrap';
import { createDriver } from '../../redux/actions/driversAction';


let NewDriver = props => {

    function submitNewDriver(values) {
        console.log("drivers Values", values);
        props.createDriver(values)
    }

    const { handleSubmit, submitting } = props;
    return (
        <Form className="container" onSubmit={handleSubmit(submitNewDriver)}>
            <h1>Add New Driver </h1>
            <Row>
                <Col md={8}>

                    <FormGroup>
                        <Label for="name">Drivers Name</Label>
                        <Field className="form-control" name="name" component="input" type="text" placeholder="Drivers Name" />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="number">Phone Number</Label>
                        <Field className="form-control" name="number" component="input" type="text" placeholder="Phone Number" />
                    </FormGroup>

                </Col>

            </Row>
            <Row>
                <Col md={12}>

                    <FormGroup>
                        <Label for="email">Email Address</Label>
                        <Field className="form-control" name="email" component="input" type="text" placeholder="Email address" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>

                <Col>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Field className="form-control" name="address" component="textarea" type="text" placeholder="Street, City, State, ZipCode" />
                    </FormGroup>
                </Col>

            </Row>
            <Row>

            </Row>


            <button type="submit" disabled={submitting}>Add Driver</button>
        </Form>
    )
}

NewDriver = reduxForm({
    form: 'newDriver',
    destroyOnUnmount: false
})(NewDriver)

export default connect(null, { createDriver })(NewDriver)