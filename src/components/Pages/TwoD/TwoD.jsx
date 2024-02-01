import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FaWpforms } from 'react-icons/fa6';
import { FaListUl } from 'react-icons/fa';
import { FaSitemap } from 'react-icons/fa';
import { BsCalendar2Check } from 'react-icons/bs';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../../assets/css/TwoD.css';
import Index from './Index';

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
      content: <p>About content</p>,
    },
    {
      name: 'နိုင်သူများ',
      icon: <FaSitemap className='fs-5' />,
      content: <p>Contact content</p>,
    },
    {
      name: 'ပိတ်ရက်များ',
      icon: <BsCalendar2Check className='fs-5' />,
      content: <p>Contact content</p>,
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

      {/* <Tabs
        defaultActiveKey='in'
        transition={false}
        id='noanim-tab-example'
        className='d-flex justify-content-between px-3'
      >
        <Tab eventKey='in' className='text-center'>
          <FaWpforms className='fs-5' />
          <small className='d-block'>ထွက်ဂဏန်း</small>
        </Tab>
        <Tab className='text-center'>
          <FaListUl className='fs-5' />
          <small className='d-block'>မှတ်တမ်း</small>
        </Tab>
        <Tab className='text-center'>
          <FaSitemap className='fs-5' />
          <small className='d-block'>နိုင်သူများ</small>
        </Tab>
        <Tab className='text-center'>
          <BsCalendar2Check className='fs-5' />
          <small className='d-block'>ပိတ်ရက်များ</small>
        </Tab>
      </Tabs> */}
    </>
  );
};

export default TwoD;
