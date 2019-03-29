import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { editInvoice, selectInvoice } from '../../redux/actions/invoiceAction';
import { Form, FormGroup, Label, Row, Col } from 'reactstrap';
import InvoiceForm from './InvoiceForm';


class InvoiceEdit extends Component {

    // componentDidMount() {
    //     this.props.selectInvoice(this.props.invoice.id);
    // }

    onSubmit = formValues => {
        console.log("edit Values:", formValues)
        // this.props.editInvoice(this.props.invoice.id, formValues)

    }

    render() {
        if (!this.props.invoice) {
            return <div>No Invoice Selected</div>;
        }
        console.log("hello from invoiceEdit line 25:", this.props.invoice.id)
        const { businessId, invoiceNumber, date, dateShipped, driver, shippersNumbers, description_Commodity, weight_Quantity, charges, shipper, consignee, rate, userId } = this.props.invoice;
        const { handleSubmit, submitting } = this.props;
        // console.log(this.props);

        return (
            <div>
                <h2>Edit Invoice No. {invoiceNumber}</h2>
                <InvoiceForm
                    onSubmit={this.onSubmit}
                    initialValues={this.props.invoice.id}
                />
            </div>
        )
    }

}

//initial values
const mapStateToProps = state => {
    return {
        invoice: state.invoices.invoiceSelected
    }
}

InvoiceEdit = reduxForm({
    form: 'invoiceEdit',
    destroyOnUnmount: false
})(InvoiceEdit)

export default connect(mapStateToProps, { editInvoice, selectInvoice })(InvoiceEdit)
