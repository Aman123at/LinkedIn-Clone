import React from "react";
import "./Body.css";

import { useStateValue } from "./StateProvider";

import Avatar from "@material-ui/core/Avatar";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import GroupIcon from "@material-ui/icons/Group";
import Post from "./Post";
import BodyRight from "./BodyRight";

const Body = () => {
  const [{ user }, dispatch] = useStateValue([]);
  console.log("USER >>>>>", user);

  return (
    <div className="body">
      <div className="body__left">
        <div className="body__accountInfo">
          <Avatar src={`${user.photoURL}`} className="avatar" />
          <h4>{user.displayName}</h4>
          <p>
            LinkedIn is a great source to improve your knowledge,share your
            thoughts,meet the professional in a one plateform.it is awesome.
          </p>
          <hr />
          <div className="connections">
            <p>Connections</p>
            <h6>17</h6>
          </div>
          <hr />
          <div className="saveitems">
            <TurnedInNotIcon />
            <p>Saved Items</p>
          </div>
        </div>
        <div className="body__recentsgroups">
          <div className="body__recents">
            <h5>Recent</h5>
            <div className="body__recentsRow">
              <GroupIcon />
              <p>The first group</p>
            </div>
            <div className="body__recentsRow">
              <GroupIcon />
              <p>The second group</p>
            </div>
            <div className="body__recentsRow">
              <GroupIcon />
              <p>The third group</p>
            </div>
            <div className="body__recentsRow">
              <GroupIcon />
              <p>The fourth group</p>
            </div>
          </div>
          <div className="body__groups">
            <h5>Groups</h5>
            <div className="body__recentsRow">
              <GroupIcon />
              <p>The first </p>
            </div>
            <div className="body__recentsRow">
              <GroupIcon />
              <p>The second </p>
            </div>
            <div className="body__recentsRow">
              <GroupIcon />
              <p>The third </p>
            </div>
            <div className="body__recentsRow">
              <GroupIcon />
              <p>The fourth </p>
            </div>
          </div>
          <hr />
          <p>Discover More</p>
        </div>
      </div>
      <div className="body__center">
        <Post />
      </div>
      <div className="body__right">
        <BodyRight />
      </div>
    </div>
  );
};

export default Body;
