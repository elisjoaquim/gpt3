import React from 'react';
import './App.css';
import {
  Footer,
  Blog,
  Features,
  Header,
  WhatGP3,
  Possibility,
} from './containers';
import { CTA, Brand, NavBar } from './components';

const App = () => {
  return (
    <main className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGP3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </main>
  );
};

export default App;
