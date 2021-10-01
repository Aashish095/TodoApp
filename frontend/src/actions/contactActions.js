import axios from 'axios'
import {
    CONTACT_LIST_REQUEST,
    CONTACT_LIST_SUCCESS,
    CONTACT_LIST_FAIL,

    CONTACT_PAGE_SUCCESS,
    CONTACT_PAGE_REQUEST,
    CONTACT_PAGE_FAIL,

    CONTACT_DETAILS_SUCCESS,
    CONTACT_DETAILS_REQUEST,
    CONTACT_DETAILS_FAIL,

    CONTACT_UPDATE_SUCCESS,
    CONTACT_UPDATE_REQUEST,
    CONTACT_UPDATE_FAIL,

    CONTACT_DELETE_SUCCESS,
    CONTACT_DELETE_REQUEST,
    CONTACT_DELETE_FAIL,
} from '../constants/contactConstant'

export const listContacts = () => async (dispatch) => {
    try {

        dispatch({ type: CONTACT_LIST_REQUEST })
        const { data } = await axios.get('http://127.0.0.1:8000/api/task-list/')
        dispatch({
            type: CONTACT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CONTACT_LIST_FAIL,
            payload: error.reponse && error.reponse.data.message
                ? error.reponse.data.message
                : error.message,
        })
    }

}

export const pageContacts = (name, phone) => async (dispatch) => {
    try {

        dispatch({ type: CONTACT_PAGE_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'http://127.0.0.1:8000/api/task-create/',
            { 'name': name, 'phone': phone }, config
        )

        dispatch({
            type: CONTACT_PAGE_SUCCESS,
            payload: data

        })

        localStorage.setItem('contactInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: CONTACT_PAGE_FAIL,
            payload: error.reponse && error.reponse.data.message
                ? error.reponse.data.message
                : error.message,
        })
    }

}

export const pageDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: CONTACT_DETAILS_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/task-details/${id}/`,
            config
        )


        dispatch({
            type: CONTACT_DETAILS_SUCCESS,
            payload: data

        })

    } catch (error) {
        dispatch({
            type: CONTACT_DETAILS_FAIL,
            payload: error.reponse && error.reponse.data.message
                ? error.reponse.data.message
                : error.message,
        })
    }

}


export const updateProfile = (contact, id) => async (dispatch) => {
    try {

        dispatch({ type: CONTACT_UPDATE_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            `http://127.0.0.1:8000/api/task-update/${id}/`,
            contact,
            config
        )
        console.log(data);

        dispatch({
            type: CONTACT_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CONTACT_UPDATE_FAIL,
            payload: error.reponse && error.reponse.data.message
                ? error.reponse.data.message
                : error.message,
        })
    }

}


export const deleteProfile = (id) => async (dispatch) => {
    try {

        dispatch({ type: CONTACT_DELETE_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.delete(
            `http://127.0.0.1:8000/api/task-delete/${id}/`,

            config
        )
        console.log(data);

        dispatch({
            type: CONTACT_DELETE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CONTACT_DELETE_FAIL,
            payload: error.reponse && error.reponse.data.message
                ? error.reponse.data.message
                : error.message,
        })
    }

}


