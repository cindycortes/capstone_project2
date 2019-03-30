import {
    CREATE_BUSINESS_SUCCESS,
    FETCH_BUSINESSES_PENDING,
    FETCH_BUSINESSES_SUCCESS,
    FETCH_BUSINESSES_FAILED,
    CREATE_BUSINESS_FAILED,
    BUSINESS_SELECTED

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
        .catch(error => {
            dispatch({
                type: FETCH_BUSINESSES_FAILED,
                payload: "Error in fetching businesses"
            })
        })
}


export const getBusiness = id => dispatch => {
    console.log("You clicked on business Id: ", id)
    Axios.get(`http://localhost:5000/api/business/${id}`)
        .then(response => {
            dispatch({
                type: BUSINESS_SELECTED,
                payload: response.data
            })
        })
}


export const createBusiness = newBusiness => dispatch => {
    const response = Axios.post(`http://localhost:5000/api/business/`, newBusiness)
    dispatch({
        type: CREATE_BUSINESS_SUCCESS,
        payload: response.data
    })
       
}