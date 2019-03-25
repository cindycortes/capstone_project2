import {
    FETCH_INVOICES_SUCCESS,
    FETCH_INVOICES_PENDING,
    FETCH_INVOICES_FAILED,
    SELECT_INVOICE,
    NEW_INVOICE,
    EDIT_INVOICE,
    DELETE_INVOICE

} from '../actions/types';


const initialState = {
    invoiceList: [],
    invoice: {}, // single invoice that we add
    fetchingInvoices: false,
   
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_INVOICES_SUCCESS:
            console.log('reducer')
            return {
                ...state,
                invoiceList: action.payload,
                fetchingInvoices: false
            };
        case FETCH_INVOICES_PENDING:
            return {
                ...state,
                fetchingInvoices: true
            }
        case FETCH_INVOICES_FAILED:
            return {
                ...state,
                fetchingInvoices: true
            }

        case SELECT_INVOICE:
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



