import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import invoiceReducer from './invoicesReducer';
// import businesses from './businessesReducer';
// import drivers from './driversReducer';

export default combineReducers({
    invoices: invoiceReducer, 
    form: formReducer,
    // businesses,
    // drivers
})