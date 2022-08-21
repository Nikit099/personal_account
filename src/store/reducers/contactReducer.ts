import { ContactState, ContactAction, ContactActionTypes } from './../../types/contact';

const initialState: ContactState = {
    contacts: [],
   loading: false,
   error: null 
} 

export const contactReducer = (state = initialState, action: ContactAction): ContactState  => {
    switch(action.type){
        case ContactActionTypes.CREATE_CONTACT: 
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case ContactActionTypes.REMOVE_EDIT_CONTACT: 
            return {
                ...state,
                contacts: state.contacts.filter(cont => cont.id !== action.payload)
            }
        case ContactActionTypes.FETCH_CONTACTS: 
            return {loading: true, error: null, contacts: []}
        case ContactActionTypes.FETCH_CONTACTS_SUCCESS: 
            return {loading: false, error: null, contacts: action.payload}
        case ContactActionTypes.FETCH_CONTACTS_ERROR: 
            return {loading: true, error: action.payload, contacts: []}
        default:
            return state;
    }
}