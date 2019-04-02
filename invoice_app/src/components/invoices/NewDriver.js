import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Row, Col } from 'reactstrap';
import { createDriver } from '../../redux/actions/driversAction';
import ModalButton from '../toggle/ModalButton';
import {Alert, UncontrolledAlert} from 'reactstrap';


let NewDriver = props => {
    
    function submitNewDriver(values) {
        alert('You have added a new driver!')
        console.log("drivers Values", values);
       
    }
   
    

    
    const required = value => value ? undefined : 'Required'
    const { handleSubmit, submitting, reset, pristine } = props;
    return (
        <Form className="container" onSubmit={handleSubmit(submitNewDriver)}>
            <Row>
                <h2 style={{textAlign: "center"}}>Add New Driver </h2>
               
            </Row>
            <Row>
                <Col md={8}>

                    <FormGroup>
                        <Label for="name">Drivers Name</Label>
                        <Field className="form-control" name="name" component="input" type="text" placeholder="Drivers Name" validate={[ required ]}/>
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


            <button type="submit" style={{marginRight:"10px"}} className="btn btn-primary btn-lg" disabled={submitting} onClick="alert('Thank you')">Add Driver</button>
            
            <button type="button" className="btn btn-secondary btn-lg" disabled={pristine || submitting} onClick={reset}>Clear</button>
        </Form>
    )
}

const validate = formValues => {
    const errors = {}
    if(!formValues.name) {
        errors.title = "Enter your name"
    }
    if(!formValues.email){
        errors.email = "Enter your email"
    }
    if(!formValues.address) {
        errors.address = "Enter your address"
    }
    
    return errors; 
}

NewDriver = reduxForm({
    form: 'newDriver',
    destroyOnUnmount: false,
    validate:validate
})(NewDriver)

export default connect(null, { createDriver })(NewDriver)