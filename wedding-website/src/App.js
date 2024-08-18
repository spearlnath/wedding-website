import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RSVP_REDIRECT from './components/RSVP_Redirect/RSVP_Redirect';
import BigDay from './components/BigDay/BigDay'
import Travel from './components/Travel/Travel';
import FAQ from './components/FAQ/FAQ';

import Engagement from './components/Engagement/Engagement';
import Proposal   from './components/Proposal/Proposal';
import OurStory   from './components/OurStory/OurStory';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Page Route */}
        <Route
          path="/"
          element={
            <Fragment>
              <Header />
              <Home />
              <BigDay/>
              <Travel/>
              <FAQ/>
              <Footer />
            </Fragment>
          }
        />

        {/* RSVP Redirect Route */}
        <Route 
          path="/rsvp" 
          element={
            <RSVP_REDIRECT />} />
        {/* Subpage Route */}
        <Route 
          path="/enagement" 
          element={
            <Fragment>
              <Header />
              <Engagement />
              <Footer />
            </Fragment>
          } />
        <Route 
          path="/proposal" 
          element={
            <Fragment>
            <Header />
            <Proposal />
            <Footer />
          </Fragment>} />
        <Route 
          path="/ourstory" 
          element={
            <Fragment>
            <Header />
            <OurStory />
            <Footer />
          </Fragment>} />

      </Routes>
    </Router>
  );
}

export default App;
