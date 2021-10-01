import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { contactListReducer, contactPageReducer, contactDetailsReducer, contactUpdateReducer, contactDeleteReducer } from './reducers/contactReducer'

const reducer = combineReducers({
    contactList: contactListReducer,
    contactPage: contactPageReducer,
    contactDetails: contactDetailsReducer,
    contactUpdate: contactUpdateReducer,
    contactDelete: contactDeleteReducer,
})

const contactInfoFromStorage = localStorage.getItem('contactInfo') ?
    JSON.parse(localStorage.getItem('cartItem')) : null

const initialState = {
    contact: { contactInfo: contactInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store