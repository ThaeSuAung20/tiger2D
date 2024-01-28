import React from 'react';
import Navbar from '../Layouts/Navbar';
import Carousel from '../Layouts/Carousle';
import PlayItem from '../Layouts/PlayItem';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <PlayItem />
    </div>
  );
};

export default Home;
