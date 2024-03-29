import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Pagination from "./components/Pagination/Pagination";
import Post from "./components/Post/Post";
import PostList from "./components/PostList/PostList";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<boolean>(false);

  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <PostList
                  path={"/"}
                  category={1}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  setLastPage={setLastPage}
                />
              }
            />
            <Route
              path="/reviews"
              element={
                <PostList
                  path={"/reviews"}
                  category={15}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  setLastPage={setLastPage}
                />
              }
            />
            <Route
              path="/reviews/:id"
              element={<Post setLastPage={setLastPage} />}
            />
            <Route
              path="/interviews"
              element={
                <PostList
                  path={"/interviews"}
                  category={16}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  setLastPage={setLastPage}
                />
              }
            />
            <Route
              path="/interviews/:id"
              element={<Post setLastPage={setLastPage} />}
            />
            <Route
              path="/listen"
              element={
                <PostList
                  path={"/listen"}
                  category={17}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  setLastPage={setLastPage}
                />
              }
            />
            <Route
              path="/listen/:id"
              element={<Post setLastPage={setLastPage} />}
            />
            {/* <Route
              path="/3-word-reviews"
              element={
                <PostList
                  path={"/3-word-reviews"}
                  category={1}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  setLastPage={setLastPage}
                />
              }
            /> */}
            <Route
              path="/about"
              element={
                <PostList
                  path={"/about"}
                  category={1}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  setLastPage={setLastPage}
                />
              }
            />
          </Routes>
        </main>
      </Router>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
      />
      <Footer />
    </div>
  );
}

export default App;
