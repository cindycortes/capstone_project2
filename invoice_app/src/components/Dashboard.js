import React, { Component } from 'react';
import Invoices from './Invoices';


import { Row } from 'reactstrap'

class Dashboard extends Component {

    // addInvoice = (invoice) => {
    //     invoice.id = Math.random();
    //     let invoices = [...this.state.invoices, invoice];
    //     this.setState({
    //         invoices: invoices
    //     })
    // }


    render() {
        return (
            <div className="Dashboard">
                
                <Invoices />


            </div>
        )
    }

}

export default Dashboard;