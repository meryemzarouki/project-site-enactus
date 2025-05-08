import React from 'react';
import Navbar from './components/navbar';
import Accueil from "./components/accueil"; 
import Footer from "./components/footer";

function App() {
  return (
    <div className="scroll-smooth font-sans">
      <Navbar />
      <Accueil />
      <Footer/>
      </div>
  );
}

export default App;