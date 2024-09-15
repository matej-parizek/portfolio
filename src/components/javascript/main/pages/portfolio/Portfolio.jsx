import '../../../../css/main/pages/portfolio/Portfolio.css'
import PortfolioFilterBox from "./PortfolioFilterBox"
import PortfolioList from "./PortfolioList"
import PortfolioFilter from './PortfolioFilter'

const Portfolio = () =>{
    return <section className='projects'>
            <PortfolioFilterBox/>
            <PortfolioFilter/>
            <PortfolioList/>
    </section>
}

export default Portfolio