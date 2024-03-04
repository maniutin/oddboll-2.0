import { useState, useEffect } from "react";
import axios from "axios";

const usePageData = (pageId: number) => {
  const [pageInfo, setPageInfo] = useState<any>({ pageData: {} });

  useEffect(() => {
    axios
      .get(`https://qfn.fuu.mybluehost.me/wp-json/wp/v2/pages/${pageId}`)
      .then((result) => {
        setPageInfo((prev: any) => ({ ...prev, pageData: result.data }));
      })
      .catch((err) => console.log("ERROR!", err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageId]);

  return {
    pageInfo,
    setPageInfo,
  };
};

export { usePageData };
