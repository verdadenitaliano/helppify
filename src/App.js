import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
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
      <CardFeatures />
      <CardFeatures />
      <CardFeatures />
    </>
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
