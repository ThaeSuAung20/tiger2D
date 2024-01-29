import React from 'react';
import '../../assets/css/Profile.css';
import Profile from '../../assets/img/pro3.jfif';
import { HiOutlineChevronLeft } from 'react-icons/hi';

const EditProfile = () => {
  return (
    <section>
      <div className='edit-nav'>
        <HiOutlineChevronLeft className='me-3' />
        <span>Edit Profile</span>
      </div>
      <img src={Profile} className='edit-img my-4' alt='' />
    </section>
  );
};

export default EditProfile;
