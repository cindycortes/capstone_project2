import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import invoiceReducer from './invoicesReducer';
import businessesReducer from './businessesReducer';
import driversReducer from './driversReducer';

export default combineReducers({
    invoices: invoiceReducer, 
    businesses: businessesReducer,
    form: formReducer,
    drivers: driversReducer
})