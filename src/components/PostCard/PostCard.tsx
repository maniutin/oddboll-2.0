import React from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  path: string;
  posts: any;
}

interface Post {
  categories: number[];
  content: { rendered: string };
  _embedded: any;
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
      return (
        <div>
          <img
            src={post._embedded["wp:featuredmedia"]["0"].source_url}
            style={{ width: "100%" }}
          />
          <h1
            key={index}
            onClick={() =>
              navigate(
                `${
                  path === "/"
                    ? categoriesPathRef[
                        post.categories[1] as keyof typeof categoriesPathRef
                      ]
                    : path
                }/${post.id}`,
                {
                  state: { content: post.content.rendered },
                }
              )
            }
          >
            {post.title.rendered.replace(reg, '"')}
          </h1>
        </div>
      );
    })
  );
}

export default PostCard;
