import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Post from "./components/Post/Post";
import PostList from "./components/PostList/PostList";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<PostList path={"/"} />} />
          <Route path="/reviews" element={<PostList path={"/reviews"} />} />
          <Route path="/reviews/:id" element={<Post />} />
          <Route
            path="/interviews"
            element={<PostList path={"/interviews"} />}
          />
          <Route path="/interviews/:id" element={<Post />} />
          <Route path="/listen" element={<PostList path={"/listen"} />} />
          <Route path="/listen/:id" element={<Post />} />
          <Route
            path="/3-word-reviews"
            element={<PostList path={"/3-word-reviews"} />}
          />
          <Route path="/about" element={<PostList path={"/about"} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
