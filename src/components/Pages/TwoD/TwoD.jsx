import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FaWpforms } from 'react-icons/fa6';
import { FaListUl } from 'react-icons/fa';
import { FaSitemap } from 'react-icons/fa';
import { BsCalendar2Check } from 'react-icons/bs';
import '../../../assets/css/TwoD.css';
import Index from './Index';
import WinnerList from './WinnerList';
import Holiday from './Holiday';
import History from './History';

const TwoD = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: 'ထွက်ဂဏန်း',
      icon: <FaWpforms className='fs-5' />,
      content: <Index />,
    },
    {
      name: 'မှတ်တမ်း',
      icon: <FaListUl className='fs-5' />,
      content: <History />,
    },
    {
      name: 'နိုင်သူများ',
      icon: <FaSitemap className='fs-5' />,
      content: <WinnerList />,
    },
    {
      name: 'ပိတ်ရက်များ',
      icon: <BsCalendar2Check className='fs-5' />,
      content: <Holiday />,
    },

    // Add more tabs as needed
  ];
  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className='twoNav text-white'>
        <div className='d-flex justify-conten-between pb-4'>
          <FiArrowLeft />
          <span className='mx-auto fw-bold fs-5'>နှစ်လုံးထီ</span>
        </div>

        <div className='d-flex justify-content-between text-white px-3'>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`${activeTab === index ? 'active' : ''}`}
            >
              {tab.icon}
              <small
                className='d-block mt-2'
                onClick={() => handleClick(index)}
              >
                {tab.name}
              </small>
            </div>
          ))}
        </div>
      </div>
      <div className='content text-white'>{tabs[activeTab].content}</div>
      <div className='d-flex justify-content-center'>
        <button className='indexBtn mb-4'>ထိုးမည်</button>
      </div>
    </>
  );
};

export default TwoD;
