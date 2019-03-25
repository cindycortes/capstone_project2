import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectInvoice } from '../redux/actions/invoiceAction'

class SingleInvoice extends Component {
    
    componentDidMount() {
        this.props.selectInvoice();
    }

    
    render () {
        return (
            <div>
                <h2>Single Invoice </h2>
                
            </div>
        )
    }
}

export default connect(null, {selectInvoice}) (SingleInvoice);