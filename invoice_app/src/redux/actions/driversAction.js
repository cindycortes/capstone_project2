import {
    CREATE_DRIVER_SUCCESS,
    FETCH_DRIVERS_PENDING,
    FETCH_DRIVERS_SUCCESS,
    FETCH_DRIVERS_FAILED,
    DRIVER_SELECTED

} from './types';

import Axios from "axios";

export const fetchDrivers = () => dispatch => {
    dispatch({
        type: FETCH_DRIVERS_PENDING
    })
    Axios.get(`http://localhost:5000/api/drivers`)
        .then(response => {
            console.log("drivers list", response)
            dispatch({
                type: FETCH_DRIVERS_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: FETCH_DRIVERS_FAILED,
                payload: "Error in fetching drivers"
            })
        })
}


export const getDriver = id => dispatch => {
    console.log("You clicked on driver Id: ", id)
    Axios.get(`http://localhost:5000/api/drivers/${id}`)
        .then(response => {
            dispatch({
                type: DRIVER_SELECTED,
                payload: response.data
            })
        })
}


export const createDriver = newDriver => dispatch => {
    const response = Axios.post(`http://localhost:5000/api/drivers/`, newDriver)
    dispatch({
        type: CREATE_DRIVER_SUCCESS,
        payload: response.data
    })
       
}