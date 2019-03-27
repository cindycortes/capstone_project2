import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
// import { createInvoice } from '../../redux/actions/invoiceAction';
import { Form, FormGroup, Label, Row, Col } from 'reactstrap';


class InvoiceCreate extends React.Component {
    // renderError({ error, touched }) {
    //     if (touched && error) {
    //         return (
    //             <div className="ui error message">
    //                 <div className="header">{error}</div>
    //             </div>
    //         )
    //     }
    // }


    // renderInput = ({ input, label, meta }) => {
    //     // console.log(formProps);
    //     console.log(meta);
    //     const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    //     return (
    //         <div className={className}>
    //             <div className="form-group">
    //                 <label>{label}</label> <br />
    //                 <input {...input} autoComplete="off" />
    //                 {this.renderError(meta)}

    //             </div>
    //         </div>
    //     )
    // }

    submit = values => {
        console.log(values)
    }


    render() {

        // console.log(this.props);
        return (
            <Form className="container" onSubmit={this.submit}>
                <h1>Add New Invoice </h1>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="business">Business Name</Label>
                            <Field className="form-control" name="business" component="input" type="text" placeholder="Business Name" />

                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="date">Date</Label>
                            <Field className="form-control" name="date" component="input" type="date" label="date" />
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
                            <Label for="shipper">Shipper</Label>
                            <Field className="form-control" name="shipper" component="input" type="text" placeholder="Shipper's Name and Address" />
                        </FormGroup>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="consignee">Consignee</Label>
                            <Field className="form-control" name="consignee" component="input" type="text" placeholder="Consignee's Name and Address" />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="dateShipped">Date Shipped: </Label>
                            <Field className="form-control" name="dateShipped" component="input" type="date" label="dateShipped" />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="driver">Driver </Label>
                            <Field className="form-control" name="driver" component="input" type="text" placeholder="Driver's Name" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="shippersNumbers">Shippers No. : </Label>
                            <Field className="form-control" name="shippersNumbers" component="input" type="text" placeholder="Order #" />
                        </FormGroup>
                    </Col>

                </Row>

                <Row>
                    <Col md={6}>

                        <FormGroup>
                            <Label for="description_commodity">Description_Commodity </Label>
                            <Field className="form-control" name="description_commodity" component="input" type="text" placeholder="Check In / Check Out" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="weight_quantity">Weight / Quantity </Label>
                            <Field className="form-control" name="weight_quantity" component="input" type="text" placeholder="weight_quantity" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="rate">Rate </Label>
                            <Field className="form-control" name="rate" component="input" type="text" placeholder="rate" />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="charges">Charges </Label>
                            <Field className="form-control" name="charges" component="input" type="text" placeholder="charges" />
                        </FormGroup>
                    </Col>
                </Row>

                <button type="submit">Submit</button>
            </Form >
        )
    }

}

//initial values


export default reduxForm({
    form: 'invoiceCreate',
})(InvoiceCreate)