import "./Page.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { usePageData } from "../../hooks/usePageData";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

interface IProps {
  pageId: number;
}

function Page({ pageId }: IProps) {
  const { pageInfo } = usePageData(pageId);

  return (
    <>
      {Object.keys(pageInfo.pageData).length > 0 && (
        <div className="page-content-wrapper">
          <div className="page-content">
            {parse(pageInfo.pageData.content.rendered)}
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
