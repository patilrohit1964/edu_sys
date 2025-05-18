import React from 'react'
import { PlacementSlider } from '../components/sliders/PeopleSlider'
import { HiringCompanies } from './Home'

const SuccessStory = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <img src="./images/successtory1.svg" alt="" />
            </div>
            <section>
                <PlacementSlider />
            </section>
            <section>
                <HiringCompanies />
            </section>
            <section className='flex items-center justify-center my-30'>
                <img src="./images/successtory2.svg" alt="" />
            </section>
            <section className='flex items-center justify-center my-30'>
                <img src="./images/ss3.svg" alt="" />
            </section>
            <section className='flex items-center justify-center my-30'>
                <img src="./images/ss4.svg" alt="" />
            </section>
            <section className='flex items-center justify-center my-30'>
                <img src="./images/ss5.svg" alt="" />
            </section>
            <section className='flex items-center justify-center my-30'>
                <img src="./images/ss6.svg" alt="" />
            </section>
            <section className='flex items-center justify-center my-30'>
                <img src="./images/ss7.svg" alt="" />
            </section>
        </div>
    )
}

export default SuccessStory