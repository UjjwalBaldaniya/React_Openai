import './App.css';

import React from 'react'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Brands from './Components/Brands';
import GPT3 from './Components/GPT3';
import Features from './Components/Features';
import Possibility from './Components/Possibility';
import CTA from './Components/CTA';
import Blog from './Components/Blog';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brands />
      <GPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer/>
    </div>
  )
}

export default App