
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { HiringCompanies } from '../Home';
import { CarouselSize, CertificationTabs, DataScienceCurriculum, PricingBoxes } from "./DataAnalyticInfo";
import TitleComp from '../../widgets/TitleComp';

const coursePoint = [
    {
        title: "Introduction to Investment Banking & Financial Markets",
        points: [
            "What is Investment Banking?",
            "IB Divisions: M&A, ECM, DCM, S&T, Research",
            "Overview of Capital Markets & Instruments",
            "Regulatory Bodies (SEBI, SEC, FINRA)",
            "Types of IB Firms (Bulge Bracket vs Boutique)"
        ]
    },
    {
        title: "Financial Accounting & Statement Analysis",
        points: [
            "Income Statement, Balance Sheet, Cash Flow",
            "Interpreting Financial Statements",
            "Key Ratios: Liquidity, Profitability, Efficiency",
            "GAAP vs IFRS – Basics"
        ]
    },
    {
        title: "Excel for Finance & Financial Modeling Foundations",
        points: [
            "Excel Formulas for Finance (IF, VLOOKUP, INDEX-MATCH, etc.)",
            "Building a 3-Statement Financial Model",
            "Forecasting Revenue, Costs, CapEx, Depreciation",
            "Model Assumptions & Sensitivity Analysis"
        ]
    },
    {
        title: "Business Valuation Techniques",
        points: [
            "Discounted Cash Flow (DCF) Valuation",
            "Comparable Company Analysis (Trading Comps)",
            "Precedent Transaction Analysis (Deal Comps)",
            "Terminal Value, WACC, Multiples (EV/EBITDA, P/E)"
        ]
    },
    {
        title: "Mergers & Acquisitions (M&A)",
        points: [
            "Deal Process: NDA, LOI, Due Diligence, Closing",
            "Synergies Estimation",
            "Accretion/Dilution Analysis",
            "Real-World M&A Case Studies"
        ]
    },
    {
        title: "Capital Markets (ECM & DCM)",
        points: [
            "IPO Process, Follow-on Offerings, Rights Issues",
            "Bond Issuance, Credit Ratings, Debt Structures",
            "Equity Syndication and Roadshows",
            "Deal Documentation (Red Herring, Prospectus)"
        ]
    },
    {
        title: "Pitchbook Development & Tools Used in IB",
        points: [
            "Anatomy of a Sell-side & Buy-side Pitchbook",
            "Slides: Company Overview, Valuation Summary, Deal Rationale",
            "PowerPoint Design for IB",
            "Intro to Bloomberg, Capital IQ (simulated tools)"
        ]
    },
    {
        title: "Capstone Project + Career Readiness",
        points: [
            "Capstone: Prepare a Pitchbook + Valuation for a real/public company",
            "Resume Writing for IB Roles",
            "Technical + Behavioral Interview Preparation",
            "Mock Interviews, Group Discussions",
            "LinkedIn & Networking Strategy"
        ]
    }
];

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
    },
];

const InvestmentBanking = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <>
            <TitleComp title={"investment banking course"} />
            <div className="w-full overflow-hidden">
                <div className='flex items-center justify-center flex-col'>
                    <div data-aos="fade-down" className='md:mb-30'>
                        <img src="./images/investmentbanking.svg" alt="" draggable="false" loading='lazy' />
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
                        title: "Data Science With Machine Learning and AI",
                        caseProject: "45+",
                        langTool: "2+",
                        liveSession: "240+",
                        image: "./images/ml80img.svg",
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
                        <PricingBoxes />
                    </div>
                </div>
            </div>
        </>
    );
}

export default InvestmentBanking
