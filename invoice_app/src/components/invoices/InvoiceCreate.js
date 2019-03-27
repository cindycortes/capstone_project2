import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createInvoice } from '../../redux/actions/invoiceAction';
import { Form, FormGroup, Label } from 'reactstrap'; 


class InvoiceCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }


    renderInput = ({ input, label, meta }) => {
        // console.log(formProps);
        console.log(meta);
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <div className="form-group">
                    <label>{label}</label> <br />
                    <input {...input} autoComplete="off" />
                    {this.renderError(meta)}

                </div>
            </div>
        )
    }

    onSubmit = (formValues) => {
        // console.log(formValues);
        this.props.createInvoice(formValues);
    }

    render() {
        // console.log(this.props);
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <FormGroup>
                    <Label for="business">Business</Label>
                    <Field className="form-control" name="business" component="input" label="Business" />
                </FormGroup>
                
                <FormGroup>
                    <Label for="invoiceNumber">Invoice No.</Label>
                    <Field className="form-control" name="invoiceNumber" component="input" label="invoiceNumber" />
                </FormGroup>
                <FormGroup>
                    <Label for="date">Date</Label>
                    <Field className="form-control" name="date" component="input" label="date" />
                </FormGroup>
                <FormGroup>
                    <Label for="shipper">Shipper</Label>
                    <Field className="form-control" name="shipper" component="input" label="shipper" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Field className="form-control" name="invoiceNumber" component="input" label="invoiceNumber" />
                </FormGroup>
                

                <Field className="form-control" name="invoiceNumber" component="input" label="invoiceNumber" />
                <Field className="form-control" name="date" component="input" label="Date" />
                <Field name="shipper" component="input" label="Shipper" />
                <Field name="consignee" component="input" label="Consignee" />
                <Field name="dateShipped" component="input" label="Date Shipped" />
                <Field name="driver" component="input" label="Driver" />
                <Field name="shippersNumbers" component="input" label="Shippers Numbers" />
                <Field name="description_commodity" component="input" label="Description Commodity" />
                <Field name="weight_quantity" component="input" label="Weight_Quantity" />
                <Field name="rate" component="input" label="Rate" />
                <Field name="charges" component="input" label="Charges" />

                <button>Submit</button>
            </Form>
        )
    }

}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.business) {
        errors.business = "You must enter a business";
    }
    // if(!formValues.date) {
    //     errors.date = "You must enter a date";
    // }
    return errors;
}

const formWrapped = reduxForm({
    form: 'invoiceCreate',
    validate
})(InvoiceCreate);

export default connect(null, { createInvoice })(formWrapped);