import React, { useState, useRef } from "react";
import "./PostShare.css";
import ProfileImg from "../../assets/profileImg.jpg";
import Posts from "../posts/Posts";
function PostShare() {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <>
      <div className="post-share">
        <img src={ProfileImg} alt="" />
        <div>
          <input type="text" name="" id="" placeholder="What's happening" />
          <div className="post-options">
            <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}>
              <i className="fa-regular fa-image"></i>
              Photo
            </div>
            <div className="option" style={{ color: "var(--photo)" }}>
              <i className="fa-solid fa-circle-play"></i>
              Video
            </div>
            <div className="option" style={{ color: "var(--location)" }}>
              <i className="fa-solid fa-location-dot"></i>
              Location
            </div>
            <div className="option" style={{ color: "var(--schedule)" }}>
              <i className="fa-regular fa-calendar-days"></i>
              Schedule
            </div>
            <button className="button ps-button">Share</button>
            <div style={{ display: "none" }}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>
          </div>

          {image && (
            <div className="preview-image">
              <i
                className="fa-regular fa-circle-xmark"
                onClick={() => setImage(null)}
              ></i>
              <img src={image.image} alt="" />
            </div>
          )}
        </div>

      </div>
      <Posts />

    </>
  );
}

export default PostShare;
