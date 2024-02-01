import React from 'react';
import '../../assets/css/Profile.css';
import Profile from '../../assets/img/pro3.jfif';
import { HiOutlineChevronLeft } from 'react-icons/hi';

const EditProfile = () => {
  return (
    <section>
      <div className='editNav text-white'>
        <HiOutlineChevronLeft className='me-3' />
        <span>Edit Profile</span>
      </div>
      <img src={Profile} className='editImg my-4' alt='' />
      <form action=''>
        <div className='mx-3 text-start'>
          <label class='form-label text-white fw-bold'>Phone Number</label>
          <input
            type='text'
            value='09123456789'
            class='form-control'
            readOnly
          />
        </div>
        <div className='mx-3 mt-4 text-start'>
          <label className='form-label text-white fw-bold'>Name</label>
          <input type='text' value='username' className='form-control' />
        </div>
        <div className='mx-3 mt-5'>
          <button className='editBtn'>Save</button>
        </div>
      </form>
    </section>
  );
};

export default EditProfile;
