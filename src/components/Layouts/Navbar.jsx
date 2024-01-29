import React from 'react';
import Logo from '../../assets/img/logo.png';
import Profile from '../../assets/img/pro3.jfif';
import '../../assets/css/Layout.css';
import { GrLanguage } from 'react-icons/gr';
import { LuRefreshCw } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import Money from './Money';

const Navbar = () => {
  return (
    <section className='navbar-section'>
      <div className='d-flex mx-2'>
        <img src={Logo} width={60} height={60} />

        <p className='text-white fs-5 pt-2'>DelightMyanmar</p>
        <LuRefreshCw className='text-white fs-5 ms-auto mt-3 me-2' />
      </div>
      <div className='d-flex justify-content-between mx-3 py-2'>
        <div className='d-flex'>
          <Link to='/editProfile' className='text-decoration-none'>
            <img
              src={Profile}
              alt=''
              width={57}
              height={57}
              className='profile-img'
            />
          </Link>
          <div className='text-white text-start ms-3'>
            <small className='fw-bold'>username</small>
            <small className='d-block'>09*********67</small>
          </div>
        </div>
        <div>
          <GrLanguage className='text-white fs-5 me-1' />
        </div>
      </div>
      <Money />
    </section>
  );
};

export default Navbar;
