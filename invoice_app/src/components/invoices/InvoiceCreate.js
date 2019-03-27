import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createInvoice } from '../../redux/actions/invoiceAction';



class InvoiceCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    
    
    renderInput = ({ input, label, meta }) => {
        // console.log(formProps);
        console.log(meta);
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                <div className="form-group">
                    <label>{label}</label> <br/>
                    <input {...input} autoComplete="off" />
                    {this.renderError(meta)}

                </div>
            </div>
        )
    }

    onSubmit= (formValues) => {
        // console.log(formValues);
        this.props.createInvoice(formValues);
    }

    render() {
        // console.log(this.props);
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="container error">
                <div className="form-group row">

                    <Field name="business" component={this.renderInput} label="Business" />
                </div>
                <div className="form-group">
                    <Field name="invoiceNumber" component={this.renderInput} label="invoiceNumber" />
                    <Field name="date" component={this.renderInput} label="Date" />
                </div>
                <Field name="shipper" component={this.renderInput} label="Shipper" />
                <Field name="consignee" component={this.renderInput} label="Consignee" />
                <Field name="dateShipped" component={this.renderInput} label="Date Shipped" />
                <Field name="driver" component={this.renderInput} label="Driver" />
                <Field name="shippersNumbers" component={this.renderInput} label="Shippers Numbers" />
                <Field name="description_commodity" component={this.renderInput} label="Description Commodity" />
                <Field name="weight_quantity" component={this.renderInput} label="Weight_Quantity" />
                <Field name="rate" component={this.renderInput} label="Rate" />
                <Field name="charges" component={this.renderInput} label="Charges" />

                <button>Submit</button>
            </form>
        )
    }

}

const validate = (formValues) => {
    const errors = {};
    
    if(!formValues.business) {
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