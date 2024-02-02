import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FaWpforms } from 'react-icons/fa6';
import { FaListUl } from 'react-icons/fa';
import { FaSitemap } from 'react-icons/fa';
import '../../../assets/css/ThreeD.css';
import Index from './Index';
import History from './History';
import WinnerList from './WinnerList';

const ThreeD = () => {
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

    // Add more tabs as needed
  ];
  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className='threeNav text-white'>
        <div className='d-flex justify-conten-between pb-4'>
          <FiArrowLeft />
          <span className='mx-auto fw-bold fs-5'>သုံးလုံးထီ</span>
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
        <button className='threeBtn mb-4'>ထိုးမည်</button>
      </div>
    </>
  );
};

export default ThreeD;
