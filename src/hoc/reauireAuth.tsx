import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface ReauireAuthProps{
    children: JSX.Element;
}

const RequireAuth: FC<ReauireAuthProps> = ({children})=> {
    const {users} = useTypedSelector(state => state.user)
    
    
    if(!users.filter(user => user.login === true).length){        
        return <Navigate to ='/auth'  />
    }
    return  children
   
};

export default RequireAuth;