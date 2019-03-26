import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import invoices from './invoicesReducer';
// import businesses from './businessesReducer';
// import drivers from './driversReducer';

export default combineReducers({
    invoices, 
    form: formReducer
    // businesses,
    // drivers
})