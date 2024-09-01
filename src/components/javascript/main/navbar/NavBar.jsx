import '../../../css/main/navbar/NavBar.css'
import {Nav} from '../../../../data/navigate'
import { Link } from 'react-router-dom'


const NavBar = () => {

    return <nav className='navbar'>
        <ul className='navbar-list'>
            {
                Nav.map((item) => {
                    const { link, name } = item
                    return <li>
                        <Link to={link}>{name}</Link>
                    </li>
                })
            }
        </ul>
    </nav>
}

export default NavBar