import React from 'react';
import Lottie from 'lottie-react';
import './loader.css'
import loading from '../../../assets/loading.json'

const Loader = () => {
  return (
    <div className="loader">
        <Lottie className="load_lottie" animationData={loading}/>
        <h4 className='loading text-lg'>ANALYZING...</h4>
    </div>
  );
};

export default Loader;
