import React from 'react'
import { useEffect } from 'react';
import { HiringCompanies } from '../Home';
import { CarouselSize, CertificationTabs, DataScienceCurriculum, PricingBoxes } from "./DataAnalyticInfo";
import Aos from 'aos';
import TitleComp from '../../widgets/TitleComp';

const coursePoint = [
    {
        title: "Foundations of Product Management",
        points: [
            "What is Product Management?",
            "Lifecycle: Idea → Launch → Scale",
            "PM vs Project Manager vs Product Owner",
            "Agile, Scrum, and Kanban frameworks",
            "MVP thinking & lean experimentation"
        ]
    },
    {
        title: "Understanding Artificial Intelligence",
        points: [
            "AI vs ML vs Deep Learning: A quick breakdown",
            "Key concepts: datasets, training, inference",
            "AI use cases in B2B, B2C, SaaS, and platforms",
            "No-code & low-code AI tools overview"
        ]
    },
    {
        title: "Product Discovery with AI",
        points: [
            "User research + AI tools (e.g., user segmentation using clustering)",
            "Market analysis using NLP & trend mining",
            "Problem validation via data-backed decisions",
            "Competitive analysis with AI-powered tools"
        ]
    },
    {
        title: "Designing AI Products",
        points: [
            "Data as a product feature",
            "AI-first vs AI-augmented product models",
            "Designing user experience with AI (predictive UX)",
            "Ethical AI & fairness in product design"
        ]
    },
    {
        title: "Data & Metrics for PMs",
        points: [
            "Defining North Star Metrics",
            "Product Analytics: Mixpanel, GA4, Amplitude",
            "A/B Testing with AI insights",
            "Using LLMs to summarize feedback"
        ]
    },
    {
        title: "Working with AI/ML Teams",
        points: [
            "Communicating with Data Scientists",
            "Understanding model scope & limitations",
            "How to write an AI Product Requirements Document (AI-PRD)",
            "AI Model lifecycle & experimentation tracking"
        ]
    },
    {
        title: "Go-to-Market & Monetization",
        points: [
            "Launching AI products",
            "Growth loops powered by AI",
            "Personalization, recommendation engines",
            "Pricing & monetization strategies"
        ]
    },
    {
        title: "Capstone Project",
        points: [
            "Build a live AI-powered product with a team",
            "Sample projects:",
            "AI-based resume matcher for recruiters",
            "Smart feature prioritization engine for SaaS PMs",
            "AI chatbot for internal product feedback collection"
        ]
    }
];
const certifications = [
    {
        name: "Certificate of Complition",
        image: "./images/certi1.jpg",
        description: "Certified completion of India’s best job-oriented program – Tech Minds Education."
    },
    {
        name: "Intership Experience Letter",
        image: "./images/certi2.jpg",
        description: "Internship experience certified by Tech Minds Education, premier practical institute."
    },
    {
        name: "MNC Project Completion Certificate",
        image: "./images/certi3.jpg",
        description: "Project successfully completed, certified by MNC – global excellence recognized. Any 1 company project completion certificate you will get based on your specialization."
    },
    {
        name: "MNC Project Completion Certificate 2",
        image: "./images/certi3.jpg",
        description: "Project successfully completed, certified by MNC – global excellence recognized. Any 1 company project completion certificate you will get based on your specialization."
    }
];
const plans = [
    {
        name: 'Program Fees',
        monthlyPrice: '₹3334',
        yearlyPrice: '₹85,000',
        description: 'Only',
        features: [
            '5 users',
            'Unlimited projects',
            '50GB storage',
            'Priority support',
            'Advanced analytics',
            'All core features'
        ],
        buttonText: 'Join Now This Golden Opportunity',
        featured: true
    },
];
const ProjectManagement = () => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            once: false,
            mirror: true,
        });
    }, []);
    return (
        <>
            <TitleComp title={"Project Management Course"} />
            <div className="w-full overflow-hidden">
                <div className='flex items-center justify-center flex-col'>
                    <div data-aos="fade-down" className='md:mb-30'>
                        <img src="./images/productmanagement.svg" alt="" draggable="false" loading='lazy' />
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
                    <img src="./images/product_mang_45_image.svg" alt="" draggable="false" loading='lazy' />
                </div>
                <div className='mt-10'>
                    <DataScienceCurriculum courseCurriculumInfo={{
                        title: "Product Management With Analytics and A.I",
                        caseProject: "45+",
                        langTool: "6+",
                        liveSession: "200+",
                        image: "./images/Product_Mang_45_Image",
                        coursePoint: coursePoint
                    }
                    } />
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
                    <CertificationTabs certifications={certifications} />
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
                        <PricingBoxes plans={plans} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectManagement