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

const categoriesTitleRef = {
  15: "Review",
  16: "Interview",
  17: "Listen",
};

function PostCard({ path, posts }: IProps) {
  const navigate = useNavigate();

  const reg = /&#8220;|&#8221;/g;

  const handleClick = (
    postPath: string,
    postTitle: string,
    postContent: string
  ) => {
    navigate(postPath, {
      state: { title: postTitle, content: postContent },
    });
  };

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
        <article key={post.id} className="post-card">
          <img
            src={post._embedded?.["wp:featuredmedia"]?.["0"].source_url}
            loading="lazy"
            alt="post thumbnail"
            onClick={() =>
              handleClick(postPath, post.title.rendered, post.content.rendered)
            }
          />
          <section className="post-card-text">
            <p className="post-category">
              {
                categoriesTitleRef[
                  post.categories[1] as keyof typeof categoriesTitleRef
                ]
              }
            </p>
            <h1
              className="post-card-title"
              onClick={() =>
                handleClick(
                  postPath,
                  post.title.rendered,
                  post.content.rendered
                )
              }
            >
              {post.title.rendered.replace(reg, '"').replace("&amp;", "&")}
            </h1>
            <div className="post-card-excerpt">
              {parse(post.excerpt.rendered)}
            </div>
            <div
              className="read-more-button"
              onClick={() =>
                handleClick(
                  postPath,
                  post.title.rendered,
                  post.content.rendered
                )
              }
            >
              Read More
            </div>
          </section>
        </article>
      );
    })
  );
}

export default PostCard;
