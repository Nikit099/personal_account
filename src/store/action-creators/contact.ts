import axios from 'axios';
import { Dispatch } from 'react';
import { ContactAction, ContactActionTypes, IContact } from './../../types/contact';

export const createContactAction = (payload: IContact) => (
    {
        type: ContactActionTypes.CREATE_CONTACT, payload: payload 
    }
)
export const removeEditAction = (payload: number) => (
    {
        type: ContactActionTypes.REMOVE_EDIT_CONTACT, payload: payload 
    }
)
export const fetchContacts = () => {
    return async (dispatch: Dispatch<ContactAction>) => {
        try{
            dispatch({type: ContactActionTypes.FETCH_CONTACTS})
            const response = await axios.get('http://localhost:3001/contacts')
            dispatch({type: ContactActionTypes.FETCH_CONTACTS_SUCCESS, payload: response.data})
        }catch (e) {
            dispatch({type: ContactActionTypes.FETCH_CONTACTS_ERROR, payload: 'Ошибка'})
        }
    }
}