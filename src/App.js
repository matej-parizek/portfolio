import './App.css';
import SideBar from './components/javascript/sidebar/SideBar';
import MainContant from './components/javascript/main/MainContent'
import FetchPortfolio from './components/javascript/api/GithubApi';

const App = () => {
    return (
        <main>
           {/*<SideBar/>*/}
           {/*<MainContant/>*/}
            <FetchPortfolio/>
        </main>
    );
}

export default App;

