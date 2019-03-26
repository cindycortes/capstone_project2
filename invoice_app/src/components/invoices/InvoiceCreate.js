import React from 'react';
import { Field, reduxForm } from 'redux-form';


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
        return (
            <div className="field">
                <label>{label}</label> <br/>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        // console.log(this.props);
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="container">
                <Field name="business" component={this.renderInput} label="Business" />
                <Field name="date" component={this.renderInput} label="Date" />
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
    if(!formValues.date) {
        errors.date = "You must enter a date";
    }
    return errors;
}

export default reduxForm({
    form: 'invoiceCreate',
    validate
})(InvoiceCreate); 