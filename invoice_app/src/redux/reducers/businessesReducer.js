const initState = {
    businesses: []
}

export default businesses = (state = initState, action) => {
    switch (action.type) {
        case 'GET_BUSINESS_LIST':
            return [...state, action.payload]
        
        case 'GET_BUSINESS':
            return [...state, action.payload]

        case 'ADD_BUSINESS':
            return [...state, action.payload]

    
        default:
            return state
    }

}

