import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Rules from './components/Rules';
import Players from './components/Players';
import Standings from './components/Standings';
import Fixtures from './components/Fixtures';
import Footer from './components/Footer';
import Particles from './components/Particles';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'info':      return <Info />;
      case 'rules':     return <Rules />;
      case 'players':   return <Players />;
      case 'standings': return <Standings />;
      case 'fixtures':  return <Fixtures />;
      default:          return <Hero setPage={setPage} />;
    }
  };

  return (
    <>
      <Particles />
      <Navbar page={page} setPage={setPage} />
      <main style={{ paddingTop: 70 }}>
        {renderPage()}
      </main>
      <Footer />
    </>
  );
}

export default App;