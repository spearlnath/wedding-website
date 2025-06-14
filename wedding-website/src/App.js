import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import BigDay from './components/BigDay/BigDay'
import Travel from './components/Travel/Travel';
import FAQ from './components/FAQ/FAQ';
import REGISTRY_REDIRECT from './components/Registry_Redirect/Registry_Redirect'
import Proposal   from './components/Proposal/Proposal';
import OurStory   from './components/OurStory/OurStory';
import Engagement from './components/Engagement/Engagement';

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
        {/* Registry Redirect Route */}
        <Route 
          path="/registry" 
          element={
            <REGISTRY_REDIRECT />} />
        {/* Subpage Route */}
        <Route 
          path="/engagement" 
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
