import './global.css'
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Navbar from './layout/navbar'
import Footer from './layout/footer';
import Socket from './layout/socket';
import MUI from './layout/MUI';
import DialogDraggableDevice from './components/dialog-draggable-device';
import { store } from './redux/store';
import { Provider } from "react-redux";

render(
    <Provider store={store}>
        <Socket>
            <MUI>
                <Navbar>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </BrowserRouter>
                    <Footer />
                    <DialogDraggableDevice />
                </Navbar>
            </MUI>
        </Socket>
    </Provider>,
    document.getElementById("root")
);