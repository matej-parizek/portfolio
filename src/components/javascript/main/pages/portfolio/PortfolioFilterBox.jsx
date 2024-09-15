import '../../../../css/main/pages/portfolio/PortfolioFilterBox.css'
import IconRender from'../../../../utils/IconRender'

const PortfolioFilterBox = () =>{
    return <div className="filter-select-box">

      <button className="filter-select" data-select>

        <div className="select-value" data-selecct-value>Select category</div>

        <div className="select-icon">
          <IconRender name="chevron-down"/>
        </div>

      </button>

      <ul className="select-list">

        <li className="select-item">
          <button data-select-item>All</button>
        </li>

        <li className="select-item">
          <button data-select-item>Web design</button>
        </li>

        <li className="select-item">
          <button data-select-item>Applications</button>
        </li>

        <li className="select-item">
          <button data-select-item>Web development</button>
        </li>

      </ul>

    </div>
}

export default PortfolioFilterBox