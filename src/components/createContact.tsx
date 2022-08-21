import { Button, TextField } from '@mui/material';
import React, { FC } from 'react';
import { IValueCont } from '../pages/contactsList';

interface CreateContactProps {
    createContact(): void
    onChangeInput(e: React.ChangeEvent, type: string): void
    valueCont: IValueCont
 
}

const CreateContact: FC<CreateContactProps> = ({createContact,onChangeInput, valueCont}) => {
    
    return (
        <div  style={{display: 'flex', gap: '20px', marginBottom: '100px', marginTop: '40px'}}>
            <TextField
            value={valueCont.name}
            onChange={(e) => onChangeInput(e, 'name')}
          required
          id="standard-required"
          label="Name"
          variant="standard"
        />
          <TextField
          value={valueCont.tel}
          onChange={(e) => onChangeInput(e, 'tel')}
          id="standard-number"
          label="Tel"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <Button variant="contained" onClick={createContact} color='success' disableElevation>
            Success
        </Button>
            
        </div>
    );
};

export default CreateContact;