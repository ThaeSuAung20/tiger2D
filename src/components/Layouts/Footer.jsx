import React from 'react';
import { FaRegGem } from 'react-icons/fa';
import { TfiWallet } from 'react-icons/tfi';
import { SlEarphones } from 'react-icons/sl';
import { PiUserListBold } from 'react-icons/pi';
import '../../assets/css/Layout.css';

const Footer = () => {
  const links = [
    {
      icon: <FaRegGem />,
      name: 'ပင်မ',
      link: '/#',
    },
    {
      icon: <TfiWallet />,
      name: 'ပိုက်ဆံအိတ်',
      link: '/#',
    },
    {
      icon: <SlEarphones />,
      name: 'အကူအညီ',
      link: '/#',
    },
    {
      icon: <PiUserListBold />,
      name: 'ပရိုဖိုင်',
      link: '/#',
    },
  ];
  return (
    <section className='footer-section'>
      <div className='d-flex justify-content-around '>
        {links.map((link) => (
          <div key={link.name}>
            <span className='fs-4'>{link.icon}</span>
            <small className='d-block'>{link.name}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
