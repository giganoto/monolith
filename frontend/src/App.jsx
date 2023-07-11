import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import DSA from "./pages/DSA/DSA";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/dsa-sheet" element={<DSA />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
