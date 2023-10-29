import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";


import Root from "./pages/root";
import About from "./pages/about";
import Bugs from "./pages/bugs";
import Enter from "./pages/enter";
import Register from "./pages/register";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Root/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path='/bugs' element={<Bugs/>}/>
            <Route path='/enter' element={<Enter/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
);