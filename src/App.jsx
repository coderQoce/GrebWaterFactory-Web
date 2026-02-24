import React, { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading && <LoadingScreen />}

      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
