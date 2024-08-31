import "../../../css/sidebar/contact-info/InfoItem.css"
import IconRender from "../../../utils/IconRender"


const InfoIcon = ({ icon }) => {
    return (
        <div className="icon-box">
            <IconRender name={icon} />
        </div>
    )
}

const InfoData = ({ name, value }) => {
    return (
        <div class="data-box">
            <p className="data-title">{name}</p>

            <RenderElement data={value} />
        </div>
    )
}

const RenderElement = ({ data }) => {
    switch (data.type) {
        case "address":
            return (
                <address>{data.value}</address>
            )

        case "time":
            return (
                <time datetime={data.formatter}>{data.value}</time>
            )
        case "contact":
            return (
                <a href={data.href} class="data-link">{data.value}</a>
            )
        default:
            return (
                <p>{data.value}</p>
            )
    }
}

const InfoItem = ({ props }) => {
    return (
        <li className="info-item" >
            {<InfoIcon icon={props.icon} />}
            <InfoData name={"name"} value={props.value} />
        </li>
    )
}


export default InfoItem