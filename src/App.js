import React from 'react';

import { Footer, Blog, Possibility, WhatGPT3, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';
import CardFeatures from './components/cards/CardFeatures';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <>
      <CardFeatures />
      <WhatGPT3 />
    </>
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
