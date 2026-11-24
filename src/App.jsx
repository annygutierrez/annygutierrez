import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MajorWorks from './pages/MajorWorks';
import Poems from './pages/Poems';
import MicroStories from './pages/MicroStories';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Notes from './pages/Notes';
import BlobCursor from './components/BlobCursor';
import { LanguageProvider } from './i18n/LanguageContext';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-241150928-1";

ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
          <LanguageProvider>
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Notes />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/major-works" element={<MajorWorks />} />
              <Route path="/poems" element={<Poems />} />
              <Route path="/micro-stories" element={<MicroStories />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <BlobCursor />
          </BrowserRouter>
          </LanguageProvider>
  );
}

export default App;