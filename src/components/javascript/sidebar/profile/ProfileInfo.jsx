import "../../../css/sidebar/profile/ProfileInfo.css"
import {profileData} from "../../../../data/data"

const ProfileInfo = () => {
    return (
        <>
            <figure className="avatar-box">
                <img src={profileData.img} alt={profileData.name} width="80"  height="115"/>
            </figure>

            <div className="profile-info">
                <h1 className="name" title="name">{profileData.name}</h1>

                <p className="title">{profileData.job}</p>
            </div>
        </>
    )
}

export default ProfileInfo