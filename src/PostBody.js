import React from "react";
import "./PostBody.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
const PostBody = ({ title, image }) => {
  return (
    <div className="postbody">
      <div className="postbody__user">
        <Avatar src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" />
        <div className="post__username">
          <h4>Elon Musk.</h4>
          <p>
            Join spaceX and tesla for more fun and time to create the new world.
          </p>
        </div>
      </div>

      <div className="description">
        <p>{title}</p>
        <img src={image} alt="" />
      </div>

      <hr />
      <div className="postbody__likes">
        <div className="Icons">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="Icons">
          <CommentIcon />
          <p>Comment</p>
        </div>
        <div className="Icons">
          <ShareIcon />
          <p>Share</p>
        </div>
        <div className="Icons">
          <SendIcon />
          <p>Send</p>
        </div>
      </div>
    </div>
  );
};

export default PostBody;
