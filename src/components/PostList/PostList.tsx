import React from "react";
import { useArticleData } from "../../hooks/useArticleData";
import PostCard from "../PostCard/PostCard";

interface Props {
  path: string;
}

function PostList({ path }: Props) {
  const { articleInfo } = useArticleData();

  const filterPosts = (categories: number[]) => {
    return (
      articleInfo.articleData &&
      articleInfo.articleData.filter((article: any) =>
        categories.some((category) => article.categories.includes(category))
      )
    );
  };

  console.log("=== ARTICLE INFO: ", articleInfo);
  switch (path) {
    case "/":
      return <PostCard posts={filterPosts([15, 16, 17])} />;
    case "/reviews":
      return <PostCard posts={filterPosts([15])} />;
    case "/interviews":
      return <PostCard posts={filterPosts([16])} />;
    case "/listen":
      return <PostCard posts={filterPosts([17])} />;
    case "/3-word-reviews":
      return <p>3-word-reviews</p>;
    case "/about":
      return <p>about</p>;
    default:
      return <PostCard posts={filterPosts([15, 16, 17])} />;
  }
}

export default PostList;
