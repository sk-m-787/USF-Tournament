import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Rules from './components/Rules';
import Players from './components/Players';
import Standings from './components/Standings';
import Fixtures from './components/Fixtures';
import Register from './components/Register';
import Footer from './components/Footer';
import Particles from './components/Particles';

function App() {
  return (
    <>
      <Particles />
      <Navbar />
      <Hero />
      <Info />
      <Rules />
      <Players />
      <Standings />
      <Fixtures />
      <Register />
      <Footer />
    </>
  );
}

export default App;
