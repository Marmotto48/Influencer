import React from "react";
import "./style.css";
import { BiTimeFive, BiStar } from "react-icons/bi";
import { Divider, Paper } from "@mui/material";
import PostCard from "../../components/Post card/PostCard";
import { OnlineList, UsersList } from "../../components/Users list/UsersList";

const News = () => {
  return (
    <div className="news">
      <div className="news-containers left-container">
        <>
          <div className="title">
            <BiTimeFive className="title-icon" />
            <h6> LAST POSTS</h6>
          </div>
          <div className="content">
            <ul>
              <li>post one</li>
              <li>post two</li>
              <li>post three</li>
              <li>post four</li>
            </ul>
          </div>
        </>
        <Divider />
        <>
          <div className="title" style={{ marginTop: "15px" }}>
            <BiStar className="title-icon" />
            <h6> TOP INFLUENCERS</h6>
          </div>
          <div className="content">
            <ul>
              <li>post one</li>
              <li>post two</li>
              <li>post three</li>
              <li>post four</li>
              <li>post five</li>
            </ul>
          </div>
        </>
        <Divider />
        <>
          <div className="title" style={{ marginTop: "15px" }}>
            <BiStar className="title-icon" />
            <h6> TOP CUSTOMERS</h6>
          </div>
          <div className="content">
            <ul>
              <li>post one</li>
              <li>post two</li>
              <li>post three</li>
              <li>post four</li>
              <li>post five</li>
            </ul>
          </div>
        </>
        <Divider />
      </div>
      <div className=" news-containers center-container">
        <h3>POSTS</h3>
        <PostCard />
      </div>
      <div className="news-containers right-container">
        <>
          <Paper elevation={3} sx={{ p: 1, mb: 2 }}>
            <div className="title">
              <BiTimeFive className="title-icon" />
              <h6> SOME INFO</h6>
            </div>
            <ul>
              <li>post one</li>
              <li>post two</li>
              <li>post three</li>
              <li>post four</li>
            </ul>
          </Paper>
        </>
        <p> Who to follow</p>
        <UsersList />
        <p> Who's online</p>
        <OnlineList />
      </div>
    </div>
  );
};

export default News;
