import React, { useState, useEffect } from "react";
import "./Post.css";
import CreateIcon from "@material-ui/icons/Create";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import VideocamIcon from "@material-ui/icons/Videocam";
import PostAddIcon from "@material-ui/icons/PostAdd";
import DescriptionIcon from "@material-ui/icons/Description";
import PostBody from "./PostBody";
import db from "./firebase";
import firebase from "firebase";

const Post = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [posts, setPosts] = useState([]);
  const submitPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      title: input,
      imageurl: imageUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    setImageUrl("");
  };

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  // console.log(posts);

  return (
    <div className="post">
      <div className="post__header">
        <form className="startpost">
          <CreateIcon />

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Start a Post."
          />
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter Image URL."
          />
          <button hidden type="submit" onClick={submitPost}>
            send
          </button>
        </form>
        <hr />
        <div className="post__headerIcons">
          <div className="Icon">
            <PhotoCameraIcon className="photo" />
            <h5>Photo</h5>
          </div>
          <div className="Icon">
            <VideocamIcon className="video" />
            <h5>Video</h5>
          </div>

          <div className="Icon">
            <PostAddIcon className="article" />
            <h5>Write article</h5>
          </div>

          <div className="Icon">
            <DescriptionIcon className="document" />
            <h5>Document</h5>
          </div>
        </div>
      </div>
      <hr />
      <div className="post__body">
        {posts.map((post) => (
          <PostBody title={post.title} image={post.imageurl} />
        ))}
      </div>
    </div>
  );
};

export default Post;
