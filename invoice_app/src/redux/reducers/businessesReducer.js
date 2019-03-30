import {
    CREATE_BUSINESS_SUCCESS, 
    FETCH_BUSINESSES_PENDING,
    FETCH_BUSINESSES_SUCCESS
} from '../actions/types';

const initState = {
    businesses: [], 
    business: {}
}

export default function (state = initState, action) {
    switch (action.type) {
        case CREATE_BUSINESS_SUCCESS:
            return {
                ...state,
                business: action.payload
            }
            

        case 'GET_BUSINESS_LIST':
            return [...state, action.payload]
        
        case 'GET_BUSINESS':
            return [...state, action.payload]


    
        default:
            return state
    }

}

