import React from "react";
import Navbar from "components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "pages/main/Main";
import Post from "pages/posts/Post";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/network" element={<p>Network Page</p>} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<p>잘못된 접근입니다.</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
