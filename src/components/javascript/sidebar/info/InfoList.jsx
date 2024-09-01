import "../../../css/sidebar/info/InfoList.css"
import InfoItem from "./InfoItem.jsx"
import {contactData} from "../../../../data/data.js"

const InfoList = () => {
    return (
        <ul className="info-list">
            {contactData.map((item) => (
                <InfoItem key={item.id} props={item} {...item}/>
            ))}
        </ul>
    );
};

export default InfoList