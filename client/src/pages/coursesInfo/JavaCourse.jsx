
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { HiringCompanies } from '../Home';
import { CarouselSize, CertificationTabs, DataScienceCurriculum, PricingBoxes } from "./DataAnalyticInfo";
import TitleComp from '../../widgets/TitleComp';

const coursePoint = [
    {
        title: "Java Development",
        tag: "#Java",
        points: [
            "Core Java & OOP Fundamentals",
            "Java syntax, data types, operators",
            "Control flow, loops, methods",
            "Object-Oriented Programming (OOP)",
            "Classes, objects, inheritance",
            "Polymorphism, abstraction, encapsulation",
            "Exception handling",
            "Java Collections Framework"
        ]
    },
    {
        title: "Advanced Java & Multithreading",
        tag: "#Java",
        points: [
            "File I/O (Streams, Readers, Writers)",
            "Multithreading and Concurrency",
            "Lambda expressions, Streams API",
            "Java 8+ features",
            "Unit testing with JUnit"
        ]
    },
    {
        title: "Java Database Connectivity (JDBC) & ORM",
        tag: "#Java",
        points: [
            "JDBC API: connection, statements, result sets",
            "Transactions and batch processing",
            "Introduction to ORM and Hibernate",
            "Annotations, HQL, Relationships",
            "Caching, Lazy loading",
            "Introduction to JPA"
        ]
    },
    {
        title: "Spring Ecosystem",
        tag: "#Java",
        points: [
            "Spring Core (IoC, DI, Beans, AOP)",
            "Spring Boot",
            "Spring MVC: REST APIs",
            "Spring Data JPA",
            "Security with Spring Security (JWT basics)",
            "Build Tools: Maven/Gradle"
        ]
    },
    {
        title: "MERN Stack Development",
        tag: "#MERN",
        points: [
            "Frontend Development with react",
            "HTML5, CSS3, ES6 JavaScript (recap)",
            "React basics: Components, Props, State",
            "React Router",
            "React Hooks (useState, useEffect, etc.)",
            "Form handling, validation",
            "State management (Context API / Redux)"
        ]
    },
    {
        title: "Backend Development with Node.js & Express",
        tag: "#MERN",
        points: [
            "Node.js fundamentals",
            "NPM, Modules",
            "Express.js: REST API development",
            "Middleware, CORS, error handling",
            "API authentication with JWT"
        ]
    },
    {
        title: "MongoDB & Fullstack Integration",
        tag: "#MERN",
        points: [
            "MongoDB basics (documents, collections)",
            "Mongoose: schema design, validation",
            "CRUD operations with MongoDB",
            "Connecting React frontend to Node backend",
            "Environment management, version control (Git, GitHub)",
            "Project architecture: MVC pattern"
        ]
    },
    {
        title: "DevOps, Testing, & Capstone Project",
        tag: "#DevOps",
        points: [
            "Unit testing: Mocha/Chai/Jest",
            "Docker basics",
            "CI/CD pipeline overview (GitHub Actions / Jenkins)",
            "Hosting: Vercel, Netlify, or Render for MERN",
            "Capstone project combining Java or MERN (team-based)",
            "Example: eCommerce platform, Chat app, LMS",
            "Resume & portfolio building, mock interviews",
            "Deploy Java app on a cloud platform (e.g., Heroku or AWS)"
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
const plans = [
    {
        name: 'Program Fees',
        monthlyPrice: '₹3334',
        yearlyPrice: '₹1,20,000',
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
const Java = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <>
            <TitleComp title={"Java Full Stack Course"} />
            <div className="w-full overflow-hidden">
                <div className='flex items-center justify-center flex-col'>
                    <div data-aos="fade-down" className='md:mb-30'>
                        <img src="./images/javamern.svg" alt="" draggable="false" loading='lazy' />
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
                        title: "Java/Mern Full Stack Development",
                        caseProject: "60+",
                        langTool: "16+",
                        liveSession: "280+",
                        image: "./images/ml80img.svg",
                        coursePoint: coursePoint
                    }} />
                </div>
                <div>
                    <h1 className='text-3xl md:text-5xl text-center mt-10 font-[agrandir] lg:w-2/ m-auto'
                        data-aos="zoom-in"
                        data-aos-duration="800">
                        <span className='border-b-2 border-orange-500 inline-block mb-5'>Our Expert</span>
                        <br />
                        <span className='font-bold'>Learn From The real Industry Experts</span>
                    </h1>
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
                    <h2 className="text-2xl text-center lg:w-2/3 my-5 font-bold m-auto">Our Java/Mern Full Stack Development Program offers comprehensive training, hands-on projects, and expert mentorship at an affordable cost with pay after placement option available. Enroll today to jumpstart your career in Our Program!</h2>
                    <div>
                        <PricingBoxes plans={plans} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Java
