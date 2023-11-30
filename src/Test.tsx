import React from "react";

function Test(props: { path: string }) {
  switch (props.path) {
    case "/":
      return <p>boogers</p>;
    case "/reviews":
      return <p>reviews</p>;
    case "/interviews":
      return <p>interviews</p>;
    case "/listen":
      return <p>listen</p>;
    case "/3-word-reviews":
      return <p>3-word-reviews</p>;
    case "/about":
      return <p>about</p>;
    default:
      return <p>boogers</p>;
  }
}

export default Test;
