import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Auth, FeedPage, CreatePost,ProfilePage } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
