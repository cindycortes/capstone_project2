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

} from '../actions/types';


const initialState = {
    invoiceList: [],
    invoiceSelected: [],
    invoice: {}, // single invoice that we add
    fetchingInvoices: false,
    deletingInvoice: false

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

        case INVOICE_SELECTED:
            return {
                ...state,
                invoiceSelected: action.payload
            };

        case CREATE_INVOICE:
            return {
                ...state,
                invoice: action.payload
            };

        case EDIT_INVOICE:
            return {
                ...state
            }
        case DELETE_INVOICE_PENDING:
            return {
                ...state,
                deletingInvoice: true
            }
        
        case DELETE_INVOICE_SUCCESS:
            const id = action.payload
            return {
                ...state,
                invoiceList: state.invoiceList.filter(item => item.id !== id),
                // invoices.filter((invoice) => invoice.id !== action.id)
                deletingInvoice: false

            }
        case DELETE_INVOICE_FAILED:
            return {
                ...state,
                deletingInvoice: true

            }    


        default:
            return state
    }

}



