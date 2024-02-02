import React from 'react';
import Twod from '../../assets/img/twod.png';
import Threed from '../../assets/img/threed.png';
import '../../assets/css/Layout.css';
import { Link } from 'react-router-dom';

const PlayItem = () => {
  const items = [
    {
      image: Twod,
      name: 'နှစ်လုံးထီ',
      link: '/twod/index',
    },
    {
      image: Threed,
      name: 'သုံးလုံးထီ',
      link: '/threed/index',
    },
  ];

  return (
    <section className='playitem-section'>
      <div className='d-flex justify-content-around'>
        {items.map((item) => (
          <div key={item.name}>
            <Link to={item.link} className='text-decoration-none'>
              <img className='play-img' src={item.image} alt='' />
              <span className='d-block text-white fw-bold'>{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlayItem;
