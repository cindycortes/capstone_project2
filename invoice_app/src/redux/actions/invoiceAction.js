import {
    FETCH_INVOICES_SUCCESS,
    FETCH_INVOICES_PENDING,
    FETCH_INVOICES_FAILED,
    INVOICE_SELECTED,
    CREATE_INVOICE,
    EDIT_INVOICE,
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
                payload: "Error in fetching invoices"
            })
        })
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

export const editInvoice = (id, formValues) => dispatch => {
    console.log('you are currently viewing edit id:', id)
    axios.put(`http://localhost:5000/api/invoices/${id}`, formValues)

        .then(response => {
            dispatch({
                type: EDIT_INVOICE,
                payload: response.data
                
            })
        })
        .catch(err => {
            console.log(err)
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




