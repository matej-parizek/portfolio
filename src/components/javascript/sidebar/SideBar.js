import "../../css/sidebar/SideBar.css"
import SideBarInfo from "./SideBarInfo";
import SideBarProfile from "./SideBarProfile";

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