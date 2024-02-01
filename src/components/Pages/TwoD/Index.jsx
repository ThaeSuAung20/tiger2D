import React from 'react';

const Index = () => {
  return (
    <section>
      <div className='showDigit mx-3 my-3'>
        <small className='px-3'>Feb 1, 2024, 5:32:50 PM</small>
        <div className='digit'>61</div>
        <div>
          <small className='d-flex justify-content-center fw-bold'>
            12:00 PM
          </small>
          <div className='d-flex justify-content-between mx-3'>
            <div className='smallBox'>
              <span className='fw-bold '>SET</span>
              <div className='dashLine mx-auto mb-2 mt-1'></div>
              <span>1,369.92</span>
            </div>
            <div className='smallBox'>
              <span className='fw-bold '>VALUE</span>
              <div className='dashLine mx-auto mb-2 mt-1'></div>
              <span>1,369.92</span>
            </div>
            <div className='smallBox'>
              <span className='fw-bold '>2D</span>
              <div className='dashLine mx-auto mb-2 mt-1'></div>
              <span>92</span>
            </div>
          </div>
        </div>
        <div className='my-3 pb-3'>
          <small className='d-flex justify-content-center fw-bold'>
            04:30 PM
          </small>
          <div className='d-flex justify-content-between mx-3'>
            <div className='smallBox mx-auto'>
              <span className='fw-bold'>SET</span>
              <div className='dashLine mx-auto mb-2 mt-1'></div>
              <span>1,369.92</span>
            </div>
            <div className='smallBox mx-auto'>
              <span className='fw-bold'>VALUE</span>
              <div className='dashLine mx-auto mb-2 mt-1'></div>
              <span>1,369.92</span>
            </div>
            <div className='smallBox'>
              <span className='fw-bold '>2D</span>
              <div className='dashLine mx-auto mb-2 mt-1'></div>
              <span>92</span>
            </div>
          </div>
        </div>
      </div>
      <div className='showBet mx-3'>
        <small className='fw-bold pb-2'>Feb 1, 2024</small>
        <div className='d-flex justify-content-around'>
          <div className='py-3'>
            <small className='d-block'>12:01 PM</small>
            <small className='d-block text-danger fw-bold mt-2'>25</small>
          </div>
          <div className='py-3'>
            <small className='d-block'>04:30 PM</small>
            <small className='d-block text-danger fw-bold mt-2'>61</small>
          </div>
        </div>
      </div>
      <div className='showBet mx-3 my-3'>
        <small className='fw-bold pb-2'>Feb 1, 2024</small>
        <div className='d-flex justify-content-around'>
          <div className='py-3'>
            <small className='d-block'>12:01 PM</small>
            <small className='d-block text-danger fw-bold mt-2'>25</small>
          </div>
          <div className='py-3'>
            <small className='d-block'>04:30 PM</small>
            <small className='d-block text-danger fw-bold mt-2'>61</small>
          </div>
        </div>
      </div>
      <div className='showBet mx-3 my-3'>
        <small className='fw-bold pb-2'>Feb 1, 2024</small>
        <div className='d-flex justify-content-around'>
          <div className='py-3'>
            <small className='d-block'>12:01 PM</small>
            <small className='d-block text-danger fw-bold mt-2'>25</small>
          </div>
          <div className='py-3'>
            <small className='d-block'>04:30 PM</small> my-3
            <small className='d-block text-danger fw-bold mt-2'>61</small>
          </div>
        </div>
      </div>
      <div className='showBet mx-3 my-3'>
        <small className='fw-bold pb-2'>Feb 1, 2024</small>
        <div className='d-flex justify-content-around'>
          <div className='py-3'>
            <small className='d-block'>12:01 PM</small>
            <small className='d-block text-danger fw-bold mt-2'>25</small>
          </div>
          <div className='py-3'>
            <small className='d-block'>04:30 PM</small>
            <small className='d-block text-danger fw-bold mt-2'>61</small>
          </div>
        </div>
      </div>
      <div className='showBet mx-3 my-3'>
        <small className='fw-bold pb-2'>Feb 1, 2024</small>
        <div className='d-flex justify-content-around'>
          <div className='py-3'>
            <small className='d-block'>12:01 PM</small>
            <small className='d-block text-danger fw-bold mt-2'>25</small>
          </div>
          <div className='py-3'>
            <small className='d-block'>04:30 PM</small>
            <small className='d-block text-danger fw-bold mt-2'>61</small>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <button className='indexBtn mb-4'>ထိုးမည်</button>
        </div>
      </div>
    </section>
  );
};

export default Index;
