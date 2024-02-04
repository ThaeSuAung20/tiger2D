import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FaWpforms } from 'react-icons/fa6';
import { FaListUl } from 'react-icons/fa';
import { FaSitemap } from 'react-icons/fa';
import { BsCalendar2Check } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../../../assets/css/TwoD.css';
import Index from './Index';
import WinnerList from './WinnerList';
import Holiday from './Holiday';
import History from './History';

import Modal from 'react-bootstrap/Modal';

const TwoD = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const times = [{ title: '12:01 PM' }, { title: '04:30 PM' }];

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
          <Link to='/' className='text-white fs-5'>
            <FiArrowLeft />
          </Link>
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
        <button className='indexBtn mb-4' onClick={() => setShow(true)}>
          ထိုးမည်
        </button>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-90w'
        centered
        aria-labelledby='example-custom-modal-styling-title'
      >
        <Modal.Header closeButton>
          <span>ထိုးမည့် အချိန်ရွေးချယ်ပါ။</span>
        </Modal.Header>
        <Modal.Body>
          {times.map((time) => (
            <div className='timeSection' key={time.title}>
              {time.title}
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TwoD;
