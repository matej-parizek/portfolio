import '../../../../css/main/pages/resume/Timeline.css'
import IconRender from '../../../../utils/IconRender'
import { ResumeData } from '../../../../../data/ResumeData'

const Timeline = () => {
    return <section className='timeline'>
        {
            ResumeData.map( (item) =>{
                const {id,name, icon, info} = item

                return (
                    <div key={id}>
                        <div className="title-wrapper">
                            <div className="icon-box">
                                <IconRender name={icon}></IconRender>
                            </div>

                            <h3 className="h3">{name}</h3>
                        </div> 
                        <ol className="timeline-list">
                            {
                                info.map( (it) => {
                                    const {idInfo,title, period, description} = it
                                    return <li key={idInfo} className="timeline-item">

                                        <h4 className="h4 timeline-item-title">{title}</h4>

                                        <span>{period}</span>

                                        <p className="timeline-text">
                                            {description}
                                        </p>

                                    </li>
                                })
                            }
                        </ol>

                    </div>
                )
            
            })
           
        }
    </section>

}

export default Timeline