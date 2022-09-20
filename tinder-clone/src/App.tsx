import React from 'react';
import Home from './pages/Home';
import LandinPage from './pages/LandingPage';
import MessageShelf from './shelf-content/MessageShelf';
import ProfileShelf from './shelf-content/ProfileShelf';
import SearchShelf from './shelf-content/SearchShelf';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className={"app-container"}>
      <h1>App Below</h1>
      <BrowserRouter>
        <Routes>
          {/* Adding landing page for now, will later split he mup between authenticated and not authenticated routes*/}
          <Route path="/login" element={<LandinPage/>} />
          {/* */}
          <Route path="/search" element={<SearchShelf/>} />
          <Route path="/profile" element={<ProfileShelf/>} />
          <Route path="/messages" element={<MessageShelf/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
