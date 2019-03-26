import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createInvoice } from '../redux/actions/invoiceAction';


class NewInvoiceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            business: '',
            invoiceNumber: '', 
            shipper: '', 
            consignee: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();

        const invoice = {
            business: this.state.business, 
            invoiceNumber: this.state.invoiceNumber, 
            shipper: this.state.shipper, 
            consignee: this.state.consignee
        };
        this.props.createInvoice(invoice)
        
    }



    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="container">
                <h1>New Invoice Form</h1>
                <Row form>
                    <Col md={8}>
                        <FormGroup>
                            <Label for="Business">Company</Label>
                            <Input onChange={this.handleChange} type="select" value={this.state.Business} name="business" id="Business" placeholder="with a placeholder" >
                               <option>JJ Cortes Trucking</option>
                               <option>Cindy Trucking</option>
                               
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="date">Date</Label>
                            <Input onChange={this.handleChange} type="date" value={this.state.Date} name="date" id="date" placeholder="password placeholder" />
                            <Label for="InvoiceNumber">Invoice No. </Label>
                            <Input onChange={this.handleChange} value={this.state.invoiceNumber} type="text" name="InvoiceNumber" id="InvoiceNumber" placeholder="Invoice Number" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="Shipper">Shipper</Label>
                    <Input onChange={this.handleChange} value={this.state.shipper} type="select" name="Shipper" id="Business" placeholder="Shipper" > // Add New Shipper Button
                        <option>ABC Co</option>
                        <option>ABC Co</option>
                        <option>GHI Co</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="Consignee">Consignee</Label>
                    <Input onChange={this.handleChange} value={this.state.congsignee} type="select" name="Consignee" id="Business" placeholder="Consignee" > // Add New Consignee Button
                        <option>Zyx Co</option>
                        <option>WVUT Co</option>
                        <option>JKL Co</option>
                    </Input>
                </FormGroup>
                <Row form>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="DateShipped">DateShipped</Label>
                            <Input onChange={this.handleChange} type="date" name="DateShipped" id="DateShipped" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="Driver">Driver</Label>
                            <Input onChange={this.handleChange}type="text" name="Driver" id="Driver" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="ShippersNumbers">Order #</Label>
                            <Input onChange={this.handleChange} type="text" name="Shippers Numbers" id="ShippersNumbers" placeholder="Shippers Numbers" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="Description_Commodity">Description/Commodity</Label>
                            <Input onChange={this.handleChange} type="text" name="Description_Commodity" id="Description_Commodity" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="Weight_Quantity">Weight/Quantity</Label>
                            <Input onChange={this.handleChange} type="text" name="Weight_Quantity" id="Weight_Quantity" placeholder="Weight"/>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="Rate">Rate</Label>
                            <Input onChange={this.handleChange} type="text" name="Rate" id="Rate" placeholder="Rate" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="Charges">Charges</Label>
                            <Input onChange={this.handleChange}type="text" name="Charges" id="Charges" placeholder="Charges" />
                        </FormGroup>
                    </Col>
                </Row>
                
                <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>
        );

    }
}

NewInvoiceForm.propTypes = {
    createInvoice : PropTypes.func.isRequired
}

export default connect(null, { createInvoice}) (NewInvoiceForm);