import React from "react";
import "./Post.css";
import Comment from "../../assets/comment.png"
import Like from "../../assets/like.png"
import Share from "../../assets/share.png"
import Unlike from "../../assets/notlike.png"

function Post(props) {
  return (
    <>
      <div className="post" id={props.id}>
        <img src={props.data.img} alt="" />

        <div className="post-reacts">
            <img src={props.data.liked?Like:Unlike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>

        <span style={{color: "var(--gray)", fontSize: "20px"}}>{props.data.likes} likes</span>
        <div className="detail">
            <span><b>{props.data.name}</b></span>
            <span> {props.data.desc}</span>
        </div>
      </div>
    </>
  );
}

export default Post;
