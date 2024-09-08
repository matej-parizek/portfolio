import '../../../../css/main/pages/resume/Skill.css'
import { SkillData } from '../../../../../data/ResumeData'

const Skill = () => {
    return <section className="skill">
        {
            SkillData.map((it) => {
                const { idItem, name, skills } = it
                return <div key={idItem}>
                    <h3 className="h3 skills-title">{name}</h3>
                    <ul className="skills-list content-card">
                        {
                            skills.map((item) => {

                                const { id, title, value, valueDetail } = item

                                return <li key={id} className="skills-item">
                                    <div className="title-wrapper">
                                        <h5 className="h5">{title}</h5>
                                        <data value={value}>{!valueDetail? `${value}%`: valueDetail}</data>
                                    </div>

                                    <div className="skill-progress-bg">
                                        <div className="skill-progress-fill" style={{ width: `${value}%` }} />
                                    </div>

                                </li>
                            })
                        }
                    </ul>
                </div>
            })
        }
    </section>
}

export default Skill