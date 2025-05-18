import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { HiringCompanies } from '../Home';
import { CarouselSize, CertificationTabs, DataScienceCurriculum, PricingBoxes } from "./DataAnalyticInfo";
import TitleComp from '../../widgets/TitleComp';

const coursePoint = [
    {
        title: "Excel",
        tag: "Data",
        points: [
            "Introduction to Excel",
            "Formula and Function",
            "Formula Referencing",
            "Named Ranges",
            "Table in Excel",
            "AutoFill and Custom Lists",
            "Conditional Formatting",
            "Logical Functions",
            "Reference Functions",
            "Data Validation",
            "Pivot Table",
            "Data Visualization"
        ]
    },
    {
        title: "SQL",
        tag: "Database",
        points: [
            "SQL Launchpad",
            "Crafting SQL Databases (DDL) & Mastering Data Control (DML)",
            "Querying into Data (DQL)",
            "Unlock the Built in Functions",
            "Connecting Data for Insights"
        ]
    },
    {
        title: "POWER BI",
        tag: "Data Visualization",
        points: [
            "Introduction to Power BI",
            "Power BI Desktop & Power Query",
            "Modelling with Power BI",
            "Data Analysis Expressions (DAX)",
            "Data Visualization",
            "Introduction to Power BI Dashboard, Q&A and Data Insights",
            "Power BI Service",
            "Power BI Direct Connectivity"
        ]
    },
    {
        title: "Tableau",
        tag: "Data Visualization",
        points: [
            "Introduction to Tableau",
            "Tableau Shelf and Card",
            "Data Types in Tableau",
            "Connecting to and Preparing Data",
            "Organizing and Simplify Data",
            "Learn Tableau Built-In and Custom Chart",
            "Analytics",
            "Tableau Dashboard",
            "Performance improvement of Dashboard"
        ]
    },
    {
        title: "Python",
        tag: "Backend",
        points: [
            "Introduction to Python",
            "Data Types & Variable",
            "Conditional Statement",
            "Loops in Python",
            "More on Data types",
            "Function and Modules",
            "Object Oriented Programming",
            "File Handling",
            "Regular Expression & Web Scraping"
        ]
    },
    {
        title: "NumPy and Statistical Analysis",
        tag: "NumPy",
        points: [
            "Introduction to NumPy",
            "NumPy Arrays",
            "NumPy Functions",
            "Working with Multiple Dimensions",
            "Characterising Data (Descriptive Statistics)",
            "Predicting from Data (Inferential Statistics)"
        ]
    },
    {
        title: "Applied Data Analysis with Python",
        tag: "Data Analysis",
        points: [
            "Introduction to Pandas",
            "DataFrames Basics",
            "Indexing and Selecting Data",
            "Data Manipulation",
            "Visualising Data",
            "Introduction to Matplotlib",
            "Customizing Plots",
            "Introduction to Seaborn Library"
        ]
    },
    {
        title: "Machine Learning",
        tag: "ML",
        points: [
            "ML Fundamentals",
            "EDA",
            "Linear Regression",
            "Logistic Regression",
            "Decision Tree",
            "Random Forests",
            "Ensemble Techniques",
            "Neighbours (K-NN)",
            "Support Vector Machines (SVM)",
            "PCA",
            "K-means",
            "Hierarchical Clustering"
        ]
    },
    {
        title: "Artificial Intelligence",
        tag: "AI",
        points: [
            "Introduction to AI",
            "Introduction to DL",
            "Artificial Neural Network Deep Dive",
            "Computer Vision",
            "Computer Vision with OpenCV",
            "Convolution Neural Network",
            "Natural Language Processing",
            "Recurrent Neural Network",
            "Building Chatbot",
            "Introduction to Time Series Analysis",
            "Weather Forecasting using ARIMA Model",
            "Sentiment Analysis on Amazon Reviews"
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
const DataSciMl = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <>
            <TitleComp title={"Data Science With Machine Learning"} />
            <div className="w-full overflow-hidden">
                <div className='flex items-center justify-center flex-col'>
                    <div data-aos="fade-down" className='md:mb-30'>
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
                    <img src="./images/ml80img.svg" alt="" draggable="false" loading='lazy' />
                </div>
                <div className='mt-10'>
                    <DataScienceCurriculum courseCurriculumInfo={{
                        title: "Data Science With Machine Learning and AI",
                        caseProject: "80+",
                        langTool: "10+",
                        liveSession: "280+",
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
                    <h2 className="text-2xl text-center lg:w-2/3 my-5 font-bold m-auto">Our Data Science with Machine Learning and A.I  Program offers comprehensive training, hands-on projects, and expert mentorship at an affordable cost with pay after placement option available. Enroll today to jumpstart your career in Our Program!</h2>
                    <div>
                        <PricingBoxes plans={plans} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DataSciMl
