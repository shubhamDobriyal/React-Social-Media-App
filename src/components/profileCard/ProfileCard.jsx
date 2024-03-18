import React from "react";
import Cover from "../../assets/cover.jpg";
import Profile from "../../assets/profileImg.jpg";
import "./ProfileCard.css";

function ProfileCard() {
  const ProfilePage = true;
  return (
    <>
      <div className="profile-card">
        <div className="profile-images">
          <img src={Cover} alt="" />
          <img src={Profile} alt="" />
        </div>

        <div className="profile-name">
          <span>abc</span>
          <span>abc</span>
        </div>

        <div className="follow-status">
          <hr />
          <div>
            <div className="follow">
              <span>1232</span>
              <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>1232</span>
              <span>Followers</span>
            </div>
            {
              ProfilePage && (<>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
              </>)
            }
          </div>
          <hr />
        </div>
        {ProfilePage ? "" :<span>My Profile</span>}

      </div>
    </>
  );
}

export default ProfileCard;
