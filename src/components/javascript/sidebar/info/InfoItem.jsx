import "../../../css/sidebar/info/InfoItem.css"
import IconRender from "../../../utils/IconRender.jsx"


const InfoIcon = ({ icon }) => {
    return (
        <div className="icon-box">
            <IconRender name={icon} />
        </div>
    )
}

const InfoData = ({ name, value }) => {
    return (
        <div className="data-box">
            <p className="data-title">{name}</p>

            <RenderElement data={value} />
        </div>
    )
}

const RenderElement = ({ data }) => {
    switch (data.type) {
        case "address":
            return <address>{data.value}</address>
        
        case "time":
            return <time datetime={data.formatter}>{data.value}</time>
        case "contact":
            return <a href={data.href} className="data-link">{data.value}</a>
        default:
            return <p>{data.value}</p>
    }
}

const InfoItem = ({ props }) => {
    return (
        <li className="info-item" >
            <InfoIcon icon={props.icon} />
            <InfoData name={props.name} value={props.value} />
        </li>
    )
}


export default InfoItem