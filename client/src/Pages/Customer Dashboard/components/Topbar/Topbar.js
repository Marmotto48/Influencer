import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./style.css";
import { MdNotifications, MdOutlineEmail, MdLogout } from "react-icons/md";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

const Topbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <div className="">
        <div className="topbar-nav">
          <div className="topbar-left">
            <Avatar
              alt="Travis Howard"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            />
            <h5 className="">CUSTOMER DASHBOARD</h5>
          </div>
          <ul
            className={
              click ? "topbar-options active colorChange" : "topbar-options "
            }
          >
            <li className="link link-a" onClick={closeMobileMenu}>
              <Badge badgeContent={4} color="primary" onClick={closeMobileMenu}>
                <MdNotifications className="topbar-icons" />
              </Badge>{" "}
              <span className="icon-desc">Notication</span>
            </li>
            <li className="link link-a" onClick={closeMobileMenu}>
              <Badge badgeContent={4} color="primary">
                <MdOutlineEmail className="topbar-icons" />
              </Badge>
              <span className="icon-desc">Messages</span>
            </li>
            <li className="link link-a" onClick={closeMobileMenu}>
              <MdLogout className="topbar-icons" />
              <span className="icon-desc">Logout</span>
            </li>
          </ul>
        </div>
        <FaBars className="menu-icon" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Topbar;
