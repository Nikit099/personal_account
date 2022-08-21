import { UserAction, UserActionTypes, IUser } from './../../types/user';
import axios from 'axios';
import { Dispatch } from 'react';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('http://localhost:3001/users')
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        }catch (e) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Ошибка'})
        }
    }
}
export const logUser = (payload: IUser) => (
    {type: UserActionTypes.LOG_USER, payload: payload}
)