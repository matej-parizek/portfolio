import { IoMailOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoGitlab } from "react-icons/io5";
import { IoLogoDiscord } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";



const IconRender = ({ name, size , className}) => {
    switch(name){
        case "email": return <><IoMailOutline className={className} size={size}/></>
        case "phone": return <><IoPhonePortraitOutline className={className} size={size}/></>
        case "birth": return <><IoCalendarOutline className={className} size={size}/></>
        case "location": return <><IoLocationOutline className={className} size={size}/></>
        case "instagram": return <IoLogoInstagram className={className} size={size}/>
        case "linkedin": return <IoLogoLinkedin className={className} size={size}/>
        case "github": return <IoLogoGithub className={className} size={size}/>
        case "gitlab": return <IoLogoGitlab className={className} size={size}/>
        case "discord": return <IoLogoDiscord className={className} size={size}/>
        case "book" : return <IoBookOutline className={className} size={size}/>
        case "eye" : return <IoEye className={className} size={size}/>
        default: return <IoLogoReact className={className} size={size}/>
    }
}

export default IconRender