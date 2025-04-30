import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaStarHalfAlt } from "react-icons/fa";
import { FcBullish } from "react-icons/fc";
import { Link, Outlet } from 'react-router-dom';
import robot from '../../public/images/box2.svg';
import course from '../../public/images/course-bg.svg';
import final from '../../public/images/final.svg';
import mySvg from '../../public/images/svg.svg';
import box2 from '../../public/images/tr.svg';
import DataAnalyticsCard from "./DataAnalyticCard"

const features = [
    {
        title: 'Professional Counseling',
        description: "Get Free Counseling From India's Best Professional Counsellors",
        img: mySvg,
    },
    {
        title: 'Quality Training',
        description: "Get Trained By India's Best Professional Trainers",
        img: box2,
    },
    {
        title: '100% Practical',
        description: "Get Unlimited Live Projects Assignments from the industry",
        img: robot,
    },
    {
        title: 'Pay After Placement',
        description: "#No Job\nNo Fees\nGet Hired Pay Later",
        img: final,
    },
];

const FeatureCard = ({ title, description, img }) => (
    <div className="h-[480px] w-[300px] border-8 border-white text-center text-white font-bold py-4">
        <h2 className='text-2xl font-[agrandir] mb-4 truncate'>{title}</h2>
        <div className='h-36 w-[250px] bg-white border border-white m-auto p-2'>
            <div className='flex items-center justify-center'>
                {[...Array(5)].map((_, i) => (
                    <FaStarHalfAlt key={i} color='yellow' size={35} className='border border-black bg-black' />
                ))}
            </div>
            <p className='text-black text-xl pt-2 font-bold whitespace-pre-line'>{description}</p>
        </div>
        <div className='h-[390px] w-full mt-5'>
            <img src={img} alt={title} className='w-full h-full object-contain -mt-10' />
        </div>
    </div>
);

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section>
                <div className="relative w-full" data-aos="fade-right">
                    <img src="./images/bha.jpg" className='w-full object-cover' alt="Hero" />
                    <div className='absolute hidden md:flex md:w-[562px] flex-col md:flex-row justify-between items-center md:bottom-[312px] bottom-[200px] left-0 md:left-[122px] gap-4'>
                        <Link to="/placement" className='w-full md:w-auto'>
                            <button className='bg-gradient-to-r from-purple-700 to-pink-500 w-full md:w-[270px] py-4 px-10 text-white text-sm md:text-2xl font-[agrandir] border-2'>Join Now</button>
                        </Link>
                        <Link to="/refer-earn" className='w-full md:w-auto'>
                            <button className='bg-gradient-to-r from-pink-500 to-pink-600 w-full md:w-[270px] py-4 px-10 text-white text-sm md:text-2xl font-[agrandir] ml-5 border-2'>Pay Your Fees</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Top Hiring Companies */}
            <h1 className='text-3xl md:text-5xl text-center mt-10 font-[agrandir] border-8 border-orange-500 lg:w-2/5 m-auto'>Top Hiring Companies</h1>
            <HiringCompanies />

            {/* Why Tech Minds Education */}
            <section>
                <h1 className='text-3xl md:text-5xl text-center mt-10 font-[agrandir] border-8 border-yellow-500 lg:w-2/5 m-auto'>Why Tech Minds Education</h1>
                <div className="lg:h-[650px] relative mt-5 lg:overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 120" className="absolute top-0 left-0 w-full h-full object-cover" preserveAspectRatio="none">
                        <rect fill="#000000" width="1000" height="120" />
                        <g fill="none" stroke="#222" strokeWidth="10" strokeOpacity="1">
                            {[15, -15, 45, 75, 105, 135].map((y, i) => (
                                <path key={i} d={`M-500 ${y}c0 0 125-30 250-30S0 ${y} 0 ${y}s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30`} />
                            ))}
                        </g>
                    </svg>

                    <div className="absolute top-0 left-0 w-full h-full flex flex-wrap items-center justify-center gap-6 p-10">
                        {features.map((feature, i) => (
                            <FeatureCard key={i} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Tracks */}
            <div className='flex items-center justify-around my-20' style={{ backgroundImage: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)" }}>
                <FcBullish size={240} />
                <h1 className='text-3xl md:text-5xl mt-10 font-[agrandir] border-8 p-5 border-inset border-orange-500 mb-16 text-center'>
                    CAREER TRACKS <br /> Build your Career
                </h1>
                <FcBullish size={240} />
            </div>

            {/* Course Background Image Section */}
            <div className={'relative'}>
                <img src={course} alt="" />
                <div className='absolute top-0 left-0 w-full h-full flex flex-wrap items-center justify-around m-auto'>
                    {[
                        {
                            courseName: "Data Science With Analytics and AI",
                            courseInfo: "Master Data Analytics with AI. Pay nothing until placement. Guaranteed salary: ₹6–15 LPA. Launch your high-paying career risk-free.",
                            infrollments: "18k"
                        },
                        {
                            courseName: "Data Science With Machine Learning and AI",
                            courseInfo: "No fees until you're hired! Master AI + ML with Data Science . Land ₹6–15 LPA jobs For Fresher and 60% Hike for Experienced Individual. Zero risk. All reward.",
                            infrollments: "22k"
                        },
                        {
                            courseName: "Product Management With Analytics and A.I",
                            courseInfo: "Master Product Management + AI. Minimal fees now, pay later after placement. Land top roles with our career-backed program.",
                            infrollments: "16k"
                        },
                        {
                            courseName: "Career Catalyst Pro With AI",
                            courseInfo: "Level up your career! Master communication, confidence, and growth skills with Career Catalyst Pro. Be job-ready, earn more, shine bright",
                            infrollments: "30k"
                        }].map((el, index) => {
                            if (index === 0) {
                                const parts = el.courseName.split(/ (AI|Ai)/i);
                                return (
                                    <DataAnalyticsCard
                                        key={index}
                                        courseName={
                                            <>
                                                {parts[0]}
                                                <br />
                                                {parts[1] && parts[1].toUpperCase()}
                                            </>
                                        }
                                        courseInfo={el.courseInfo}
                                        infrollments={el.infrollments}
                                        index={index}
                                    />
                                );
                            } else {
                                return <DataAnalyticsCard
                                    key={index}
                                    courseName={el.courseName}
                                    courseInfo={el.courseInfo}
                                    infrollments={el.infrollments}
                                    index={index}
                                />;
                            }
                        })}
                </div>

            </div>
        </>
    );
};

export default Home;



const companies = [
    { name: 'kpmg', logo: './images/logo1.jpg' },
    { name: 'bank of america', logo: './images/logo2.jpg' },
    { name: 'Infosys', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS611iDirroUhy_kG6NpCAr8dGN9t4BoAJJzA&s' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Capgemini', logo: 'https://techmindseducation.com/wp-content/uploads/elementor/thumbs/makemytrip-logo-4-qnmcbw4yc0sgb4kbpjmsj9obuk3mj7rzck4ou39l4w.png' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Nvidia', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOAr8Zd1_kexu3OqqM3aX7HRcN-qH4u_A3g&s' },
    { name: 'HCL', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMcsSX0qDudgkDGbFxOHHbVSYjgx87PyUVw&s' },
    { name: 'Tech Mahindra', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAp7ZMhZM_RWBkU1FuA1m779bmPLuvgQMDDg&s' },
    { name: 'Oracle', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_IfT0djwux18uPflKMbVdV_PPEaCoxUZ-A&s' },
    { name: 'Cisco', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1dOrO-D3-T5LcT3wR0qsKOpDgPW9RadVIQ&s' },
    { name: 'Accenture', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZqdt3Q7TOC8NjptFRCpI2cjkftmZdXkx1Og&s' },
    { name: 'Flipkart', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9NNTMNNunauDHk1oT-Nr2wjXOAGo3v3juw&s' },
    { name: 'Cognizant', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRDMal2mpo85Cf4kGYANMYF4xQEYAeFyadg&s' },
    { name: 'Jp Morgan', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9OHcohG2wWWY5bm9pz14k6E_59hkgX5zLw&s' },
    { name: 'Zoho', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3L3VvmiiREklYP4ARzmsMa4Sl_U9mv9_YUg&s' },
    { name: 'Lenovo', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlF264AnOD02w6E6Tn3CL50J65JGxFFdIqjw&s' },
    { name: 'Paytm', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsf7sBxCpX8MjWR81GUFYERgvVVZzGJkuzg&s' },
    { name: 'PhonePe', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHQ-hngeukNj7qtlgG9NqH5w5kaxkBtjB8g&s' },
    { name: 'Tata Digital', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKhnqcCi-vJpW7MO8FYhN6p80SpSovF-2_vA&s' },
    { name: 'wipro', logo: 'https://techmindseducation.com/wp-content/uploads/elementor/thumbs/300__5_-removebg-preview-1-qno4y6xgj5bhwthfr3n7g8gq4i2cjz0xuo9ir61dts.png' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'Bosch', logo: 'https://techmindseducation.com/wp-content/uploads/elementor/thumbs/netflix_-removebg-preview-qniu3exm2pqqkzo79o420jvb7994wbijjhcpareq0w.png' },
    { name: 'Adobe', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0IiZ8zxbpvzsqtsXpj0EIy4MJXX0hEZU4w&s' },
    { name: 'Intel', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qY9eeSbwLtO_OZtOk16-yItU17QyXJqJ-Q&s' },
    { name: 'tcs', logo: './images/logo4.jpg' },
    { name: 'Uber', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgCJ5CFw7aeO929RNa7_GhGJ7ghlsbeOAgQ&s' },
    { name: 'OLA', logo: './images/logo3.jpg' },
    { name: 'apple', logo: 'https://techmindseducation.com/wp-content/uploads/elementor/thumbs/300__8_-removebg-preview-1-qnmgkh9rrto50ax8pi2jari3ec0o2djcbsm9f50v28.png' },
    { name: 'airbnb', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRygodBJ43f6PHHaFS9AeIVyTDEKlTT9KpQQ&s' },
    { name: 'Reliance', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYb-1O_xyFUb9PlQdYJbABifgb_52ShEx5qQ&s' },
    { name: 'HP', logo: 'https://techmindseducation.com/wp-content/uploads/elementor/thumbs/imresizer-1705311645766-qnkl8nq2ihn4v1np4aik6wn2e8q0g44xezuw1kuhxc.jpg' },
    { name: 'Dell', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADS2PgQ43jlIpX06McOVPrsEALXrtoy1nTg&s' },
];

const HiringCompanies = () => {
    const chunkedCompanies = [
        companies.slice(0, 12),
        companies.slice(12, 24),
        companies.slice(24, 36)
    ];

    return (
        <div className="bg-white py-6 mt-10">
            {chunkedCompanies.map((group, index) => (
                <div key={index} className="mb-20">
                    <Marquee speed={50 + index * 10} gradient={true} pauseOnHover={false}
                        direction={index == 0 ? "right" : index == 2 ? 'right' : 'left'}
                    >
                        {group.map((company, idx) => (
                            <div key={idx} className="mx-8 flex items-center w-[100px] h-[100px]">
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="h-full w-full object-contain transition duration-300"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            ))}
        </div>
    );
};
