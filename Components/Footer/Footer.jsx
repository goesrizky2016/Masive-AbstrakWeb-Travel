import React from 'react';
import './Footer.css'; // Import file CSS untuk footer
import Copyright from '../../Assets/Icons/c-circle.svg';

function Footer() {
  return (
    <div className='footer position-relative'>
      <div className='bg-shape position-absolute'></div>
      <div className='py-3'>
        <p className='mb-0'>
          <img src={Copyright} className='mx-1' alt="Hak Cipta" />
          2024 Anterin membuat Perjalananmu semakin berkesan
        </p>
      </div>
    </div>
  )
}

export default Footer;
