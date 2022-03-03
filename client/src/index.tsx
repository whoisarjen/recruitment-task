import './global.css'
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Navbar from './layout/navbar'
import Footer from './layout/footer';
import MUI from './layout/MUI';
import DialogDraggableDevice from './components/dialog-draggable-device';
import { store } from './redux/store';
import { Provider } from "react-redux";
import Synchronization from './layout/redux';
import Socket from './layout/socket';

render(
    <Provider store={store}>
        <Synchronization>
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
        </Synchronization>
    </Provider>,
    document.getElementById("root")
);