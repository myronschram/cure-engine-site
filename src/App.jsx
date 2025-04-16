import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home.jsx";
import HunterStory from "./HunterStory.jsx";
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer";
import Archive from "./Archive";
import NotFound from "./NotFound";
import "./utils/loadPosts";




export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hunter" element={<HunterStory />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
		<Route path="/archive" element={<Archive />} />
		<Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

