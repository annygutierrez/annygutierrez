import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-241150928-1";

ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Notes />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/potato-calendar/privacy-policy/*" element={<PrivacyPolicy />} />
              <Route path="/potato-calendar/*" element={<PrivacyPolicy />} />
            </Routes>
          </BrowserRouter>
  );
}

export default App;