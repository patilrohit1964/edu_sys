import React from 'react'
import { PlacementSlider } from '../components/sliders/PeopleSlider'
import { HiringCompanies } from './Home'
import { Link } from 'react-router-dom'

const SuccessStory = () => {
    return (
        <div>
            <div className='flex items-center justify-center relative'>
                <img src="./images/successtory1.svg" alt="" draggable="false" loading="lazy" />
                <Link to={"/contact"}>
                    <button className='absolute py-5 text-2xl px-10 bg-purple-500 rounded-lg bottom-15 text-white left-62'>Contact Us</button>
                </Link>
            </div>
            <section>
                <PlacementSlider />
            </section>
            <section>
                <HiringCompanies />
            </section>
            <section className='flex items-center justify-center my-30'>
                <img src="./images/successtory2.svg" alt="" draggable="false" loading="lazy" />
            </section>
            <section className='flex items-center justify-center my-30'>
                <img src="./images/ss3.svg" alt="" draggable="false" loading="lazy" />
            </section>
            <section className='flex items-center justify-center my-30'>
                <img src="./images/ss4.svg" alt="" draggable="false" loading="lazy" />
            </section>
            <section className='flex items-center justify-center my-30'>
                <img src="./images/ss5.svg" alt="" draggable="false" loading="lazy" />
            </section>
            <section className='flex items-center justify-center my-30'>
                <img src="./images/ss6.svg" alt="" draggable="false" loading="lazy" />
            </section>
            <section className='flex items-center justify-center my-30 relative'>
                <img src="./images/ss7.svg" alt="" draggable="false" loading="lazy" />
                <Link to={"/contact"}>
                    <button className='absolute py-2 text-2xl px-10 bg-purple-500 rounded-lg bottom-8 text-white left-62'>Contact Us</button>
                </Link>
            </section>
        </div>
    )
}

export default SuccessStory