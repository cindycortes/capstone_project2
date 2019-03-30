import {
    CREATE_BUSINESS,
    GET_BUSINESS,
    GET_BUSINESS_LIST
} from './types';

import Axios from "axios";

export const getBusinessList = () => {
    return (dispatch) => {
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
    return (dispatch) => {
        Axios.get(`http://localhost:5000/api/business/${id}`)
            .then(response => {
                dispatch({
                    type: GET_BUSINESS,
                    payload: response
                })
            })
    }
}

export const createBusiness = newBusiness => dispatch => {
    const response = axios.post(`http://localhost:5000/api/business/${id}`, newBusiness)
    dispatch({
        type: CREATE_BUSINESS,
        payload: response.data
    })
}