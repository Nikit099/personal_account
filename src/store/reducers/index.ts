import { userReducer } from './userReduser';
import { contactReducer } from './contactReducer';
import { combineReducers } from "redux";

export const rootReduser = combineReducers({
    contact: contactReducer,
    user: userReducer
})

export type RootState = ReturnType<typeof rootReduser>