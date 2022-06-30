import React from "react";
import "./style.css";
const SearchCard = ({ firstName, lastName, avatar }) => {
  return (
    <div className="searchCard">
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img
              src={avatar}
              // src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              alt=""
            />
          </div>
          <div className="contentBx">
            <h2>{firstName}</h2>
            <div className="size">
              <div className="size-content">
                <h3>Followers</h3>
                <span>7</span>
              </div>
              <div className="size-content">
                <h3>Posts</h3>
                <span>17</span>
              </div>
              <div className="size-content">
                <h3>Grade</h3>
                <span>B</span>
              </div>
            </div>
            <a href="#/">View Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
