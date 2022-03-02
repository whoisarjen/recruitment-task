import './global.css'
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Navbar from './layout/navbar'
import Footer from './layout/footer';
import Socket from './layout/socket';
import MUI from './layout/MUI';

render(
    <Socket>
        <MUI>
            <Navbar>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </Navbar>
        </MUI>
    </Socket>,
    document.getElementById("root")
);