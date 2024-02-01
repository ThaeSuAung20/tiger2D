import React from 'react';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import Kpay from '../../assets/img/banks/kpay.png';
import Wave from '../../assets/img/banks/wave.png';
import '../../assets/css/Wallet.css';

const BankAccount = () => {
  return (
    <section>
      <div className='moneyOut text-white'>
        <HiOutlineChevronLeft className='me-3' />
        <span>ဘဏ်အကောင့်များ</span>
      </div>
      <div className='d-flex justify-content-start mx-3 mt-4'>
        <img src={Kpay} alt='' width={100} height={100} className='me-4' />
        <img src={Wave} alt='' width={100} height={100} />
      </div>
    </section>
  );
};

export default BankAccount;
