import "./Post.scss";
import React from "react";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";

function Post() {
  let location = useLocation();

  console.log("=== loc:", location.state);

  return (
    <div className="post">
      <h1 className="post-title">{parse(location.state.title)}</h1>
      <div className="post-content">{parse(location.state.content)}</div>
    </div>
  );
}

export default Post;
