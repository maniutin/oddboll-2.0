import "./Post.scss";
import axios from "axios";
import Loading from "../Loading/Loading";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";

interface IProps {
  setLastPage: React.Dispatch<React.SetStateAction<boolean>>;
}
function Post({ setLastPage }: IProps) {
  const [currentPostData, setCurrentPostData] = useState<any>({});

  let location = useLocation();

  const currentPostId = location.pathname.split("/")[2];

  useEffect(() => {
    setLastPage(true);
    if (!location.state) {
      axios
        .get(
          `https://qfn.fuu.mybluehost.me/wp-json/wp/v2/posts/${currentPostId}`
        )
        .then((result) => {
          setCurrentPostData(result.data);
        })
        .catch((err) => console.log("ERROR!", err));
    } else {
      setCurrentPostData(location.state);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPostId]);

  return (
    <div className="post-wrapper">
      {currentPostData?.title && currentPostData?.content ? (
        <div className="post">
          <h1 className="post-title">
            {parse(
              location.state
                ? location.state.title
                : currentPostData.title.rendered
            )}
          </h1>
          <div className="post-content">
            {parse(
              location.state
                ? location.state.content
                : currentPostData.content.rendered
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Post;
