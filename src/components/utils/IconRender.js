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


const IconRender = ({ name }) => {
    switch(name){
        case "email": return <><IoMailOutline/></>
        case "phone": return <><IoPhonePortraitOutline/></>
        case "birth": return <><IoCalendarOutline/></>
        case "location": return <><IoLocationOutline/></>
        case "instagram": return <IoLogoInstagram/>
        case "linkedin": return <IoLogoLinkedin/>
        case "github": return <IoLogoGithub/>
        case "gitlab": return <IoLogoGitlab/>
        case "discord": return <IoLogoDiscord/>
        default: return <IoLogoReact/>
    }
}

export default IconRender