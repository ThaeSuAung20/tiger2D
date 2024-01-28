import React from 'react';
import Navbar from '../Layouts/Navbar';
import '../../assets/css/Wallet.css';
import { CiCircleChevDown } from 'react-icons/ci';
import { CiCircleChevUp } from 'react-icons/ci';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';

const Wallet = () => {
  const items = [
    {
      icon: <CiCircleChevDown />,
      name: 'ငွေထုတ်',
    },
    {
      icon: <CiCircleChevUp />,
      name: 'ငွေဖြည့်',
    },
    {
      icon: <FaArrowRightArrowLeft />,
      name: 'ဂိမ်းသို့ ငွေလွှဲခြင်း',
    },
    {
      icon: <FaArrowRightArrowLeft />,
      name: 'ပင်မသို့ ငွေလွှဲခြင်း',
    },
  ];

  return (
    <section className='wallet-section'>
      <Navbar />
      <div className='row my-2 mx-3 '>
        {items.map((item) => (
          <div
            key={item.name}
            className='wallet mx-auto bg-white py-3 rounded text-dark '
          >
            <span>{item.icon}</span>
            <small className='d-block fs'>{item.name}</small>
          </div>
        ))}
      </div>
      <div className='d-flex mx-3'>
        <div className='sub-icon py-2'>
          <FaArrowRightArrowLeft className='me-2' />
          <small>ငွေစာရင်း</small>
        </div>
        <div className='sub-icon py-2'>
          <FaArrowRightArrowLeft className='me-2' />
          <small>ဘဏ်အကောင့်များ</small>
        </div>
      </div>
      <div className='text-white text-start mx-3 mt-2'>
        <span>
          <CiCircleChevDown />
        </span>
        <small className='text-decoration-underline ms-3'>
          ငွေဖြည့်နည်း ကြည့်ရန်နှိပ်ပါ။
        </small>
      </div>
      <div className='text-white text-start mx-3 my-3'>
        <span>
          <CiCircleChevDown />
        </span>
        <small className='text-decoration-underline ms-3'>
          ငွေထုတ်နည်း ကြည့်ရန်နှိပ်ပါ။
        </small>
      </div>
      <div className='time-section mx-2'>
        <small>ငွေသွင်းငွေထုတ်ဝန်ဆောင်မှုအချိန်</small>
        <hr />
        <small className='d-block'>
          နေ့စဉ် ၂၄ နာရီ ၊ ပိတ်ရက်မရှိဝန်ဆောင်မှုပေးနေပါသည်။
        </small>
      </div>
    </section>
  );
};

export default Wallet;
