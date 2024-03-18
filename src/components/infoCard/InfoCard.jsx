import React, { useState } from 'react'
import './InfoCard.css';
import ProfileModal from '../profileModal/ProfileModal';

function InfoCard() {

    const[modalOpened, setModalOpened] = useState(false);
  return (
    <>
        <div className="info-card">
            <div className="info-head">
                <h4>Your Info</h4>
                <i className="fa-solid fa-pen" onClick={() => setModalOpened(true)}></i>
                {/* <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}
            </div>
            <div className="info">
                <span><b>Status </b></span>
                <span> in Relationship</span>
            </div>
            <div className="info">
                <span><b>Lives in </b></span>
                <span> Mumbai</span>
            </div>
            <div className="info">
                <span><b>Works at </b></span>
                <span> Google</span>
            </div>

            <button className='button logout-button'>Logout</button>
        </div>
    </>
  )
}

export default InfoCard;
