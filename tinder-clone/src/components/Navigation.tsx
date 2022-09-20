import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import LandinPage from '../pages/LandingPage';
import Home from '../pages/Home';

const Navigation = () => {

    const { isAuthenticated } = useAuth0();

    return (
        <BrowserRouter>
            <Routes>
                {/* Set to '!' negative for development purposes. Reason 
                being to not needing to always enter login credentials. */}
                { !isAuthenticated ? (
                    <>
                        <Route path="/welcome" element={<LandinPage/>} />
                        <Route path="/home" element={<Home/>} />
                    </>
                ) : 
                    <>
                        <Route path="/welcome" element={<LandinPage/>} />
                    </>
                }
            </Routes>
        </BrowserRouter>
    );
}
export default Navigation;
