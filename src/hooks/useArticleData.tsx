import { useState, useEffect } from "react";
import axios from "axios";

const useArticleData = (
  currentPage: number,
  category: number,
  setLastPage: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [articleInfo, setArticleInfo] = useState({ articleData: [] });

  const perPage = 20;

  useEffect(() => {
    axios
      .get(
        `http://localhost:8888/wordpress-trunk/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${currentPage}&categories=${category}`
      )
      .then((result) => {
        setArticleInfo((prev) => ({ ...prev, articleData: result.data }));
        result.data.length < perPage ? setLastPage(true) : setLastPage(false);
      })
      .catch((err) => console.log("ERROR!", err));
  }, [currentPage, category]);

  return {
    articleInfo,
    setArticleInfo,
  };
};

export { useArticleData };
