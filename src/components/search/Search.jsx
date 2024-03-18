import React from 'react'
import Logo from "../../assets/logo.png"
import './Search.css'

function Search() {

  return (
    <>
        <div className="search-div">
            <img src={Logo} alt="" />
            <div className="search">
                <input type="text" placeholder='#Explore'/>
                <div className="s-icon">
                <i className ="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    </>
  )
}

export default Search;
