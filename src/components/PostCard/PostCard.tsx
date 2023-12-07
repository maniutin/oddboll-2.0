import React from "react";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

interface IProps {
  path: string;
  posts: any;
}

interface Post {
  categories: number[];
  content: { rendered: string };
  _embedded: any;
  excerpt: { rendered: string };
  id: number;
  title: { rendered: string };
}

const categoriesPathRef = {
  15: "/reviews",
  16: "/interviews",
  17: "/listen",
};

function PostCard({ path, posts }: IProps) {
  const navigate = useNavigate();

  const reg = /&#8220;|&#8221;/g;

  console.log("=== posts:", posts);

  return (
    posts &&
    posts.map((post: Post, index: number) => {
      const postPath = `${
        path === "/"
          ? categoriesPathRef[
              post.categories[1] as keyof typeof categoriesPathRef
            ]
          : path
      }/${post.id}`;
      return (
        <div key={index}>
          <img
            src={post._embedded["wp:featuredmedia"]["0"].source_url}
            alt="album cover"
            onClick={() =>
              navigate(postPath, {
                state: { content: post.content.rendered },
              })
            }
          />
          <h1
            onClick={() =>
              navigate(postPath, {
                state: { content: post.content.rendered },
              })
            }
          >
            {post.title.rendered.replace(reg, '"')}
          </h1>
          <div>{parse(post.excerpt.rendered)}</div>
        </div>
      );
    })
  );
}

export default PostCard;
