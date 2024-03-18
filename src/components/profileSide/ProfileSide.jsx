import React from 'react'
import './ProfileSide.css'
import Search from '../search/Search';
import ProfileCard from '../profileCard/ProfileCard';
import FollowersCard from '../followersCard/FollowersCard';

function ProfileSide() {

  return (
    <>
        <div className="profile-side">
            <Search />
            <ProfileCard />
            <FollowersCard />
        </div>
    </>
  )
}

export default ProfileSide;
