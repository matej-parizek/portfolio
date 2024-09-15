import '../../../css/main/navbar/NavBar.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const handleButtonClick = (navigate, setLocation, link, id) => {
    setLocation(id);
    sessionStorage.setItem('location', id);
    navigate(link);
};

const Buttons = ({ id, link, name, setLocation }) => {
    const navigate = useNavigate();
    return (
        <button
            className='navbar-link'
            id={id}
            onClick={() => handleButtonClick(navigate, setLocation, link, id)}>
            {name}
        </button>
    );
}

const NavBar = ({Nav, location, setLocation}) => {

    useEffect(() => {
        const button = document.querySelector(`.navbar-link[id='${location}']`);
        button.style.color = 'var(--orange-yellow-crayola)';
        return ( () => {
            button.style.color = 'var(--light-gray)';
        })
    })

    return <nav className='navbar'>
        <ul className='navbar-list'>
            {
                Nav.map((item) => {
                    const { id, link, name } = item
                    return <li className='navbar-item' key={id}>
                       <Buttons name = {name} link={link} id={id} setLocation={setLocation}/>
                    </li>
                })
            }
        </ul>
    </nav>
}

export default NavBar