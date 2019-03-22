import Axios from "axios";

export const getDriversList = () => {
    return(dispatch) => {
        Axios.get(`http://localhost:5000/api/drivers`)
            .then(response => {
                dispatch({
                    type: GET_DRIVERS_LIST, 
                    payload: response
                })
            })
    }
}

export const getDriver = () => {
    return(dispatch) => {
        Axios.get(`http://localhost:5000/api/drivers/${id}`)
            .then(response => {
                dispatch({
                    type: GET_DRIVER, 
                    payload: response
                })
            })
    }
}

export const addDriver = newDriver => {
    return(dispatch) => {
        Axios.post(`http://localhost:5000/api/drivers/${id}`, newDriver)
            .then(response => {
                dispatch({
                    type: ADD_DRIVER, 
                    payload: response
                })
            })
    }
}