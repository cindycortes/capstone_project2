import { combineReducers } from 'redux';
import invoices from './invoicesReducer';
// import businesses from './businessesReducer';
// import drivers from './driversReducer';

export default combineReducers({
    invoices, 
    // businesses,
    // drivers
})