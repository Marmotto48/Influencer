import { Paper } from "@mui/material";
import React from "react";
import {
  CustomersList,
  InfluencersList,
} from "../../components/Users list/UsersList";
import { RiUserFollowLine } from "react-icons/ri";
import { MdGrading } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import "./style.css";
const Home = () => {
  return (
    <div className="dashboard">
      <section className="DH-section-1 shadow-2">
        <div className="container" style={{ backgroundColor: "#2196F3" }}>
          <p>GRADE</p>
          <div className="header">
            <MdGrading />
            <span>B</span>
          </div>
        </div>
        <div className="container" style={{ backgroundColor: "#f44336" }}>
          <p>PUBLICATIONS</p>
          <div className="header">
            <img
              src="https://www.seekpng.com/png/full/674-6747844_publication-icon.png"
              alt=""
              width="16%"
              style={{ filter: "invert(1)" }}
            />
            <span>300</span>
          </div>
        </div>
        <div className="container" style={{ backgroundColor: "#009688" }}>
          <p>FOLLOWING</p>
          <div className="header">
            <RiUserFollowLine />
            <span>300</span>
          </div>
        </div>
        <div className="container" style={{ backgroundColor: "#ff9800" }}>
          <p>FOLLOWERS</p>

          <div className="header">
            <FaUsers />
            <span>300</span>
          </div>
        </div>
      </section>
      <section className="DH-section-2 shadow-2">
        <div className="container shadow-2">
          <h6>LIKES</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            cupiditate harum maiores quis fugiat et?
          </p>
          <div className="container-foot">
            <h2>300</h2>
            {/* <BsHeart /> */}
            <img src="images/gif/heart.gif" alt="" width="25px" height="25px" />
          </div>
        </div>
        <div className="container">
          <h6>COMMENTS</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            cupiditate harum maiores quis fugiat et?
          </p>
          <div className="container-foot">
            <h2>300</h2>
            {/* <BsHeart /> */}
            <img
              src="images/gif/comment.gif"
              alt=""
              width="30px"
              height="30px"
            />
          </div>
        </div>
        <div className="container">
          <h6>LAST ONLINE</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            cupiditate harum maiores quis fugiat et?
          </p>
          <div className="container-foot">
            <h2>300</h2>
            {/* <BsHeart /> */}
            <img
              src="images/gif/online.gif"
              alt=""
              width="25px"
              height="25px"
            />
          </div>
        </div>
        <div className="container">
          <h6>LIKES</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            cupiditate harum maiores quis fugiat et?
          </p>
          <div className="container-foot">
            <h2>300</h2>
            {/* <BsHeart /> */}
            <img src="images/gif/heart.gif" alt="" width="25px" height="25px" />
          </div>
        </div>
        <div className="container">
          <h6>LIKES</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            cupiditate harum maiores quis fugiat et?
          </p>
          <div className="container-foot">
            <h2>300</h2>
            {/* <BsHeart /> */}
            <img src="images/gif/heart.gif" alt="" width="25px" height="25px" />
          </div>
        </div>
        <div className="container">
          <h6>LIKES</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            cupiditate harum maiores quis fugiat et?
          </p>
          <div className="container-foot">
            <h2>300</h2>
            {/* <BsHeart /> */}
            <img src="images/gif/heart.gif" alt="" width="25px" height="25px" />
          </div>
        </div>
      </section>
      <section className="DH-section-3 shadow-2">
        {/* LIST */}
        <CustomersList />
        <InfluencersList />
        <Paper elevation={3} sx={{ p: 1 }}>
          {" "}
          <h5>LAST FOLLOWERS</h5>
          <ul>
            <li>User A</li>
            <li>User A</li>
            <li>User A</li>
          </ul>{" "}
        </Paper>
      </section>
    </div>
  );
};

export default Home;
