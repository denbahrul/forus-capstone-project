import React from 'react';
import SpinnerBlack from '../assets/spinner-black.gif';

function LoadingPage() {
  return (
    <div className='loading-page'>
      <img src={SpinnerBlack} alt='spinner-black' />
    </div>
  );
}

export default LoadingPage;
