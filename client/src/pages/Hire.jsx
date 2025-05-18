import React from 'react'
import { HiringCompanies } from './Home'

const Hire = () => {
  return (
    <div className='lg:overflow-hidden'>
      <div className='flex items-center justify-center mt-5'>
        <img src="./images/hfu1.svg" alt="" />
      </div>
      <div className='flex items-center justify-center my-30'>
        <img src="./images/hfu2.svg" alt="" />
      </div>
      <div>
        <h1
          className='text-3xl md:text-5xl text-center mt-10 font-[agrandir] border-8 border-orange-500 lg:w-2/5 m-auto'
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          Top Hiring Companies
        </h1>
        <HiringCompanies />
      </div>
      <div className='flex items-center justify-center my-30'>
        <img src="./images/hfu3.svg" alt="" />
      </div>
      <div className='flex items-center justify-center my-30'>
        <img src="./images/hfu4.svg" alt="" />
      </div>
    </div>
  )
}

export default Hire