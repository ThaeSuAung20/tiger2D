import React from 'react';
import Navbar from '../Layouts/Navbar';
import Carousel from '../Layouts/Carousle';
import PlayItem from '../Layouts/PlayItem';
import Footer from '../Layouts/Footer';

const Home = () => {
  return (
    <div>
      <Navbar heading='' icon='false' />
      <Carousel />
      <PlayItem />
      <Footer />
    </div>
  );
};

export default Home;
