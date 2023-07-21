

import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'


function App() {

  /*** estado que controla al formulario modal ***/
  const [closeForm, setCloseForm] = useState(true)

  /*** Enviar informacion a form user desde userCart ***/
  const [updateInfo, setUpdateInfo] = useState()

  /**** peticion axios con el custom hook ****/
  const baseUrl = 'https://users-crud.academlo.tech'
  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] = useFetch(baseUrl, setCloseForm)

  useEffect(() => {
    getAllUsers('/users')
  },[])

  console.log(users)

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  return (
    <div>
      <div className='user__car-header'>
        <h1>User</h1>
        <button onClick={handleOpenForm} className='btn__open-form'>Open form </button>
      </div>
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className='user__card'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
