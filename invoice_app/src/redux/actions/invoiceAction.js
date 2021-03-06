import {
    FETCH_INVOICES_SUCCESS,
    FETCH_INVOICES_PENDING,
    FETCH_INVOICES_FAILED,
    FILTER_INVOICES,
    INVOICE_SELECTED,
    CREATE_INVOICE,
    EDIT_INVOICE_SUCCESS,
    EDIT_INVOICE_PENDING,
    EDIT_INVOICE_FAILED,
    EDIT_BUTTON,
    DELETE_INVOICE_FAILED,
    DELETE_INVOICE_PENDING,
    DELETE_INVOICE_SUCCESS

} from './types';
import axios from 'axios';


export const fetchInvoices = () => dispatch => {
    console.log('fetching from action');
    dispatch({
        type: FETCH_INVOICES_PENDING
    })
    axios.get(`http://localhost:5000/api/invoices`)
        .then(invoiceList => {
            console.log(invoiceList)
            dispatch({
                type: FETCH_INVOICES_SUCCESS,
                payload: invoiceList.data

            })
        })
        .catch(error => {
            dispatch({
                type: FETCH_INVOICES_FAILED,
                payload: "Error in fetching invoices", error
            })
        })
}

export const filterInvoices = filterObj => {
    return dispatch => {
        dispatch({
            type: FILTER_INVOICES,
            payload: filterObj
        })
    }
}


export const selectInvoice = id => dispatch => {
    console.log("you clicked on invoice:", id)
    axios.get(`http://localhost:5000/api/invoices/${id}`)
        .then(invoice => {
            console.log('selected invoice:', invoice)
            dispatch({
                type: INVOICE_SELECTED,
                payload: invoice.data
            })
        })
        .catch(err => {
            console.log(err)
        })

}

export const editInvoice = (id, values) => dispatch => {
    console.log('edit INvoice function values:', values)
    dispatch({
        type: EDIT_INVOICE_PENDING
    })
    axios.put(`http://localhost:5000/api/invoices/${id}`, values)

        .then(response => {
            dispatch({
                type: EDIT_INVOICE_SUCCESS,
                payload: response.data

            })
        })
        .catch(err => {
            dispatch({
                type: EDIT_INVOICE_FAILED,
                payload: "error in submitting edit form", err
            })
            console.log(err)
        })
}

export const editButton = (id) => dispatch => {
    console.log("edit action button has been clicked", id)
    dispatch({
        type: EDIT_BUTTON,
        payload: "edit button clicked"
        
    })
}

export const deleteInvoice = id => dispatch => {
    console.log('you clicked on deleteinvoice id:', id)
    dispatch({
        type: DELETE_INVOICE_PENDING
    })
    axios.delete(`http://localhost:5000/api/invoices/${id}`)
        .then(invoice => {
            console.log("delete invoice :", invoice)
            dispatch({
                type: DELETE_INVOICE_SUCCESS,
                payload: id
            })
        })
        .catch(error => {
            dispatch({
                type: DELETE_INVOICE_FAILED,
                payload: "Error in deleting invoice", error
            })
        })
}



export const createInvoice = newInvoice => dispatch => {
    const response = axios.post(`http://localhost:5000/api/invoices`, newInvoice)
    dispatch({
        type: CREATE_INVOICE,
        payload: response.data
    })
}





