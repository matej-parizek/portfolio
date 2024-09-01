import "../../css/sidebar/SideBar.css"
import SideBarInfo from "./info/SideBarInfo";
import SideBarProfile from "./profile/SideBarProfile";
import Social from "./social/Social";

const SideBar = () => {
    return (
        <aside className="sidebar">
            <SideBarProfile />
            <div className="separator" />
            <SideBarInfo />
            <div className="separator"/>
            <Social/>
        </aside>
    );
}

export default SideBar;