import {
    CREATE_BUSINESS_SUCCESS,
    FETCH_BUSINESSES_PENDING,
    FETCH_BUSINESSES_SUCCESS,
    GET_BUSINESS_LIST
} from './types';

import Axios from "axios";

export const fetchBusinesses = () => dispatch => {
    dispatch({
        type: FETCH_BUSINESSES_PENDING
    })
    Axios.get(`http://localhost:5000/api/business`)
        .then(response => {
            console.log("business list", response)
            dispatch({
                type: FETCH_BUSINESSES_SUCCESS,
                payload: response.data
            })
        })
}


export const getBusiness = id => {
    return (dispatch) => {
        Axios.get(`http://localhost:5000/api/business/${id}`)
            .then(response => {
                dispatch({
                    type: GET_BUSINESS_LIST,
                    payload: response
                })
            })
    }
}

export const createBusiness = newBusiness => dispatch => {
    const response = Axios.post(`http://localhost:5000/api/business/`, newBusiness)
    dispatch({
        type: CREATE_BUSINESS_SUCCESS,
        payload: response.data
    })
}