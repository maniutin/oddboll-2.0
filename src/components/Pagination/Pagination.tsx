import "./Pagination.scss";
import React from "react";

import LeftArrow from "../../assets/left-arrow.png";
import RightArrow from "../../assets/right-arrow.png";

type Props = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<any>>;
};

function Pagination({ currentPage, setCurrentPage }: Props) {
  return (
    <div className="pagination">
      <div
        className="arrow"
        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
      >
        <img src={LeftArrow} alt="left arrow" className="arrow-img" />
        <p>Newer Posts</p>
      </div>
      <div className="arrow" onClick={() => setCurrentPage(currentPage + 1)}>
        <p>Older Posts</p>
        <img src={RightArrow} alt="right arrow" className="arrow-img" />
      </div>
    </div>
  );
}

export default Pagination;
