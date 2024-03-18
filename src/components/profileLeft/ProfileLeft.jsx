import React from 'react'
import './ProfileLeft.css';
import Search from '../../components/search/Search';
import FollowersCard from '../../components/followersCard/FollowersCard';
import InfoCard from '../infoCard/InfoCard';

function ProfileLeft() {

  return (
    <>
        <div className="profile-left">
            <Search />
            <InfoCard />
            <FollowersCard />
        </div>
    </>
  )
}

export default ProfileLeft;
