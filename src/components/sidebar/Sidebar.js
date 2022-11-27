import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'

import './Sidebar.css'
import DashboardIcon from '../../assets/dashboard_icon.svg'
import AddIcon from '../../assets/add_icon.svg'
import Avatar from '../avatar/Avatar'

const Sidebar = () => {
    const { user } = useAuthContext()
    return (
        <div className='sidebar'>
            <div className="sidebar-content">
                <div className="user">
                    <Avatar src={user.photoURL} />
                    <p>Hey {user.displayName}</p>
                </div>
                <nav className='links'>
                    <ul>
                        <li>
                            <NavLink className='navlink' to='/'>
                                <img src={DashboardIcon} alt='dashboard icon'></img>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='navlink' to='/create'>
                                <img src={AddIcon} alt='add project icon'></img>
                                <span>New Project</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
