import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Clients from './components/Clients';
import Services from './components/Services';
import InfoCards from './components/InfoCards';
import MechanicalServices from './components/MechanicalServices';
import Industries from './components/Industries';
import Preloader from './components/Preloader';
import FloatingActionBar from './components/FloatingActionBar';
import OurTeam from './components/OurTeam';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 1.5 seconds
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Render only the preloader while loading
    return <Preloader />;
  }

  // Once loading is done, render the actual page content
  return (
    <>
      <Header />
      <Hero />
      <About />
      <InfoCards />
      <Services />
      <MechanicalServices />
      <Industries />
      <Clients />
      <OurTeam />
      <Contact />
      <FloatingActionBar />
      <Footer />
    </>
  );
}

export default App;
