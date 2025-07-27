import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Startseite from './pages/Startseite';
import UeberUns from './pages/UeberUns';
import UnsereHerde from './pages/UnsereHerde';
import HighlandCattle from './pages/HighlandCattle';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Startseite />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/unsere-herde" element={<UnsereHerde />} />
            <Route path="/highland-cattle" element={<HighlandCattle />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;