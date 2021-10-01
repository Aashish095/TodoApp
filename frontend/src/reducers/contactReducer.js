
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

export const contactListReducer = (state = { contacts: [] }, action) => {
    switch (action.type) {
        case CONTACT_LIST_REQUEST:
            return { loading: true, contacts: [] }

        case CONTACT_LIST_SUCCESS:
            return { loading: false, contacts: action.payload }

        case CONTACT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }

}

export const contactPageReducer = (state = {}, action) => {
    switch (action.type) {
        case CONTACT_PAGE_REQUEST:
            return { loading: true }

        case CONTACT_PAGE_SUCCESS:
            return { loading: false, contacts: action.payload }

        case CONTACT_PAGE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }

}

export const contactDetailsReducer = (state = { contact: {} }, action) => {
    switch (action.type) {
        case CONTACT_DETAILS_REQUEST:
            return { ...state, loading: true }

        case CONTACT_DETAILS_SUCCESS:
            return { loading: false, contact: action.payload }

        case CONTACT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }

}

export const contactUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case CONTACT_UPDATE_REQUEST:
            return { loading: true }

        case CONTACT_UPDATE_SUCCESS:
            return { loading: false, success: true, contact: action.payload }

        case CONTACT_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }

}

export const contactDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case CONTACT_DELETE_REQUEST:
            return { loading: true }

        case CONTACT_DELETE_SUCCESS:
            return { loading: false, success: true, }

        case CONTACT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }

}

