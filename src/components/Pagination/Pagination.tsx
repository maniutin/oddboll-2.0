import "./Pagination.scss";
import React from "react";

import LeftArrow from "../../assets/left-arrow.png";
import RightArrow from "../../assets/right-arrow.png";

type Props = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  lastPage: boolean;
};

function Pagination({ currentPage, setCurrentPage, lastPage }: Props) {
  return (
    <div className="pagination">
      <div
        className="arrow-wrapper"
        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
      >
        {currentPage > 1 && (
          <div className="arrow">
            <img src={LeftArrow} alt="left arrow" className="arrow-img" />
            <p>Newer Posts</p>
          </div>
        )}
      </div>
      <div
        className="arrow-wrapper"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        {!lastPage && (
          <div className="arrow">
            <p>Older Posts</p>
            <img src={RightArrow} alt="right arrow" className="arrow-img" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Pagination;
