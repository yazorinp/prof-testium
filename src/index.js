import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";


import Root from "./pages/root";
import About from "./pages/about";
import Bugs from "./pages/bugs";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Root/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path='/bugs' element={<Bugs/>}/>
        </Routes>
    </BrowserRouter>
);