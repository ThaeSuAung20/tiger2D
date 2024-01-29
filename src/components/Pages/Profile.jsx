import React from 'react';
import Navbar from '../Layouts/Navbar';
import '../../assets/css/Profile.css';
import { FaRegStar } from 'react-icons/fa';
import { LuFileInput } from 'react-icons/lu';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { HiOutlineChevronRight } from 'react-icons/hi';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className='profile-item'>
        <FaRegStar className='fs-4 me-4' />
        <span>မိတ်ဆက်ကုဒ်</span>
        <HiOutlineChevronRight className='ms-auto fs-4' />
      </div>
      <div className='profile-item'>
        <LuFileInput className='fs-4 me-4' />
        <span>version 1.0</span>
        <HiOutlineChevronRight className='ms-auto fs-4' />
      </div>
      <div className='profile-item'>
        <RiLogoutCircleRLine className='fs-4 me-4' />
        <span>Exit</span>
        <HiOutlineChevronRight className='ms-auto fs-4' />
      </div>
    </div>
  );
};

export default Profile;
