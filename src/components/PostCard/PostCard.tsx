import React from "react";

interface Props {
  posts: any;
}

function PostCard({ posts }: Props) {
  console.log("=== posts:", posts);
  return (
    posts &&
    posts.map((post: any, index: number) => {
      return <p key={index}>{post.title.rendered}</p>;
    })
  );
}

export default PostCard;
