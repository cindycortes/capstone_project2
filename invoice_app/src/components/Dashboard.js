import React, { Component } from 'react';
import Invoices from './Invoices';


import { Row } from 'reactstrap'

class Dashboard extends Component {


    render() {
        return (
            <div className="Dashboard">
                
                <Invoices />


            </div>
        )
    }

}

export default Dashboard;