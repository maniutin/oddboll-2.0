import "./Page.scss";
import Loading from "../Loading/Loading";
import React from "react";
import parse from "html-react-parser";
import { usePageData } from "../../hooks/usePageData";

interface IProps {
  pageId: number;
  setLastPage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Page({ pageId, setLastPage }: IProps) {
  setLastPage(true);
  const { pageInfo } = usePageData(pageId);

  return (
    <>
      {Object.keys(pageInfo.pageData).length > 0 ? (
        <div className="page-content-wrapper">
          <div className="page-content">
            {parse(pageInfo.pageData.content.rendered)}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Page;
