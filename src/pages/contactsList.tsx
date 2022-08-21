import React, { FC, useState } from 'react';
import Contact from '../components/contact';
import { useTypedSelector } from '../hooks/useTypedSelector';
import List from '@mui/material/List';
import CreateContact from '../components/createContact';
import { useActions } from '../hooks/useActions';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { IUser } from '../types/user';

export interface IValueCont{
    name: string | undefined
    tel: string | undefined
}

const ContactsList: FC = () => {
   const {contacts, loading, error} = useTypedSelector(state => state.contact)
   const {users} = useTypedSelector(state => state.user)
   const [valueCont, setValueCont] = useState<IValueCont>({name: '', tel: '7'})
   const [searchQuery, setSearchQuery] = useState<string>("");
   const {createContactAction, removeEditAction, logUser} = useActions()

   
    const createContact = () => {
        if(valueCont.name && valueCont.tel){
            createContactAction(
                {
                    id: new Date().getTime(),
                    name: valueCont.name,
                    tel: valueCont.tel
                }
            )
            setValueCont({name: '', tel: '7'})    
        }
    }
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        setValueCont({...valueCont, [type]: e.target.value})
    }
    const removeContact = (id: number ) => {
        removeEditAction(id)
    }
    const editContact = (id: number ) => {
        if(valueCont.name && valueCont.tel){
            createContactAction(
                {
                    id: new Date().getTime(),
                    name: valueCont.name,
                    tel: valueCont.tel
                }
            )
        }
            const contact = contacts.find(cont => cont.id === id)
            setValueCont({name: contact?.name, tel: contact?.tel})  
            removeEditAction(id)
        
    }
    const  logout = ()  =>  {
        const user = users.find((user) => user.login === true)
        if(user){
          const newUser: IUser = {...user, login: false}
          logUser(newUser)
        }
        
      }
    if(loading){
        return <h1>Контакты загружаются...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    return  (
        <div  style={{display: 'flex', flexDirection: 'column',  alignItems: 'center'}} >
            <div className="top_cont">
                    <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    variant="standard"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Link className='link' to='/auth'>
                        <Button onClick={logout} variant="contained" color='error' disableElevation>
                            Выйти
                        </Button>
                    </Link>
            </div>
      
        <CreateContact onChangeInput={onChangeInput} valueCont={valueCont} createContact={createContact}/>
       
        {

            contacts.length ? (
                
                <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
                    {contacts.map(cont => {
                           if(searchQuery === '' || cont.name?.toLowerCase().includes(searchQuery.toLowerCase())){
                            return(
                                <Contact editContact={editContact} removeContact={removeContact} key={cont.id} {...cont} />
                            )
                        }
                        return null
                    })}
                </List>
                        
                    
                    ) : (
                        <h1>Контактов нет</h1>
                    )
        }
        
        </div>
    )
    
};

export default ContactsList;