import "../../css/main/MainContent.css"
import NavBar from "./navbar/NavBar.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import DataPage from './pages/DataPage.jsx'
import HeaderPage from "./pages/HeaderPage.jsx";


const MainContent = () => {
    return (
        <div className="main-content">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={
                        <HeaderPage
                            className={'about  active'}
                            page={<HomePage />}
                            name='Home' />} 
                        />
                    <Route path="/data" element={<DataPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default MainContent