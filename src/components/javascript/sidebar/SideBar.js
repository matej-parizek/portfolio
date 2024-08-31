import "../../css/sidebar/SideBar.css"
import SideBarInfo from "./info/SideBarInfo";
import SideBarProfile from "./profile/SideBarProfile";

const SideBar = () => {
    return (
        <aside className="sidebar">
            <SideBarProfile />
            <div className="separator" />
            <SideBarInfo />
        </aside>
    );
}

export default SideBar;