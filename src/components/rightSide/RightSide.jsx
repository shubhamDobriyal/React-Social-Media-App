import React from 'react'
import './RightSide.css';
import Home from "../../assets/home.png"
import Notification from "../../assets/noti.png"
import Comment from "../../assets/comment.png"
import TrendCard from '../trendCard/TrendCard';

function RightSide() {

  return (
    <>
        <div className="right-side">
          <div className="nav-icon">
            <img src={Home} alt="" />
            <i className="fa-solid fa-gear"></i>            
            <img src={Notification} alt="" />
            <img src={Comment} alt="" />
          </div>

          <TrendCard />
          <button className='button rs-button'>Share</button>
        </div>
    </>
  )
}

export default RightSide;
