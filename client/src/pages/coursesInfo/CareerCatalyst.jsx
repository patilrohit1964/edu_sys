import React from 'react'
import { useEffect } from 'react';
import { HiringCompanies } from '../Home';
import { CarouselSize, CertificationTabs, DataScienceCurriculum, PricingBoxes } from "./DataAnalyticInfo";
import Aos from 'aos';
import TitleComp from '../../widgets/TitleComp';
const certifications = [
    {
        name: "Certificate of Complition",
        image: "./images/investcerti.jpg",
        description: "Certified completion of India’s best job-oriented program – Tech Minds Education."
    },
    {
        name: "Intership Experience Letter",
        image: "./images/investcertiintern.jpg",
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
const coursePoint = [
    {
        title: "Foundations of Effective Communication",
        tag: "#Communication",
        points: [
            "Communication styles & the psychology behind them",
            "Verbal vs Non-verbal communication",
            "Cultural nuances in corporate communication (especially for global companies)",
            "Practical Exercises: Self-assessment, tone practice"
        ]
    },
    {
        title: "AI-Powered Communication Techniques",
        tag: "#AI",
        points: [
            "Using tools like ChatGPT for content clarity and tone",
            "Writing better emails, resumes, cover letters with AI",
            "Voice AI tools for accent, intonation & fluency training",
            "Responsible AI usage"
        ]
    },
    {
        title: "English Fluency & Vocabulary Enhancement",
        tag: "#English",
        points: [
            "Everyday professional vocabulary",
            "Voice modulation, filler-word reduction",
            "Confidence through storytelling techniques",
            "Role-play: Elevator pitch + self-introduction"
        ]
    },
    {
        title: "Interview Mastery with AI Simulation",
        tag: "#Interview",
        points: [
            "HR & technical interview mock simulations",
            "Body language coaching",
            "AI feedback on verbal performance",
            "Industry-specific interview preparation (IT, Marketing, Finance, etc.)"
        ]
    },
    {
        title: "Presentation & Public Speaking Mastery",
        tag: "#PublicSpeaking",
        points: [
            "Structuring impactful presentations",
            "TED-style speaking drills",
            "AI slide-making tools",
            "Recorded presentations with peer and AI review"
        ]
    },
    {
        title: "Workplace Communication Excellence",
        tag: "#Communication",
        points: [
            "Writing professional reports, chat, and emails",
            "Handling conflict and feedback",
            "Cross-functional team collaboration",
            "Real-world business case simulations"
        ]
    },
    {
        title: "Personal Branding & LinkedIn Makeover",
        tag: "#Career",
        points: [
            "Building a strong online presence",
            "Resume & LinkedIn AI optimization (keywords, ATS-friendly formats)",
            "Thought leadership content strategy",
            "Weekly post challenges with peer feedback"
        ]
    },
    {
        title: "Capstone – Future Ready You",
        tag: "#Career",
        points: [
            "Live job simulations (interviews, meetings, pitches)",
            "Final assessment: Job-ready communication test",
            "Personalized feedback report",
            "Certification + Placement support"
        ]
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
const CareerCatalyst = () => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <>
            <TitleComp title={"Career Catalyst Course"} />
            <div className="w-full overflow-hidden">
                <div className='flex items-center justify-center flex-col'>
                    <div data-aos="fade-down" className='md:mb-30'>
                        <img src="./images/careercatlyst1.svg" alt="" draggable="false" loading='lazy' />
                    </div>
                    <div className='mt-20 sm:mt-5' data-aos="fade-up" data-aos-delay="300">
                        <img src="./images/careercatlyst2.svg" alt="" draggable="false" loading="lazy" />
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
                <div className="text-center">
                    <h1
                        className='text-3xl md:text-5xl mt-10 font-[agrandir] border-8 border-yellow-500 lg:w-2/6 m-auto mb-5'
                        data-aos="zoom-in"
                        data-aos-duration="800"
                    >
                        Course Curriculum
                    </h1>
                    <p className="text-3xl font-bold">Up-to-date industry relevant curriculum</p>
                </div>
                <div className='mt-10'>
                    <DataScienceCurriculum courseCurriculumInfo={{
                        title: "Career Catalyst Pro With AI",
                        caseProject: "30+",
                        langTool: "5+",
                        liveSession: "200+",
                        image: "",
                        coursePoint: coursePoint
                    }} />
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

export default CareerCatalyst

