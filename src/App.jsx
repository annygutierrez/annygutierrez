import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import BlobCursor from './components/BlobCursor';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-241150928-1";

ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Notes />} /> */}
              <Route path="/" element={<Home />} />
            </Routes>
            <BlobCursor />
          </BrowserRouter>
  );
}

export default App;