import React from 'react';
import Twod from '../../assets/img/twod.png';
import Threed from '../../assets/img/threed.png';
import '../../assets/css/Layout.css';

const PlayItem = () => {
  const items = [
    {
      image: Twod,
      name: 'နှစ်လုံးထီ',
    },
    {
      image: Threed,
      name: 'သုံးလုံးထီ',
    },
  ];

  return (
    <section className='playitem-section'>
      <div className='d-flex justify-content-around'>
        {items.map((item) => (
          <div key={item.name}>
            <img className='play-img' src={item.image} alt='' />
            <span className='d-block text-white fw-bold'>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlayItem;
