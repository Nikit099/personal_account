import { Button, TextField } from '@mui/material';
import React, { FC,  useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IUser } from '../types/user';
import { Link } from 'react-router-dom';

interface IAuth{
  email: string
  password: string
}



const Authorization: FC = () => {
  const {error, users} = useTypedSelector(state => state.user)
  const [auth, setAuth] = useState<IAuth>({email: '', password: ''})
  const { logUser} = useActions()
  const  login = ()  =>  {
    const user = users.find((user) => user.email === auth.email)
    if(user){
      const newUser: IUser = {...user, login: true}
      logUser(newUser)
    }
    
  }
 
  if(error){
   return <h1>Попробуйте зайти позже, мы не можем получить данные о пользователях</h1>
  }
  
    return (
        <div  style={{display: 'flex', gap: '30px', margin: '200px 0', flexDirection: 'column', alignItems: 'center'}}>
            <Card  sx={{ width: 445 }}>
      <CardActionArea >
       
        <CardContent style={{display: 'flex', gap: '30px',  flexDirection: 'column', }}>
          <Typography gutterBottom variant="h5" component="div">
            Login
          </Typography>
          <TextField
          onChange={e => setAuth({...auth, email: e.target.value})}
          value={auth.email}
          required
          id="standard-required"
          label="Email"
          variant="standard"
        />
        <TextField
        onChange={e => setAuth({...auth, password: e.target.value})}
          value={auth.password}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <Link className='link' to='/contacts'>
          <Button variant="contained" onClick={login} color='primary' disableElevation>
            Войти
        </Button>
        </Link>
        </CardContent>
      </CardActionArea>
    </Card>
      
        </div>
    );
};

export default Authorization;