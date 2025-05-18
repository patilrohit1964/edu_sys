import React from 'react';
import { HiringCompanies } from './Home';

const Hire = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      {/* First image section */}
      <div className='flex items-center justify-center mt-3 md:mt-4 lg:mt-5 px-4 md:px-6 lg:px-8'>
        <img
          src="./images/hfu1.svg"
          alt="Hire from us hero"
          className='w-full max-w-3xl lg:max-w-5xl'
          draggable="false"
          loading="lazy"
        />
      </div>

      {/* Second image section */}
      <div className='flex items-center justify-center my-10 md:my-16 lg:my-30 px-4 md:px-6 lg:px-8'>
        <img
          src="./images/hfu2.svg"
          alt="Hire from us section"
          className='w-full max-w-3xl lg:max-w-5xl'
          draggable="false"
          loading="lazy"
        />
      </div>

      {/* Hiring companies section */}
      <div className='px-4 md:px-8 lg:px-12 my-10 md:my-16 lg:my-20'>
        <h1
          className='text-3xl md:text-4xl lg:text-5xl text-center mt-5 md:mt-8 lg:mt-10 
                     font-[agrandir] border-4 md:border-6 lg:border-8 border-orange-500 
                     w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mx-auto py-3 md:py-4 lg:py-5'
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          Top Hiring Companies
        </h1>
        <div className='mt-6 md:mt-8 lg:mt-10'>
          <HiringCompanies />
        </div>
      </div>

      {/* Third image section */}
      <div className='flex items-center justify-center my-10 md:my-16 lg:my-30 px-4 md:px-6 lg:px-8'>
        <img
          src="./images/hfu3.svg"
          alt="Hire from us information"
          className='w-full max-w-3xl lg:max-w-5xl'
          draggable="false"
          loading="lazy"
        />
      </div>

      {/* Fourth image section */}
      <div className='flex items-center justify-center my-10 md:my-16 lg:my-30 px-4 md:px-6 lg:px-8'>
        <img
          src="./images/hfu4.svg"
          alt="Hire from us benefits"
          className='w-full max-w-3xl lg:max-w-5xl'
          draggable="false"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hire;