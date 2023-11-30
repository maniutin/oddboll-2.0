import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./Nav/Nav";
import Test from "./Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Test path={"/"} />} />
          <Route path="/reviews" element={<Test path={"/reviews"} />} />
          <Route path="/interviews" element={<Test path={"/interviews"} />} />
          <Route path="/listen" element={<Test path={"/listen"} />} />
          <Route
            path="/3-word-reviews"
            element={<Test path={"/3-word-reviews"} />}
          />
          <Route path="/about" element={<Test path={"/about"} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
