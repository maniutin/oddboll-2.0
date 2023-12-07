import React from "react";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";

function Post() {
  let location = useLocation();
  console.log("=== loc:", location.state);
  // return location.state.content;

  return <div>{parse(location.state.content)}</div>;
}

export default Post;
