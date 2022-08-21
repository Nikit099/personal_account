import React, { FC } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';

interface ContactProps {
    name?: string
    id?: number 
    tel?: string
    editContact(id: number | undefined ): void
    removeContact(id: number | undefined): void
}

const Contact: FC<ContactProps> = ({ name, tel, id, editContact, removeContact}) => {
   

    
    return  (
       <>
        <ListItem
       
       disableGutters
       secondaryAction={
           <>
            <IconButton onClick={() => editContact(id)}  aria-label="create">
             <CreateIcon/>
           </IconButton>
           <IconButton aria-label="delete" onClick={() => removeContact(id)} >
             <DeleteIcon/>
           </IconButton>
          
           </>
       }
     >
       <ListItemText primary={`${name} - +${tel}`} />
     </ListItem>
     <hr/>
       </>

        ) 
};

export default Contact;