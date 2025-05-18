import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    // Since we can't use react-router-dom in this environment, creating a basic link component
    const ContactLink = ({ children }) => (
        <Link to="/contact" className="inline-block">
            {children}
        </Link>
    );

    return (
        <div className="w-full overflow-x-hidden">
            {/* Hero section */}
            <div className='flex items-center justify-center mt-5 sm:mt-8 md:mt-10 mb-10 sm:mb-16 md:mb-20 lg:mb-30 px-4 sm:px-6 md:px-8'>
                <img
                    src="./images/about.svg"
                    alt="About Us Hero"
                    loading='lazy'
                    draggable="false"
                    className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl"
                />
            </div>

            {/* Second section */}
            <div className='flex items-center justify-center px-4 sm:px-6 md:px-8'>
                <img
                    src="./images/au.jpg"
                    alt="About Us Image"
                    loading='lazy'
                    draggable="false"
                    className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl"
                />
            </div>

            {/* Third section */}
            <div className='flex items-center justify-center my-10 sm:my-16 md:my-20 lg:my-30 px-4 sm:px-6 md:px-8'>
                <img
                    src="./images/au3.svg"
                    alt="About Us Details"
                    loading='lazy'
                    draggable="false"
                    className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl"
                />
            </div>

            {/* Fourth section */}
            <div className='flex items-center justify-center px-4 sm:px-6 md:px-8'>
                <img
                    src="./images/au4.svg"
                    alt="About Us Information"
                    loading='lazy'
                    draggable="false"
                    className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl"
                />
            </div>

            {/* Final section with CTA button */}
            <div className='flex items-center justify-center mt-10 sm:mt-16 md:mt-20 lg:mt-30 relative px-4 sm:px-6 md:px-8'>
                <img
                    src="./images/about5.svg"
                    alt="Contact Us CTA"
                    loading='lazy'
                    draggable="false"
                    className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl"
                />
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-0 right-0 flex justify-center">
                    <ContactLink>
                        <button className='py-1 sm:py-1.5 md:py-2 text-lg sm:text-xl md:text-2xl 
                                          px-4 sm:px-6 md:px-8 lg:px-10 bg-purple-500 rounded-lg 
                                          text-white'>
                            Contact Us
                        </button>
                    </ContactLink>
                </div>
            </div>
        </div>
    );
};

export default About;