import {
    CREATE_DRIVER_SUCCESS,
    FETCH_DRIVERS_PENDING,
    FETCH_DRIVERS_SUCCESS,
    FETCH_DRIVERS_FAILED,
    DRIVER_SELECTED
} from '../actions/types';

const initState = {
    driversList: [], 
    driver: {}, // create new business
    fetchingDrivers: false, 
    driverSelected: []
}

export default function (state = initState, action) {
    switch (action.type) {
        case FETCH_DRIVERS_SUCCESS:
            return {
                ...state,
                driversList: action.payload, 
                fetchingDrivers: false,

            }
        case FETCH_DRIVERS_PENDING:
            return {
                ...state,
                fetchingDrivers: true
            }
        case FETCH_DRIVERS_FAILED:
            return {
                ...state,
                fetchingDrivers: true
            }        
        case CREATE_DRIVER_SUCCESS:
            return {
                ...state,
                driver: action.payload
            }
          
        case DRIVER_SELECTED:
            return {
                ...state,
                driverSelected: action.payload
            }

        default:
            return state
    }

}
