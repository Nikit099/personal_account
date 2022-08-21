import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useActions } from './hooks/useActions';
import Authorization from './pages/authorization';
import ContactsList from './pages/contactsList'
import RequireAuth from './hoc/reauireAuth'


const App: FC = () => {
  const {fetchUsers, fetchContacts} = useActions()

  
  useEffect(() => {
    fetchUsers()
    fetchContacts()
  }, [])
  
  return (
  <div className="App">
    <Routes>
      <Route path='contacts' element={
        <RequireAuth>
          <ContactsList/>
        </RequireAuth>
      } />
      <Route path='auth' element={<Authorization/>} />
      
    </Routes>
  </div>
  )
  
}

export default App;
