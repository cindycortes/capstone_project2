import {
    FETCH_INVOICES,
    FETCHING_INVOICES,
    GET_INVOICE,
    NEW_INVOICE,
    EDIT_INVOICE,
    DELETE_INVOICE
 
} from '../actions/types';


const initialState = {
    invoices: [],
    invoice: {}, // single invoice that we add
    fetchingInvoices: false, 
    // fetchingInvoicesSuccess: false,
    // fetchingInvoicesError: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_INVOICES:
        console.log('reducer')
            return {
                ...state,
                invoices: action.payload,
                fetchingInvoices: false
            };
        case FETCHING_INVOICES:
            return {
                ...state,
                fetchingInvoices: true
            }    

        case GET_INVOICE:
            return {
                ...state,
                invoice: action.payload
            };

        case NEW_INVOICE:
            return {
                ...state,
                invoice: action.payload
            };

        case EDIT_INVOICE:
            return {
                ...state
            }
        case DELETE_INVOICE: 
            return {
                ...state
            }    


        default:
            return state
    }

}



