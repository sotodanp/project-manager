import { NavLink } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import Temple from '../../assets/temple.svg'
import './Navbar.css'
import { useAuthContext } from '../../hooks/useAuthContext'

const Navbar = () => {
    const { logout, isPending } = useLogout()
    const { user } = useAuthContext()

    return (
        <div className='navbar'>
            <ul>
                <li className='logo'>
                    <img src={Temple} alt="Project Logo" />
                    <span>Project Manage</span>
                </li>
                {!user && (<>
                    <li><NavLink className='navlink' to='/login'>Login</NavLink></li>
                    <li><NavLink className='navlink' to='/signup'>Signup</NavLink></li>
                </>)}
                {user && (<>

                    <li>
                        {!isPending && <button className='btn' onClick={logout}>Logout</button>}
                        {isPending && <button className='btn' disabled>Loading...</button>}
                    </li>
                </>)}
            </ul>
        </div>
    )
}

export default Navbar
