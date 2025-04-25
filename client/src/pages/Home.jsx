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
                    <Marquee speed={50 + index * 10} gradient={true} pauseOnHover={false}>
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
