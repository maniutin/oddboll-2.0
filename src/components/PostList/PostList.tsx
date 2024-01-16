import React from "react";
import { useLocation } from "react-router-dom";
import { useArticleData } from "../../hooks/useArticleData";
import PostCard from "../PostCard/PostCard";

interface IProps {
  category: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  path: string;
  setLastPage: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Article {
  categories: number[];
}

function PostList({
  category,
  path,
  currentPage,
  setCurrentPage,
  setLastPage,
}: IProps) {
  const { articleInfo } = useArticleData(currentPage, category, setLastPage);

  const usePrevious = (value: any) => {
    const ref = React.useRef();
    React.useEffect(() => {
      ref.current = value;
    });

    return ref.current;
  };

  const useLocationChange = (action: any) => {
    const location = useLocation();
    const prevLocation = usePrevious(location);
    React.useEffect(() => {
      action(location, prevLocation);
    }, [location]);
  };

  useLocationChange((location: any, prevLocation: any) => {
    if (prevLocation) {
      setCurrentPage(1);
    }
    console.log("changed from", prevLocation, "to", location);
  });

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
