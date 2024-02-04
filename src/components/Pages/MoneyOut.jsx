import React from 'react';
import '../../assets/css/Wallet.css';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { CiCircleChevDown } from 'react-icons/ci';

const MoneyOut = () => {
  return (
    <section>
      <div className='moneyOut text-white'>
        <Link to='/wallet' className='text-white fs-5'>
          <FiArrowLeft className='me-3' />
        </Link>
        <span>ငွေထုတ်</span>
      </div>
      <form action='' className='mx-3 mt-4'>
        <div className='text-start mb-4'>
          <label class='form-label text-white fw-bold'>
            လက်ခံသူ အကောင့်နာမည်
          </label>
          <input type='text' value='အကောင့်အမည်' className='form-control' />
        </div>
        <div className='text-start mb-4'>
          <label className='form-label text-white fw-bold'>
            ငွေလက်ခံမည့်အကောင့်
          </label>
          <input
            type='text'
            value='ဖုန်းနံပါတ် ထည့်ပါ'
            className='form-control'
          />
        </div>
        <div className='text-start mb-4'>
          <label className='form-label text-white fw-bold'>
            ငွေလက်ခံမည့်အကောင့် နောက်တကြိမ်ဖြည့်ရန်
          </label>
          <input
            type='text'
            value='ဖုန်းနံပါတ် ထည့်ပါ'
            className='form-control'
          />
        </div>
        <div className='text-start mb-4'>
          <label className='form-label  text-white fw-bold'>
            ငွေထုတ်ယူမည့် ပမာဏ{' '}
            {/* <small className='text-white'>ငွေပမာဏ (0)ကျပ်</small> */}
          </label>

          <input type='text' value='ငွေပမာဏ ထည့်ပါ' className='form-control' />
        </div>
        <div className='text-white text-start  mt-2'>
          <span>
            <CiCircleChevDown />
          </span>
          <small className='text-decoration-underline ms-3'>
            ငွေထုတ်နည်း ကြည့်ရန်နှိပ်ပါ။
          </small>
        </div>

        <div className='mt-5'>
          <button className='moneyOutBtn'>ငွေထုတ်မည်</button>
        </div>
      </form>
    </section>
  );
};

export default MoneyOut;
