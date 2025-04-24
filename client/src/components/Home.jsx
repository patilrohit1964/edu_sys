import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div
            className="relative flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-20 pt-8 md:pt-12 pb-20 md:pb-0 w-full overflow-hidden"
            style={{
                background:
                    "radial-gradient(ellipse at top left, #ed3a85 0%, transparent 30%), radial-gradient(ellipse at bottom left, #000 0%, transparent 100%), radial-gradient(ellipse at top right, #81039b 0%, transparent 40%)",
                backgroundColor: "black"
            }}
        >
            <div className="flex flex-col md:w-1/2 max-w-lg text-left text-white relative z-10 mb-36">
                <div className="mt-10 md:mt-0">
                    <h1 className="text-4xl sm:text-5xl font-normal leading-tight mb-1 flex items-center space-x-3">
                        <span>India's No.1</span>
                        <svg
                            className="w-6 h-6 text-pink-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                            <path
                                d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>
                    </h1>
                    <h2 className="text-5xl sm:text-6xl font-normal leading-tight mb-1 text-pink-500 border-b border-pink-500 pb-1">
                        Institute for
                    </h2>
                    <h3 className="text-5xl sm:text-6xl font-normal leading-tight text-white border-b border-pink-500 pb-1 italic">
                        Tech Skills <span className="italic text-pink-500">Development</span>
                    </h3>
                    <div className="flex space-x-6 mt-8 max-w-md">
                        <Link to={"/"}>
                            <button className="bg-gradient-to-r from-purple-700 to-pink-500 text-white px-6 py-2 rounded font-light text-lg cursor-pointer">
                                Join Now
                            </button>
                        </Link>
                        <Link to={"/"}>
                            <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded font-light text-lg cursor-pointer">
                                Pay Your Fees
                            </button>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4 mt-10">
                        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xl cursor-pointer">
                            <FaLongArrowAltRight />
                        </div>
                        <div className="flex space-x-3 text-pink-500 text-2xl">
                            <span>•</span>
                            <span>•</span>
                            <span>•</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[550px] w-[550px]' data-aos="fade-up">
                <img src="./images/hero_img.png" alt="" className='h-full w-full object-cover' />
            </div>
        </div>
    )
}

export default Home;