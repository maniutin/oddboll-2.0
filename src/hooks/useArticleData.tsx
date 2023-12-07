import { useState, useEffect } from "react";
import axios from "axios";

const useArticleData = () => {
  const [articleInfo, setArticleInfo] = useState({ articleData: [] });

  useEffect(() => {
    axios
      .get("http://localhost:8888/wordpress-trunk/wp-json/wp/v2/posts?_embed")
      .then((result) => {
        setArticleInfo((prev) => ({ ...prev, articleData: result.data }));
      })
      .catch((err) => console.log("ERROR!", err));
  }, []);

  return {
    articleInfo,
    setArticleInfo,
  };
};

export { useArticleData };
