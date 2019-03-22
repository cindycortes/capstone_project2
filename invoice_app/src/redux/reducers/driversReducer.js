const initState = {
    drivers: []
}

export default drivers = (state = initState, action) => {
    switch (action.type) {
        case 'GET_DRIVERS_LIST':
            return [...state, action.payload]
        
        case 'GET_DRIVER':
            return [...state, action.payload]

        case 'ADD_DRIVER':
            return [...state, action.payload]

    
        default:
            return state
    }

}
