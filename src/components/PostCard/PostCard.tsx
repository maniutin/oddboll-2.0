import "./PostCard.scss";
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

  const handleClick = (postPath: string, postContent: string) => {
    navigate(postPath, {
      state: { content: postContent },
    });
  };

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
        <div key={index} className="post-card">
          <img
            src={post._embedded["wp:featuredmedia"]["0"].source_url}
            alt="album cover"
            onClick={() => handleClick(postPath, post.content.rendered)}
          />
          <div className="post-card-text">
            <h1
              className="post-card-title"
              onClick={() => handleClick(postPath, post.content.rendered)}
            >
              {post.title.rendered.replace(reg, '"')}
            </h1>
            <div className="post-card-excerpt">
              {parse(post.excerpt.rendered)}
            </div>
          </div>
        </div>
      );
    })
  );
}

export default PostCard;
