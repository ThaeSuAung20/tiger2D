import React from 'react';
import '../App.css';
import Navbar from './Layouts/Navbar';
import Carousel from './Layouts/Carousle';
import Footer from './Layouts/Footer';
import PlayItem from './Layouts/PlayItem';

const Home = () => {
  return (
    <div className='App'>
      <Navbar />
      <Carousel />
      <PlayItem />
      <Footer />
    </div>
  );
};

export default Home;
