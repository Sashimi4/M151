import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandinPage from '../pages/LandingPage';
import Home from '../pages/Home';

const Navigation = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/welcome" element={<LandinPage/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default Navigation;
