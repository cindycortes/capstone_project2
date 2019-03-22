import Axios from "axios";

export const getBusinessList = () => {
    return(dispatch) => {
        Axios.get(`http://localhost:5000/api/business`)
            .then(response => {
                dispatch({
                    type: GET_BUSINESS_LIST, 
                    payload: response
                })
            })
    }
}

export const getBusiness = () => {
    return(dispatch) => {
        Axios.get(`http://localhost:5000/api/business/${id}`)
            .then(response => {
                dispatch({
                    type: GET_BUSINESS, 
                    payload: response
                })
            })
    }
}

export const addBusiness = newBusiness => {
    return(dispatch) => {
        Axios.post(`http://localhost:5000/api/business/${id}`, newBusiness)
            .then(response => {
                dispatch({
                    type: ADD_BUSINESS, 
                    payload: response
                })
            })
    }
}