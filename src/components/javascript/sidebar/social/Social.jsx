import '../../../css/sidebar/social/Social.css'
import { socialData } from '../../../../data/data'
import IconRender from '../../../utils/IconRender'


const Social = () => {
  return <ul className="social-list">
    {
      socialData.map((value) => {

        const { id, ref, icon } = value

         return < li className = "social-item" key = { id } >
            <a href={ref} /*target="_blank"  rel="noopener noreferrer"*/  className="social-link">
              <IconRender name={icon} />
            </a>
    </li>
})
}
  </ul >
}

export default Social