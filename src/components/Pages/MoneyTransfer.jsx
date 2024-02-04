import React from 'react';
import Navbar from '../Layouts/Navbar';

const MoneyTransfer = () => {
  return (
    <div>
      <Navbar heading='ဂိမ်းသို့ ငွေလွှဲခြင်း' icon='true' />
      <div className='transferSection mx-3 mt-5'>
        <div className='d-flex justify-content-between text-start px-3 pt-2 transferBox'>
          <div className='d-block'>
            <p className='fw-bold'>မှ</p>
            <p className='text-muted'>ပင်မ ပိုက်ဆံအိတ်</p>
          </div>
          <div className='d-block'>
            <p className='fw-bold'>သို့</p>
            <p className='text-muted'>ဂိမ်း ပိုက်ဆံအိတ်</p>
          </div>
        </div>
        <form action='' className='mx-3 my-3 pb-2'>
          <div className='text-start mb-4'>
            <label class='form-label text-dark fw-bold'>
              လွှဲပြောင်းမည့်ငွေပမာဏ
            </label>
            <input
              type='number'
              placeholder='Enter Amount'
              class='form-control amountInput'
            />
          </div>
        </form>
      </div>
      <div className='mt-4 mx-3'>
        <button className='transferBtn'>သို့လွှဲပြောင်းမည်</button>
      </div>
    </div>
  );
};

export default MoneyTransfer;
