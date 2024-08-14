import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RSVP_REDIRECT from './components/RSVP_Redirect/RSVP_Redirect';
import BigDay from './components/BigDay/BigDay'
import Travel from './components/Travel/Travel';
import FAQ from './components/FAQ/FAQ';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Page Route */}
        <Route
          path="/"
          element={
            <React.Fragment>
              <Header />
              <Home />
              <BigDay/>
              <Travel/>
              <FAQ/>
              <Footer />
            </React.Fragment>
          }
        />

        {/* RSVP Redirect Route */}
        <Route path="/rsvp" element={<RSVP_REDIRECT />} />
      </Routes>
    </Router>
  );
}

export default App;
