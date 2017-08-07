import { API_ERROR, API_REQUEST, API_SUCCESS } from 'constants/api'

export const fetchFailed = err => ({
    type : API_ERROR,
    payload : { err }
})

export const fetchSucceeded = data => ({
    type : API_SUCCESS,
    payload : { data }
})

export const fetchRequested = props => ({
    type : API_REQUEST,
    ...props
})
