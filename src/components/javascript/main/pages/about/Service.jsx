import '../../../../css/main/pages/about/Service.css'
import IconRender from '../../../../utils/IconRender'
import { serviceData } from '../../../../../data/AboutData'

const Service = () =>{
    return <section>
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {
            serviceData.map( (item) =>{
              const {id, icon, title, description} = item;
              return (
              <li className="service-item" key={id}>
                  <div className="service-icon-box">
                    <IconRender name={icon} className='service-icon-box-img' size={60}/>
                  </div>

                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">{title}</h4>

                    <p className="service-item-text">
                      {description}
                    </p>
                  </div>
                </li>
              )
            })
          }
      </ul>
    </section>
}

export default Service