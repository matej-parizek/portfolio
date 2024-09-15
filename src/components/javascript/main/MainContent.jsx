import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../../css/main/MainContent.css';
import NavBar from './navbar/NavBar.jsx';
import DataPage from './pages/DataPage.jsx';
import HeaderPage from './pages/HeaderPage.jsx';
import { Nav } from '../../../data/navigate';



const MainContent = () => {
    const storage = sessionStorage.getItem('location')
    console.log(storage)
    const [location, setLocation] = useState(()=> {
            return (storage === undefined || storage===null)? 0: storage
        });

    useEffect(() => {
        sessionStorage.setItem('location', location);
    }, [location]);

    return (
        <div className="main-content">
            <Router>
                <NavBar Nav={Nav} location={location} setLocation={setLocation} />
                <Routes>
                    {
                        Nav.map((item) => {
                            const { id, link, name, style, page } = item
                            return <Route key={id} path={link} element={
                                <HeaderPage
                                    className={style}
                                    name={name}
                                    page={page} />
                            } />
                        })
                    }

                    <Route path="*" element={<DataPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default MainContent