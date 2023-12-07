import React from "react";
import { useLocation } from "react-router-dom";

function Post() {
  let location = useLocation();
  console.log("=== loc:", location.state);
  // return location.state.content;

  return (
    <div dangerouslySetInnerHTML={{ __html: location.state.content }}></div>
  );
}

export default Post;
