import './global.css'
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Navbar from './layout/navbar'

render(
    <BrowserRouter>
        <Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Navbar>
    </BrowserRouter>,
    document.getElementById("root")
);