import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import MeetDirector from './components/MeetDirector';
import Products from './components/Products';
import Facilities from './components/Facilities';
import Delivery from './components/Delivery';
// import CustomerFeedback from './components/CustomerFeedback';
import CSR from './components/CSR';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <About />
        <MeetDirector />
        <Products />
        <Facilities />
        <Delivery />
        {/* <CustomerFeedback /> */}
        <CSR />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
