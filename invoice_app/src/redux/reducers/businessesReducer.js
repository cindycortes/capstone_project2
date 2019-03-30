import {
    CREATE_BUSINESS_SUCCESS, 
    FETCH_BUSINESSES_PENDING,
    FETCH_BUSINESSES_SUCCESS,
    FETCH_BUSINESSES_FAILED, 
    CREATE_BUSINESS_FAILED
} from '../actions/types';

const initState = {
    businessList: [], 
    business: {},
    fetchingBusinesses: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case FETCH_BUSINESSES_SUCCESS:
            return {
                ...state,
                businessList: action.payload, 
                fetchingBusinesses: false,

            }
        case FETCH_BUSINESSES_PENDING:
            return {
                ...state,
                fetchingBusinesses: true
            }
        case FETCH_BUSINESSES_FAILED:
            return {
                ...state,
                fetchingBusinesses: true
            }        
        case CREATE_BUSINESS_SUCCESS:
            return {
                ...state,
                business: action.payload
            }
        case CREATE_BUSINESS_FAILED: 
            return {
                ...state
            }    
            

        
        case 'GET_BUSINESS':
            return [...state, action.payload]


    
        default:
            return state
    }

}

