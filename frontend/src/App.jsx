import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import DSA from "./pages/DSA/DSA";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";


function App(){
    return (
        <BrowserRouter>
            <Navbar/>   
            <Routes>
                <Route path = "/" element={<Home/>} />
                <Route path = "/blogs/:id" element={<Blogs/>} />
                <Route path="/dsa-sheet" element={<DSA/>} />
                <Route path="*"  element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App