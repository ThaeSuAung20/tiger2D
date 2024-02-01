import React, { useState } from 'react';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { CiCircleChevDown } from 'react-icons/ci';
import Kpay from '../../assets/img/banks/kpay.png';
import Wave from '../../assets/img/banks/wave.png';
import '../../assets/css/Wallet.css';

const MoneyIn = () => {
  const [selectedAmount, setSelectedAmount] = useState('');

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
  };
  const amounts = ['5000', '10000', '50000', '100000', '200000', '500000'];
  return (
    <section>
      <div className='moneyOut text-white'>
        <HiOutlineChevronLeft className='me-3' />
        <span>ငွေဖြည့်</span>
      </div>
      <div className='text-start mx-3 mt-3'>
        <span className='text-white fw-bold '>ငွေသွင်းမည့် နည်းလမ်းရွေးပါ</span>
        <div>
          <img src={Kpay} alt='' className='bankImg' />
          <img src={Wave} alt='' className='bankImg' />
        </div>
      </div>
      <form action='' className='mx-3 mt-4'>
        <div className='text-start'>
          <label className='form-label text-white fw-bold mb-3'>
            ငွေပမာဏ ထည့်ပါ
          </label>
          <input
            type='number'
            placeholder='ငွေပမာဏ ထည့်ပါ'
            className='form-control amountInput'
            value={selectedAmount}
          />
        </div>
        <div className='d-flex justify-content-between my-3 flex-wrap'>
          {amounts.map((amount) => (
            <div
              key={amount}
              className={`amountBox ${
                selectedAmount === amount ? 'selected' : ''
              }`}
              onClick={() => handleAmountClick(amount)}
            >
              {amount}
            </div>
          ))}
        </div>
        <div className='text-white text-start  mt-2'>
          <span>
            <CiCircleChevDown />
          </span>
          <span className='text-decoration-underline ms-3'>
            ငွေဖြည့်နည်း ကြည့်ရန်နှိပ်ပါ။
          </span>
        </div>

        <div className='mt-4'>
          <button className='moneyInBtn'>ဆက်သွားမည်</button>
        </div>
      </form>
    </section>
  );
};

export default MoneyIn;
