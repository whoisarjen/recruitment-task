import './global.css'
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Navbar from './layout/navbar'
import MUI from './layout/MUI';
import { store } from './redux/store';
import { Provider } from "react-redux";
import Synchronization from './layout/redux';
import Socket from './layout/socket';
import DialogDevice from './components/dialog-device';

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
                        <DialogDevice />
                    </Navbar>
                </MUI>
            </Socket>
        </Synchronization>
    </Provider>,
    document.getElementById("root")
);