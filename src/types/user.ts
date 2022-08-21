export interface UserState {
    users: IUser[]
    loading: boolean
    error: null | string
}
export interface IUser {
    email: string
    password: string
    login: boolean
}
export enum UserActionTypes{
    LOG_USER = 'LOG_USER',
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}
interface FetchUsersActon{
    type: UserActionTypes.FETCH_USERS
   
}
interface FetchUsersSuccessActon{
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: IUser[]
}
interface FetchUsersErrorActon{
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}
interface LogUser{
    type: UserActionTypes.LOG_USER
    payload: IUser
}
export type UserAction =  FetchUsersActon | FetchUsersSuccessActon | FetchUsersErrorActon | LogUser
