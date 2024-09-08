import "../../css/main/MainContent.css"
import NavBar from "./navbar/NavBar.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataPage from './pages/DataPage.jsx'
import HeaderPage from "./pages/HeaderPage.jsx"
import { Nav } from '../../../data/navigate'



const MainContent = () => {
    return (
        <div className="main-content">
            <Router>
                <NavBar Nav={Nav} />
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