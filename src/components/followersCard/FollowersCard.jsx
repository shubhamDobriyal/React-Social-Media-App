import React from "react";
import {Followers} from "./../../data/FollowersData";
import "./FollowersCard.css";
function FollowersCard() {
  return (
    <>
      <div className="followers-card">
        <h3>Who is followig you</h3>
        {Followers.map((follower, id) => {
          return (
            <div className="follower">
              <div>
                <img
                  src={follower.img}
                  key={id}
                  className="follower-img"
                  alt=""
                />
                <div className="name">
                    <span>{follower.name}</span>
                    <span>@{follower.username}</span>
                </div>
              </div>
              <button className="button fc-button">Follow</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FollowersCard;
