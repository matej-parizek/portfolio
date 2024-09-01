import '../../../css/main/navbar/NavBar.css'
import { Nav } from '../../../../data/navigate'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const handleButtonClick = (navigate, setLocation, link, id) =>{
    navigate(link);
    setLocation(id);
}


const Buttons = ({ id, link, name, setLocation }) => {
    const navigate = useNavigate();

    return (
        <button
            className='navbar-link'
            id={id}
            onClick={() => handleButtonClick(navigate, setLocation, link, id)}
        >
            {name}
        </button>
    );
}

const NavBar = () => {
    const [location, setLocation] = useState(0)
    useEffect(() => {
        const button = document.querySelector(`.navbar-link[id='${location}']`) 
        console.log(`click ${location}`)  
        button.style.color = 'var(--orange-yellow-crayola)';
        return ( () => {
            button.style.color = 'blue';
            console.log(`unclick click ${location}`)
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