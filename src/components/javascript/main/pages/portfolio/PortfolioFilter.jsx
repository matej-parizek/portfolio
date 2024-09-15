import '../../../../css/main/pages/portfolio/PortfolioFilter.css'

const PortfolioFilter = () => {
    return <ul className="filter-list">

        <li className="filter-item">
            <button className="active" data-filter-btn>All</button>
        </li>

        <li className="filter-item">
            <button data-filter-btn>Web design</button>
        </li>

        <li className="filter-item">
            <button data-filter-btn>Applications</button>
        </li>

        <li className="filter-item">
            <button data-filter-btn>Web development</button>
        </li>

    </ul>
}

export default PortfolioFilter