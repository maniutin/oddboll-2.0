import React from "react";
import { useArticleData } from "../../hooks/useArticleData";
import PostCard from "../PostCard/PostCard";

interface IProps {
  category: number;
  currentPage: number;
  path: string;
  setLastPage: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Article {
  categories: number[];
}

function PostList({ category, currentPage, path, setLastPage }: IProps) {
  const { articleInfo } = useArticleData(currentPage, category, setLastPage);

  console.log("=== ARTICLE INFO: ", articleInfo);

  switch (path) {
    case "/":
      return <PostCard path={path} posts={articleInfo.articleData} />;
    case "/reviews":
      return <PostCard path={path} posts={articleInfo.articleData} />;
    case "/interviews":
      return <PostCard path={path} posts={articleInfo.articleData} />;
    case "/listen":
      return <PostCard path={path} posts={articleInfo.articleData} />;
    case "/3-word-reviews":
      return <p>3-word-reviews</p>;
    case "/about":
      return <p>about</p>;
    default:
      return <PostCard path={path} posts={articleInfo.articleData} />;
  }
}

export default PostList;
