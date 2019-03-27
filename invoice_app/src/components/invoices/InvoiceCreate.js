import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createInvoice } from '../../redux/actions/invoiceAction';
import { Form, FormGroup, Label } from 'reactstrap'; 


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
                    <Label for="consignee">Consignee</Label>
                    <Field className="form-control" name="consignee" component="input" label="consignee" />
                </FormGroup>
                <FormGroup>
                    <Label for="dateShipped">Date Shipped: </Label>
                    <Field className="form-control" name="dateShipped" component="input" label="dateShipped" />
                </FormGroup>
                <FormGroup>
                    <Label for="driver">Driver </Label>
                    <Field className="form-control" name="driver" component="input" label="driver" />
                </FormGroup>
                <FormGroup>
                    <Label for="shippersNumbers">Shippers No. : </Label>
                    <Field className="form-control" name="shippersNumbers" component="input" label="shippersNumbers" />
                </FormGroup>
                <FormGroup>
                    <Label for="description_commodity">Description_Commodity </Label>
                    <Field className="form-control" name="description_commodity" component="input" label="description_commodity" />
                </FormGroup>
                <FormGroup>
                    <Label for="weight_quantity">Description_Commodity </Label>
                    <Field className="form-control" name="weight_quantity" component="input" label="weight_quantity" />
                </FormGroup>
                <FormGroup>
                    <Label for="rate">Description_Commodity </Label>
                    <Field className="form-control" name="rate" component="input" label="rate" />
                </FormGroup>
                <FormGroup>
                    <Label for="charges">Description_Commodity </Label>
                    <Field className="form-control" name="charges" component="input" label="charges" />
                </FormGroup>
               

                <button>Submit</button>
            </Form>
        )
    }

}

//initial values

const formWrapped = reduxForm({
    form: 'invoiceCreate'
  
})(InvoiceCreate);

export default InvoiceCreate;