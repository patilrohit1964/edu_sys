import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div
                className="relative w-full"
                data-aos="fade-right"
            >
                <img src="./images/bha.jpg" controls className='h-full w-full object-cover' loop autoPlay></img>
                <div className='absolute hidden md:w-[470px] px-4 md:px-0 md:flex flex-col md:flex-row justify-between items-center md:bottom-[260px] bottom-[100px] left-0 md:left-[100px] gap-4 md:gap-0'>
                    <Link to="/placement" className='w-full md:w-auto'>
                        <button className='bg-gradient-to-r from-purple-700 to-pink-500 w-full md:w-[221px] py-3 cursor-pointer px-10 text-white text-sm md:text-base'>Join Now</button>
                    </Link>
                    <Link to="/refer-earn" className='w-full md:w-auto'>
                        <button className='bg-gradient-to-r from-pink-500 to-pink-600 w-full md:w-[221px] py-3 cursor-pointer px-10 text-white text-sm md:text-base'>Pay Your Fees</button>
                    </Link>
                </div>
            </div>
            <h1 className='text-3xl md:text-5xl text-center mt-10 font-mono'>Top Hiring</h1>
        </>
    )
}

export default Home;