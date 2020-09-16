import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "./StateProvider";


const Header = () => {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG24.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon className="header__searchIcon" />
          <input type="text" placeholder="Search" className="header__input" />
        </div>
      </div>

      <div className="header__right">
        <div className="icon">
          <HomeIcon className="header__icons" />
          <p className="icontitle">Home</p>
        </div>
        <div className="icon">
          <GroupIcon className="header__icons" />
          <p className="icontitle">My Network</p>
        </div>
        <div className="icon">
          <WorkIcon className="header__icons" />
          <p className="icontitle">Jobs</p>
        </div>
        <div className="icon">
          <MessageIcon className="header__icons" />
          <p className="icontitle">Messaging</p>
        </div>
        <div className="icon">
          <NotificationsIcon className="header__icons" />
          <p className="icontitle">Notifications</p>
        </div>
        <div>
          <Avatar src={user?.photoURL} className="header__icons" />
        </div>
        <div className="icon">
          <AppsIcon className="header__icons" />
        </div>
      </div>
    </div>
  );
};

export default Header;
