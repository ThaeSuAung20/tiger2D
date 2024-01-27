import React from 'react';
import { TfiWallet } from 'react-icons/tfi';
import { LuEye } from 'react-icons/lu';
import { LuEyeOff } from 'react-icons/lu';
import { FiPlusCircle } from 'react-icons/fi';
import { FaRocketchat } from 'react-icons/fa';
import '../../assets/css/Layout.css';

const Money = () => {
  return (
    <section className='text-white'>
      <div className='d-flex justify-content-between mx-3 my-2'>
        <TfiWallet className='fs-3' />
        <small className='fw-bold'>ပင်မ ပိုက်ဆံအိတ်</small>
        <LuEye className='fs-4' />
        <span>
          0 <small className='fw-bold'>ကျပ်</small>
        </span>
        <FiPlusCircle className='fs-4' />
      </div>
      <hr className='mx-3' />
      <div className='d-flex justify-content-between mx-3 my-2'>
        <FaRocketchat className='fs-3' />
        <small className='fw-bold'>ဂိမ်း ပိုက်ဆံအိတ်</small>
        <LuEye className='fs-4' />
        <span>
          0 <small className='fw-bold'>ကျပ်</small>
        </span>
        <FiPlusCircle className='fs-4' />
      </div>
    </section>
  );
};

export default Money;
