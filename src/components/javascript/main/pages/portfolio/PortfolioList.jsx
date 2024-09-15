import '../../../../css/main/pages/portfolio/PortfolioList.css'
import IconRender from '../../../../utils/IconRender'
import { profileData } from '../../../../../data/data'


const PortfolioList = () => {
  return <ul className="project-list">
    <li className="project-item  active" data-filter-item data-category="web development">
      <a href='www.google.com'>
        <figure className="project-img">
          <div className="project-item-icon-box">
            <IconRender name="eye" size={"25px"}></IconRender>
          </div>
          <img src={profileData.img} alt="finance" loading="lazy" />
        </figure>

        <h3 className="project-title">Finance</h3>

        <p className="project-category">Web development</p>
      </a>

    </li>
  </ul>

}

export default PortfolioList