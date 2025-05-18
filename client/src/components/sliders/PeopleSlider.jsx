
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../../App.css';

// import required modules
import React, { useState } from 'react';
import { FreeMode } from 'swiper/modules';

export default function Peopleslider() {
    return (
        <div className='peopleslider'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper"
            >
                {

                    [
                        {
                            title: "Best Platform ",
                            name: "Anubhuti ",
                            img: "https://techmindseducation.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-11.49.04-AM.jpeg.webp",
                            profession: "Seniour Data Scientist",
                            about: "One Of the best platform to update your skills and professional career knowledge and getting hands of experience to projects they focus more on practical knowledge"
                        },
                        {
                            title: "Thank you Tech Minds Education",
                            name: "Shriyan",
                            img: "https://techmindseducation.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-4.00.07-PM.jpeg.webp",
                            profession: "Business Analyst",
                            about: "Tech Minds Education courses offer clear and concise content, making complex topics easily understandable.The practical approach and real- world examples enhance learning, making it a valuable."
                        },
                        {
                            title: "Very helpful",
                            name: "Anjaneya",
                            img: "https://techmindseducation.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-3.59.10-PM.jpeg.webp",
                            profession: "Cloud Architech",
                            about: "Exceptional Courses, Delivering an unparalleled blend of clarity, real world relevance and making it an indispensable resource for us and for others aspiring tech enthusiasts."
                        },
                        {
                            title: "Placement",
                            name: "Vibhor Sharma",
                            img: "https://techmindseducation.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-3.58.13-PM.jpeg.webp",
                            profession: "Data Analyst",
                            about: "Tech Minds Education Data Analyst program provides an engaging and comprehensive learning experience. The instructor deliver complex technical concept in an accessible manner"
                        },
                        {
                            title: "Practical Experience",
                            name: "Sanvi",
                            img: "https://techmindseducation.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-3.58.34-PM.jpeg.webp",
                            profession: "Research Analyst",
                            about: "I found the practical experience provided by Tech Minds is one of the best in industry and they mainly focuses on providing quality education with hands on experience on project"
                        },
                        {
                            title: "Great Upskilling",
                            name: "Rutvi",
                            img: "https://techmindseducation.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-3.59.44-PM.jpeg.webp",
                            profession: "ML Engineer.",
                            about: "I am very grateful to tech mind education for helping me in grasping  hands-on approach and real-world application enhances skills, making these courses valuable for anyone looking to excel in the industry."
                        },
                    ].map((el, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <h3 className='text-left text-[#6440FB] font-semibold'>{el.title}</h3>
                                <p className='py-8 text-gray-500'>{el.about}</p>
                            </div>
                            <div className='flex items-center border-t border-t-gray-500 w-full'>
                                <div className='h-[80px] w-[80px] rounded-full'>
                                    <img src={el.img} className='h-full w-full' loading='lazy' />
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h3 className='text-md text-gray-800 font-semibold'>{el.name}</h3>
                                    <p className='text-sm text-gray-600'>{el.profession}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

// Mock Swiper component and modules for demonstration
const SwiperSlider = ({ children }) => {
    return (
        <div className="swiper-slide rounded-lg shadow-md mx-2">
            {children}
        </div>
    );
};

export function PlacementSlider({word}) {
    const images = [
        "./images/placementImages/placement1.jpg",
        "./images/placementImages/placement2.jpg",
        "./images/placementImages/placement3.jpg",
        "./images/placementImages/placement4.jpg",
        "./images/placementImages/placement5.jpg",
        "./images/placementImages/placement6.jpg",
        "./images/placementImages/placement7.jpg",
        "./images/placementImages/placement8.jpg",
        "./images/placementImages/placement9.jpg",
    ];

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - e.currentTarget.offsetLeft);
        setScrollLeft(e.currentTarget.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - e.currentTarget.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        e.currentTarget.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="w-full max-w-6xl mx-auto my-30 px-4">
            <h2 className="text-2xl font-bold mb-4 text-center">{word}</h2>
            <div
                className="placementslider overflow-x-auto pb-4 pt-2 flex items-center cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={{ scrollBehavior: 'smooth', scrollbarWidth: 'thin' }}
            >
                <div className="swiper-wrappe flex w-96">
                    {images.map((image, index) => (
                        <SwiperSlider key={index} className="border border-yellow-700 w-20">
                            <div className="h-full w-full relative">
                                <img
                                    src={image}
                                    alt={`Placement ${index + 1}`}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </SwiperSlider>
                    ))}
                </div>
            </div>
            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="scrollbar-indicator h-full bg-gray-400 rounded-full w-1/3"></div>
            </div>
        </div>
    );
}
