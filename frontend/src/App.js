import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import DSA from "./pages/DSA/DSA";
import PageNotFound from "./pages/PageNotFound/PageNotFound";


function App(){
    return (
        <BrowserRouter>
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