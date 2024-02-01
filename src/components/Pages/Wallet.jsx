import React from 'react';
import Navbar from '../Layouts/Navbar';
import '../../assets/css/Wallet.css';
import { CiCircleChevDown } from 'react-icons/ci';
import { CiCircleChevUp } from 'react-icons/ci';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { FaLandmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../Layouts/Footer';

const Wallet = () => {
  const items = [
    {
      icon: <CiCircleChevDown />,
      name: 'ငွေထုတ်',
      link: '/wallet/money-out',
    },
    {
      icon: <CiCircleChevUp />,
      name: 'ငွေဖြည့်',
      link: '/wallet/money-in',
    },
    {
      icon: <FaArrowRightArrowLeft />,
      name: 'ဂိမ်းသို့ ငွေလွှဲခြင်း',
      link: '/wallet/money-transfer',
    },
    {
      icon: <FaArrowRightArrowLeft />,
      name: 'ပင်မသို့ ငွေလွှဲခြင်း',
      link: '/wallet/money-out',
    },
  ];

  return (
    <>
      <Navbar heading='' icon='false' />
      <section className='walletSection'>
        <div className='row my-2 mx-3 '>
          {items.map((item) => (
            <div
              key={item.name}
              className='wallet mx-auto bg-white py-3 rounded text-dark '
            >
              <span>{item.icon}</span>
              <Link to={item.link} className='text-decoration-none text-dark'>
                <small className='d-block fs'>{item.name}</small>
              </Link>
            </div>
          ))}
        </div>
        <div className='d-flex mx-3'>
          <div className='subIcon py-2'>
            <FaArrowRightArrowLeft className='me-2' />
            <small>ငွေစာရင်း</small>
          </div>
          <div className='subIcon py-2'>
            <Link
              to='/wallet/bank-account'
              className='text-decoration-none text-white'
            >
              <FaLandmark className='me-2' />
              <small>ဘဏ်အကောင့်များ</small>
            </Link>
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
        <div className='timeSection mx-2'>
          <small>ငွေသွင်းငွေထုတ်ဝန်ဆောင်မှုအချိန်</small>
          <hr />
          <small className='d-block'>
            နေ့စဉ် ၂၄ နာရီ ၊ ပိတ်ရက်မရှိဝန်ဆောင်မှုပေးနေပါသည်။
          </small>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Wallet;
