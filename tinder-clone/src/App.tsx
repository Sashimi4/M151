import React from 'react';
import Home from './pages/Home';
import LandinPage from './pages/LandingPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          {/* Adding landing page for now, will later split he mup between authenticated and not authenticated routes*/}
          <Route path="/welcome" element={<LandinPage/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
