export interface ContactState {
    contacts: IContact[]
    loading: boolean
    error: null | string
}
export interface IContact {
    id?: number
    name?: string
    tel?: string
}
export enum ContactActionTypes{
    CREATE_CONTACT = 'CREATE_CONTACT',
    REMOVE_EDIT_CONTACT = 'REMOVE_EDIT_CONTACT',
    FETCH_CONTACTS = 'FETCH_CONTACTS',
    FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
    FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR'
}
interface CreateContactAction{
    type: ContactActionTypes.CREATE_CONTACT
    payload: IContact
}
interface RemoveEditContactAction{
    type: ContactActionTypes.REMOVE_EDIT_CONTACT
    payload: number
}
interface FetchContactsActon{
    type: ContactActionTypes.FETCH_CONTACTS
   
}
interface FetchContactsSuccessActon{
    type: ContactActionTypes.FETCH_CONTACTS_SUCCESS
    payload: IContact[]
}
interface FetchContactsErrorActon{
    type: ContactActionTypes.FETCH_CONTACTS_ERROR
    payload: string
}
export type ContactAction = CreateContactAction | RemoveEditContactAction | FetchContactsActon | FetchContactsSuccessActon | FetchContactsErrorActon