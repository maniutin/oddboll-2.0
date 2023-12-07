import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav/Nav";
import PostList from "./components/PostList/PostList";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<PostList path={"/"} />} />
          <Route path="/reviews" element={<PostList path={"/reviews"} />} />
          <Route
            path="/interviews"
            element={<PostList path={"/interviews"} />}
          />
          <Route path="/listen" element={<PostList path={"/listen"} />} />
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
