import React, { Component } from 'react';
import Invoices from './Invoices';
import NewInvoiceForm from './NewInvoiceForm';


class Dashboard extends Component {

    // deleteInvoice = (id) => {
    //     const invoices = this.state.invoices.filter(invoice => {
    //         return invoice.id !== id
    //     });
    //     this.setState({
    //         invoices: invoices
    //     })
    // }
    // addInvoice = (invoice) => {
    //     invoice.id = Math.random();
    //     let invoices = [...this.state.invoices, invoice];
    //     this.setState({
    //         invoices: invoices
    //     })
    // }


    render() {
        return (
            <div className="Dashboard container">
                <Invoices  />
                {/* <NewInvoiceForm addInvoice={this.addInvoice} /> */}
            </div>
        )
    }

}

export default Dashboard;