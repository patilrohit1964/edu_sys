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
                <div className='absolute hidden md:w-[562px] px-4 md:px-0 md:flex flex-col md:flex-row justify-between items-center md:bottom-[312px] bottom-[200px] left-0 md:left-[122px] gap-4 md:gap-0'>
                    <Link to="/placement" className='w-full md:w-auto'>
                        <button className='bg-gradient-to-r from-purple-700 to-pink-500 w-full md:w-[270px] py-4 cursor-pointer px-10 text-white text-sm md:text-2xl font-[agrandir] border-2'>Join Now</button>
                    </Link>
                    <Link to="/refer-earn" className='w-full md:w-auto'>
                        <button className='bg-gradient-to-r from-pink-500 to-pink-600 w-full md:w-[270px] py-4 cursor-pointer px-10 text-white text-sm md:text-2xl font-[agrandir] ml-5 border-2'>Pay Your Fees</button>
                    </Link>
                </div>
                <div className='absolute bottom-[100px] left-[150px] flex text-white flex-wrap'>
                    <div>
                        <p>Over 22K+ Courses views</p>
                    </div>
                    <div>
                        <p>More than 10 Years of Experience</p>
                    </div>
                    <div>
                        <p>1 on 1 Mentorship Session</p>
                    </div>
                    <div>
                        <p>No Job, No Fees</p>
                    </div>
                </div>
            </div>
            <h1 className='text-3xl md:text-5xl text-center mt-10 font-[agrandir]'>Top Hiring Companies</h1>
        </>
    )
}

export default Home;

