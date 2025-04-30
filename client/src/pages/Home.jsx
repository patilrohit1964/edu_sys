import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { FaStarHalfAlt } from "react-icons/fa";
import mySvg from '../../public/images/svg.svg'
import box2 from '../../public/images/tr.svg'
import final from '../../public/images/final.svg'
import robot from '../../public/images/box2.svg'
import course from '../../public/images/course-bg.svg'
import { FcBullish } from "react-icons/fc";
import DataAnalyticsCard from './DataAnalyticCard';
const Home = () => {
    return (
        <>
            <section>
                <div
                    className="relative w-full"
                    data-aos="fade-right"
                >
                    <img src="./images/bha.jpg" className='h-full w-full object-cover'></img>
                    <div className='absolute hidden md:w-[562px] px-4 md:px-0 md:flex flex-col md:flex-row justify-between items-center md:bottom-[312px] bottom-[200px] left-0 md:left-[122px] gap-4 md:gap-0'>
                        <Link to="/placement" className='w-full md:w-auto'>
                            <button className='bg-gradient-to-r from-purple-700 to-pink-500 w-full md:w-[270px] py-4 cursor-pointer px-10 text-white text-sm md:text-2xl font-[agrandir] border-2'>Join Now</button>
                        </Link>
                        <Link to="/refer-earn" className='w-full md:w-auto'>
                            <button className='bg-gradient-to-r from-pink-500 to-pink-600 w-full md:w-[270px] py-4 cursor-pointer px-10 text-white text-sm md:text-2xl font-[agrandir] ml-5 border-2'>Pay Your Fees</button>
                        </Link>
                    </div>
                    <div className='absolute bottom-[100px] left-[150px] text-white flex-wrap hidden'>
                        <div>
                            <p>Over 22K+ Courses views</p>
                        </div>
                        <div>
                            <p>More than 10 Years of Experience</p>
                        </div>
                        <div>
                            <p>1 on 1 Mentorship Session</p>
                        </div>
                        <div>
                            <p>No Job, No Fees</p>
                        </div>
                    </div>
                </div>
            </section>
            <h1 className='text-3xl md:text-5xl text-center mt-10 font-[agrandir] border-8 border-inset border-orange-500 lg:w-2/5 m-auto'>Top Hiring Companies</h1>
            <HiringCompanies />
            <section>

                <h1 className='text-3xl md:text-5xl text-center mt-10 font-[agrandir] border-8 border-yellow-500 border-inset lg:w-2/5 m-auto'>Why Tech Minds Education</h1>
                <div className="lg:h-[650px] relative mt-5 lg:overflow-hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1000 120"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        preserveAspectRatio="none"
                    >
                        <rect fill="#000000" width="1000" height="120" />
                        <g fill="none" stroke="#222" strokeWidth="10" strokeOpacity="1">
                            <path d="M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30" />
                            <path d="M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30" />
                            <path d="M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30" />
                            <path d="M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30" />
                            <path d="M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30" />
                            <path d="M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30" />
                        </g>
                    </svg>
                    {/* 4 boxes */}
                    <div className="absolute top-0 left-0 w-full h-full flex flex-wrap items-center justify-center gap-6 p-10">
                        <div className="h-[480px] w-[300px] border-8 border-white text-center text-white font-bold py-4 mt-3">
                            <h2 className='text-2xl font-[agrandir] mb-4 truncate'>Professional Conseling</h2>
                            <div className='h-36 w-[250px] bg-white border border-white m-auto'>
                                <ul className='p-2'>
                                    <li>
                                        <div className='flex items-center justify-center'>
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                        </div>
                                        <p className='text-black text-xl pt-2 font-bold'>
                                            Get Free Counseling From India's Best Professional Counsellers
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='h-[390px] w-full'>
                                <img src={mySvg} alt="" className='w-full h-full -mt-10' />
                            </div>
                        </div>
                        <div className="h-[480px] w-[300px] border-8 border-white text-center text-white font-bold py-4">
                            <h2 className='text-2xl font-[agrandir] mb-4'>Quality Training</h2>
                            <div className='h-36 w-[250px] bg-white border border-white m-auto'>
                                <ul className='p-2'>
                                    <li>
                                        <div className='flex items-center justify-center'>
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                        </div>
                                        <p className='text-black text-xl pt-2 font-bold'>
                                            Get Trained By India's Best Professional Trainers
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='h-[420px] w-full mt-5'>
                                <img src={box2} alt="" className='w-full h-full -mt-10' />
                            </div>
                        </div>
                        <div className="h-[480px] w-[300px] border-8 border-white text-center text-white font-bold py-4">
                            <h2 className='text-2xl font-[agrandir] mb-4'>100% Practical</h2>
                            <div className='h-36 w-[250px] bg-white border border-white m-auto'>
                                <ul className='p-2'>
                                    <li>
                                        <div className='flex items-center justify-center'>
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                        </div>
                                        <p className='text-black text-xl pt-2 font-bold'>
                                            Get Unlimited Live Projects  Assignments from the industry
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='h-[390px] w-full mt-5'>
                                <img src={robot} alt="" className='w-full h-full -mt-10' />
                            </div>
                        </div>
                        <div className="h-[480px] w-[300px] border-8 border-white text-center text-white font-bold py-4">
                            <h2 className='text-2xl font-[agrandir] mb-4'>Pay After Placement</h2>
                            <div className='h-36 w-[250px] bg-white border border-white m-auto'>
                                <ul className='p-2'>
                                    <li>
                                        <div className='flex items-center justify-center'>
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                            <FaStarHalfAlt color='yellow' size={35} className='border border-black bg-black' />
                                        </div>
                                        <p className='text-black text-xl py-3 font-extrabold'>
                                            #No Job  <br /> No Fees <br /> Get Hired Pay Later
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className='h-[400px] w-full mt-5'>
                                <img src={final} alt="" className='w-full h-full -mt-12' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className='flex items-center justify-around my-20'
                style={{ backgroundImage: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)" }}>
                <div>
                    <FcBullish size={240} />
                </div>
                <h1 className='text-3xl md:text-5xl mt-10 font-[agrandir] border-8 p-5 border-inset border-orange-500 mb-16'>CAREER TRACKS <br /> Build your Career</h1>
                <div>
                    <FcBullish size={240} />
                </div>
            </div >
            <div className={`relative`}>
                <img src={course} alt="" />
                <div className='absolute top-0 left-0 w-full h-full flex flex-wrap items-center justify-around border m-auto'>
                    {[{ courseName: "Data Science With Analytics and AI" }, { courseName: "Data Science With Machine Learning and AI" }, { courseName: "Data Analytics and Ai" }, { courseName: "Data Analytics and Ai" }].map(el => (
                        <DataAnalyticsCard courseName={el.courseName} />
                    ))}
                </div>
            </div>

        </>
    )
}

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
