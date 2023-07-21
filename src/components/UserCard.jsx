
import './styles/UserCard.css'
const UserCard = ({user, deleteUserById, setUpdateInfo, handleOpenForm}) => {

    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }

    const handleUpdate = () => {
        setUpdateInfo(user)
        handleOpenForm()
    }
  return (
    <article className="card">
        <h2 className="card__title">{`${user.first_name} ${user.last_name}`}</h2>
        <hr />
        <ul className='card__ul'>
            <li>
                <span className='card__label'>Email: </span>
                <span className='card__data'>{user.email}</span>
            </li>
            <li>
                <span className='card__label'>Birthday: </span>
                <span className='card__data'>{user.birthday}</span>
            </li>
        </ul>
        <hr />
        <footer className="card__footer">
            <button className="btn btn__delete" onClick={handleDelete}><i className='bx bx-trash'></i></button>
            <button className="btn btn__update" onClick={handleUpdate}><i className='bx bx-edit'></i></button>
        </footer>
    </article>
  )
}

export default UserCard