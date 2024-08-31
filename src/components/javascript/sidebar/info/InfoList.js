import "../../../css/sidebar/info/InfoList.css"
import InfoItem from "./InfoItem.js"
import Data from "../../../../data/data.js"

const InfoList = () => {
    return (
        <ul className="info-list">
            {Data.map((item) => (
                <InfoItem key={item.id} props={item} {...item}/>
            ))}
        </ul>
    );
};

export default InfoList