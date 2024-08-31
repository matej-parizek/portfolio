import { IoMailOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";


const IconRender = ({ name }) => {
    switch(name){
        case "email": return <><IoMailOutline/></>
        case "phone": return <><IoPhonePortraitOutline/></>
        case "birth": return <><IoCalendarOutline/></>
        case "location": return <><IoLocationOutline/></>
        default: return <IoLogoReact/>
    }
}

export default IconRender