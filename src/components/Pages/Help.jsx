import React from 'react';
import '../../assets/css/Help.css';
import { FaPhone } from 'react-icons/fa';
import Viber from '../../assets/img/viber.png';

const Help = () => {
  return (
    <section className='mx-3 my-3'>
      <div className='my-3'>
        <p className='help-text'>
          အောက်ပါဖုန်းနံပါတ်သည်{' '}
          <span className='text-warning'>DelightMyanmar</span>၏
          ဝန်ဆောင်မှုဖုန်းနံပါတ်ဖြစ်ပါသည်။
        </p>
        <p className='help-text'>
          နေ့စဉ် (၂၄) နာရီ၊ ပိတ်ရက်မရှိ ဝန်ဆောင်မှုပေးနေပါသည်။
        </p>
      </div>
      <div className='help-section mx-3'>
        <div className='mx-3'>
          <span className='me-4'>
            <FaPhone />
          </span>{' '}
          <small className='fw-bold'>09 123 456 789</small>
        </div>
        <div className='mx-3'>
          <span className='me-4'>
            <FaPhone />
          </span>{' '}
          <small className='fw-bold'>09 123 456 789</small>
        </div>
        <div className='mx-3'>
          <span className='me-3'>
            <img src={Viber} alt='' className='viber' />
          </span>{' '}
          <small>09 123 456 789</small>
        </div>
        <div className='mx-3'>
          <span className='me-3'>
            <img src={Viber} alt='' className='viber' />
          </span>{' '}
          <small>09 123 456 789</small>
        </div>
      </div>
    </section>
  );
};

export default Help;
