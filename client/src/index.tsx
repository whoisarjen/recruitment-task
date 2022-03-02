import './global.css'
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Navbar from './layout/navbar'
import Footer from './layout/footer';

render(
    <BrowserRouter>
        <Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Navbar>
    </BrowserRouter>,
    document.getElementById("root")
);