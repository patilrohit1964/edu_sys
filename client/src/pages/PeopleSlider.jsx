import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../App.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Peopleslider() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <h3 className='text-left text-[#6440FB] font-semibold'>Best Platform</h3>
                        <p className='py-8'>"One Of the best platform to update your skills and professional career knowledge and getting hands of experience to projects they focus more on practical knowledge".</p>
                    </div>
                    <div className='flex items-center justify-around border-t border-t-gray-500 w-full'>
                        <div className='h-[50px] w-[50px] rounded-full'>
                            <img src="https://techmindseducation.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-11.49.04-AM.jpeg.webp" alt="https://techmindseducation.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-11.49.04-AM.jpeg.webp" className='h-full w-full' />
                        </div>
                        <div className='flex flex-col'>
                            <h3>Anubhuti Singh</h3>
                            <p>Seniour Data Scientist</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
}
