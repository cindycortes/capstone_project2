import { connect } from 'react-redux'
import Invoices from '../../components/Invoices'
import { getInvoiceList, getInvoice, addInvoice, editInvoice, deleteInvoice } from '../actions/invoices'


const mapStateToProps = state => {
    return {
        getInvoiceList: state.invoices.getInvoiceList,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}