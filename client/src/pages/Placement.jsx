import React from 'react'
import { PlacementSlider } from '../components/sliders/PeopleSlider'
import { HiringCompanies } from './Home'

const Placement = () => {
  return (
    <div className='lg:overflow-hidden'>
      <div className='flex items-center justify-center'>
        <img src="./images/placement.svg" alt="" />
      </div>
      <section className='mt-36 mb-18'>
        <h1
          className='text-3xl md:text-5xl text-center mt-10 font-[agrandir] border-8 border-orange-500 lg:w-2/5 m-auto'
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          Top Hiring Companies
        </h1>
        <HiringCompanies />
      </section>
      <div className='flex items-center justify-center'>
        <img src="./images/placement2.svg" alt="" />
      </div>
      <section>
        <PlacementSlider />
      </section>
    </div >
  )
}

export default Placement