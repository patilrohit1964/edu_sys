import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className='flex items-center justify-center mt-10 mb-30'>
                <img src="./images/about.svg" alt="" loading='lazy' draggable={"false"} />
            </div>
            <div className='flex items-center justify-center'>
                <img src="./images/au.jpg" alt="" loading='lazy' draggable={"false"} />
            </div>
            <div className='flex items-center justify-center my-30'>
                <img src="./images/au3.svg" alt="" loading='lazy' draggable={"false"} />
            </div>
            <div className='flex items-center justify-center'>
                <img src="./images/au4.svg" alt="" loading='lazy' draggable={"false"} />
            </div>
            <div className='flex items-center justify-center mt-30 relative'>
                <img src="./images/about5.svg" alt="" loading='lazy' draggable={"false"} />
                <Link to={"/contact"}>
                    <button className='absolute py-2 text-2xl px-10 bg-purple-500 rounded-lg bottom-12 text-white left-62'>Contact Us</button>
                </Link>
            </div>
        </div>
    )
}

export default About