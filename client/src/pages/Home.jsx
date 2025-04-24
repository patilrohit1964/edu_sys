import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const Home = () => {
    return (
        <>
            <div
                className="relative w-full"
                data-aos="fade-right"
            >
                <img src="./images/bha.jpg" controls className='h-full w-full object-cover' loop autoPlay></img>
                <div className='absolute hidden md:w-[562px] px-4 md:px-0 md:flex flex-col md:flex-row justify-between items-center md:bottom-[312px] bottom-[200px] left-0 md:left-[122px] gap-4 md:gap-0'>
                    <Link to="/placement" className='w-full md:w-auto'>
                        <button className='bg-gradient-to-r from-purple-700 to-pink-500 w-full md:w-[270px] py-4 cursor-pointer px-10 text-white text-sm md:text-2xl font-[agrandir] border-2'>Join Now</button>
                    </Link>
                    <Link to="/refer-earn" className='w-full md:w-auto'>
                        <button className='bg-gradient-to-r from-pink-500 to-pink-600 w-full md:w-[270px] py-4 cursor-pointer px-10 text-white text-sm md:text-2xl font-[agrandir] ml-5 border-2'>Pay Your Fees</button>
                    </Link>
                </div>
                <div className='absolute bottom-[100px] left-[150px] flex text-white flex-wrap'>
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
            <h1 className='text-3xl md:text-5xl text-center mt-10 font-[agrandir]'>Top Hiring Companies</h1>
            <HiringCompanies />
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
    { name: 'Capgemini', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg9vQVBKS-_Zqq4YOmNm9qhUk84yuUAEXssg&s' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Deloitte', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZPguIZ1BOke9vRuQGD7j9vo260_vS6td1A&s' },
    { name: 'HCL', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMcsSX0qDudgkDGbFxOHHbVSYjgx87PyUVw&s' },
    { name: 'Tech Mahindra', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAp7ZMhZM_RWBkU1FuA1m779bmPLuvgQMDDg&s' },
    { name: 'Oracle', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2ZicVxzhJMQ17O5sBUG0p-VH_KpyfSSzgg&s' },
    { name: 'Cisco', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1dOrO-D3-T5LcT3wR0qsKOpDgPW9RadVIQ&s' },
    { name: 'Accenture', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZqdt3Q7TOC8NjptFRCpI2cjkftmZdXkx1Og&s' },
    { name: 'Flipkart', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeslN4b3kNaNqPpBWWUu7bQiyiYUBOydzrw&s' },
    { name: 'Cognizant', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34EvxoJXMNn3_pwm51bVbl4NQcTE8NR7Hog&s' },
    { name: 'Jp Morgan', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9OHcohG2wWWY5bm9pz14k6E_59hkgX5zLw&s' },
    { name: 'Zoho', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlgSVY-g5htp7WIXUuZVDCZaiTgssj4pcTXQ&s' },
    { name: 'Lenovo', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhspQWp--H50rj2t3X7cYN96xTRmS_a3ILSA&s' },
    { name: 'Paytm', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKsMQbLUxt1q_JSJL1Nxu9ulFT940gymCDg&s' },
    { name: 'PhonePe', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtiuepQRdgOS4iohfLkyB4g-X_48TE99D9Tg&s' },
    { name: 'Tata Digital', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKhnqcCi-vJpW7MO8FYhN6p80SpSovF-2_vA&s' },
    { name: 'wipro', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDc6DAHVCDYMVQjZavwcP7NT65XOtHiYBAw&s' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'Bosch', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VL6ETfNzY4PzoaCOwPxZMePyuCEvkoXwKg&s' },
    { name: 'Adobe', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BdTRc8A-_c91xFMzkr-kYRQFM0KKu0QA3A&s' },
    { name: 'Intel', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0HncX4B_UiQnmbeVf4ewhi1WC2qKFWRQ9Wg&s' },
    { name: 'tcs', logo: './images/logo4.jpg' },
    { name: 'Uber', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiiSWDZlNLnAnPvhfV-Dkt8cdivdFKwLgdVw&s' },
    { name: 'OLA', logo: './images/logo3.jpg' },
    { name: 'Swiggy', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7jks4l9BMS2gsEObzYHtaJMmM6_VI6o01g&s' },
    { name: 'Zomato', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaD5oYRs3heBP-W5NGboQCdpVkyqXh9Q7iQ&s' },
    { name: 'Reliance', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYb-1O_xyFUb9PlQdYJbABifgb_52ShEx5qQ&s' },
    { name: 'HP', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGSf-Ze5TZ8At14v6C4c-5cHOPQVSmD0X8w&s' },
    { name: 'Dell', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzKLltwjLPHJ-pn1uJ-u0nq2VUaNRXcs2pw&s' },
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
                    <Marquee speed={50 + index * 10} gradient={true} pauseOnHover={false}>
                        {group.map((company, idx) => (
                            <div key={idx} className="mx-8 flex items-center">
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="h-16 object-contain transition duration-300"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            ))}
        </div>
    );
};
