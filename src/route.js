import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from "./pages/root";
import About from "./pages/about";


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root/> } />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Routers;