import {
    FETCH_INVOICES_SUCCESS,
    FETCH_INVOICES_PENDING,
    FETCH_INVOICES_FAILED,
    SELECT_INVOICE,
    NEW_INVOICE,
    EDIT_INVOICE,
    DELETE_INVOICE

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
            dispatch({
                type: SELECT_INVOICE,
                payload: invoice,
            })
        })
        .catch(err => {
            console.log(err)
        })

}

export const createInvoice = postData => dispatch => {

    axios.post(`http://localhost:5000/api/invoices`, postData)
        .then(function (invoice) {
            console.log(invoice);
            dispatch({
                type: NEW_INVOICE,
                payload: invoice

            })
        })

}

export const editInvoice = id => dispatch => {

    axios.put(`http://localhost:5000/api/invoices/${id}`)
        .then(invoice => {
            dispatch({
                type: EDIT_INVOICE,
                payload: invoice
            })
        })


}


export const deleteInvoice = id => dispatch => {
    axios.delete(`http://localhost:5000/api/invoices/${id}`)
        .then(response => {
            dispatch({
                type: DELETE_INVOICE,
                payload: response
            })
        })

}
