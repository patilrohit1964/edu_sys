import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronDown, Clock, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { HiringCompanies } from '../Home';
import { CarouselSize, CertificationTabs, DataScienceCurriculum, PricingBoxes } from "./DataAnalyticInfo";
const DataSciMl = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <div className="w-full overflow-hidden">
            <div className='flex items-center justify-center flex-col'>
                <div data-aos="fade-down">
                    <img src="./images/ML.svg" alt="" draggable="false" loading='lazy' />
                </div>
                <div className='sm:mt-5' data-aos="fade-up" data-aos-delay="300">
                    <img src="./images/purple_black1.svg" alt="" draggable="false" loading="lazy" />
                </div>
            </div>
            <div>
                <h1 className='text-3xl md:text-5xl text-center mt-10 font-[agrandir] border-8 border-orange-500 lg:w-2/5 m-auto' data-aos="zoom-in" data-aos-delay="400">Top Hiring Companies</h1>
                <div data-aos="fade-up" data-aos-delay="500">
                    <HiringCompanies />
                </div>
            </div>
            <div className='flex items-center justify-center' data-aos="flip-up" data-aos-delay="300">
                <img src="./images/3dimage.svg" alt="" draggable="false" loading='lazy' />
            </div>
            <div className='mt-10'>
                <DataScienceCurriculum />
            </div>
            <div>
                <h1 className='text-3xl md:text-5xl text-center mt-10 font-[agrandir] lg:w-2/ m-auto'
                    data-aos="zoom-in"
                    data-aos-duration="800"><span className='border-b-2 border-orange-500 inline-block mb-5'>Our Expert</span> <br /> <span className='font-bold'>Learn From The real Industry Experts</span></h1>
                <div className="my-5">
                    <CarouselSize />
                </div>
            </div>
            <div>
                <h1
                    className='text-3xl md:text-5xl text-center mt-10 font-[agrandir] border-b-2 border-orange-500 lg:w-2/6 m-auto'
                    data-aos="zoom-in"
                    data-aos-duration="800"
                >
                    Certification
                </h1>
                <h3 className='text-center text-4xl font-bold my-5' data-aos="zoom-in">Become Eligible For 4 Industry-Recognized Certificates</h3>
                <CertificationTabs />
            </div>
            <div>
                <h1
                    className='text-3xl md:text-5xl text-center mt-10 font-[agrandir] border-8 border-orange-500 lg:w-2/6 m-auto'
                    data-aos="zoom-in"
                    data-aos-duration="800"
                >
                    Program Fees
                </h1>
                <h2 className="text-2xl text-center lg:w-2/3 my-5 font-bold m-auto">Our Data Science with Analytics and A.I  Program offers comprehensive training, hands-on projects, and expert mentorship at an affordable cost with pay after placement option available. Enroll today to jumpstart your career in Our Program!</h2>
                <div>
                    <PricingBoxes />
                </div>
            </div>
        </div>
    );
}

export default DataSciMl
