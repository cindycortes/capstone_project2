import {
    FETCH_INVOICES,
    GET_INVOICE,
    NEW_INVOICE,
    EDIT_INVOICE,
    DELETE_INVOICE

} from './types';
import axios from 'axios';


export const fetchInvoices = () => dispatch => {
    console.log('fetching from action');
    axios.get(`http://localhost:5000/api/invoices`)
        .then(invoices => {
            console.log(invoices)
            dispatch({
                type: FETCH_INVOICES,
                payload: invoices
            })
        })

}


export const getInvoice = id => dispatch => {

    axios.get(`http://localhost:5000/api/invoices/${id}`)
        .then(invoice => {
            dispatch({
                type: GET_INVOICE,
                payload: invoice,
            })
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
