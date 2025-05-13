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
import React, { useEffect, useState } from 'react';
import { HiringCompanies } from '../Home';
import { Link } from "react-router-dom";
const DataAnalyticInfo = () => {
    // Initialize AOS
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
                    <img src="./images/analytic.svg" alt="" draggable="false" loading='lazy' />
                </div>
                <div className='mt-20 sm:mt-5' data-aos="fade-up" data-aos-delay="300">
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
};

export default DataAnalyticInfo;

const courseCurriculum = {
    dataSci: {
        title: "Data Science Analytics With AI Certification",
        caseProject: "50+",
        langTool: "8+",
        liveSession: "260+"
    },
    dataSciML: {
        title: "Data Science With Machine Learning and AI",
        caseProject: "80+",
        langTool: "10+",
        liveSession: "280+"
    },
    projectManagementAnalytic: {
        title: "Product Management With Analytics and A.I",
        caseProject: "45+",
        langTool: "6+",
        liveSession: "200+"
    },
    careerCatalyst: {
        title: "Career Catalyst Pro With AI",
        caseProject: "25+",
        langTool: "2+",
        liveSession: "200+"
    }
}
export function DataScienceCurriculum({courseCurriculumInfo}) {
    const [openAccordion, setOpenAccordion] = useState(-1);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            mirror: true,
        });

        // Refresh AOS when accordion state changes
        AOS.refresh();
    }, [openAccordion]);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? -1 : index);
    };

    const courses = [
        {
            title: "Excel",
            tag: "Data",
            duration: "2.4 Weeks",
            content: "Learn advanced Excel functions, pivot tables, data analysis, and visualization techniques essential for data science.",
            icon: "./images/excel.jpeg",
            coursePoints: ["Basic", "Intermediate", "Advanced"]
        },
        {
            title: "SQL",
            tag: "Database",
            duration: "2.8 Weeks",
            content: "Master database querying, data manipulation, joins, subqueries, and database design principles.",
            icon: "./images/excel.jpeg",
            coursePoints: ["Basic", "Intermediate", "Advanced"]
        },
        {
            title: "POWER BI",
            tag: "Data Visualization",
            duration: "3.2 Weeks",
            content: "Create interactive dashboards, reports, and visualizations using Power BI's comprehensive suite of tools.",
            icon: "./images/excel.jpeg",
            coursePoints: ["Basic", "Intermediate", "Advanced"]
        },
        {
            title: "Tableau",
            tag: "Data Visualization",
            duration: "2.2 Weeks",
            content: "Design interactive data visualizations, dashboards, and stories to communicate insights effectively.",
            icon: "./images/excel.jpeg",
            coursePoints: ["Basic", "Intermediate", "Advanced"]
        },
        {
            title: "Python",
            tag: "Backend",
            duration: "3.8 Weeks",
            content: "Learn Python programming fundamentals with focus on data manipulation, control structures, and functions.",
            icon: "./images/excel.jpeg",
            coursePoints: ["Basic", "Intermediate", "Advanced"]
        },
        {
            title: "NumPy and Statistical Analysis",
            tag: "NumPy",
            duration: "2.4 Weeks",
            content: "Master numerical computing with NumPy arrays and perform statistical analysis on datasets.",
            icon: "./images/excel.jpeg",
            coursePoints: ["Basic", "Intermediate", "Advanced"]
        },
        {
            title: "Applied Data Analysis with Python",
            tag: "Data Analysis",
            duration: "2.4 Weeks",
            content: "Apply Python for real-world data analysis scenarios, including data cleaning, transformation, and exploratory analysis.",
            icon: "./images/excel.jpeg",
            coursePoints: ["Basic", "Intermediate", "Advanced"]
        },
        {
            title: "Artificial Intelligence",
            tag: "AI",
            duration: "4.8 Weeks",
            content: "Learn supervised and unsupervised learning algorithms, model evaluation, and implementation with scikit-learn.",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zySmDbLOkdsrzURqDl_Z_psgTM7MgAUUsw&s",
            coursePoints: [
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
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row bg-slate-800 min-h-screen text-white p-4 sm:p-6 lg:p-8">
            {/* Left Panel */}
            <div className="w-full lg:w-2/5 xl:w-1/3 bg-[#22577A] p-5 sm:p-6 rounded-xl mb-6 lg:mb-0 lg:mr-6" data-aos="fade-right" data-aos-duration="1000">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                    Industry-Aligned Curriculum for Data Science With Machine Analytics With AI Certification
                </h1>

                <p className="mb-6 text-sm sm:text-base">
                    An exhaustive curriculum designed by our industry experts which will help you to get placed in your dream IT company
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
                    {/* Stats Cards */}
                    <div className="bg-white rounded-lg p-4 flex items-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="bg-gray-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                            <div className="text-blue-800">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-black text-lg sm:text-xl font-bold">45+</h3>
                            <p className="text-black text-sm sm:text-base">Case Studies & Projects</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 flex items-center" data-aos="fade-up" data-aos-delay="400">
                        <div className="bg-gray-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                            <div className="text-blue-800">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-black text-lg sm:text-xl font-bold">10+</h3>
                            <p className="text-black text-sm sm:text-base">Languages & Tools</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 flex items-center" data-aos="fade-up" data-aos-delay="600">
                        <div className="bg-gray-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                            <div className="text-blue-800">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-black text-lg sm:text-xl font-bold">260+</h3>
                            <p className="text-black text-sm sm:text-base">Live Sessions Hours</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel - Accordion */}
            <div className="w-full lg:w-3/5 xl:w-2/3" data-aos="fade-left" data-aos-duration="1000">
                <div className="space-y-3 sm:space-y-4">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div
                                className="flex justify-between items-center p-3 sm:p-4 cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <h3 className="text-black font-medium text-sm sm:text-base">{course.title}</h3>
                                        <span className={`text-xs px-2 py-1 rounded-full ${["Data", "Database", "Data Visualization", "Backend", "NumPy", "Data Analysis", "AI"].includes(course.tag)
                                            ? "bg-yellow-300"
                                            : "bg-gray-200"
                                            } text-black`}>
                                            #{course.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center ml-2">
                                    <div className="flex items-center text-gray-500 mr-2">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <button className="p-1 rounded-full bg-white text-black shadow-sm">
                                        {openAccordion === index ? (
                                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                                        ) : (
                                            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Accordion Content */}
                            {openAccordion === index && (
                                <div
                                    className="p-3 sm:p-4 border-t border-gray-200 bg-gray-50"
                                    data-aos="fade-down"
                                    data-aos-duration="500"
                                >
                                    <div className="text-gray-700 flex items-start justify-between">
                                        {course.title === "Artificial Intelligence" ? (
                                            <div className="text-black text-sm sm:text-base w-full">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <ul className="list-disc pl-5">
                                                        {course.coursePoints.slice(0, 6).map((el, i) => (
                                                            <li key={i} data-aos="fade-right" data-aos-delay={i * 50}>{el}</li>
                                                        ))}
                                                    </ul>
                                                    <ul className="list-disc pl-5">
                                                        {course.coursePoints.slice(6, 12).map((el, i) => (
                                                            <li key={i} data-aos="fade-left" data-aos-delay={i * 50}>{el}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ) : (
                                            <ul className="text-black list-disc pl-5 font-bold text-base sm:text-lg flex-1">
                                                {course.coursePoints.map((el, i) => (
                                                    <li key={i} data-aos="fade-right" data-aos-delay={i * 100}>{el}</li>
                                                ))}
                                            </ul>
                                        )}
                                        <img
                                            src={course.icon}
                                            alt=""
                                            loading="lazy"
                                            className="w-16 h-16 ml-3 hidden sm:block"
                                            data-aos="zoom-in"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
// 1.80+

export const CertificationTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

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

    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Professional Certifications</h2>

            {/* Tabs */}
            <div className="flex flex-wrp mb-6 border-b overflow-x-auto m-auto md:items-center md:justify-center">
                {certifications.map((cert, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 mr-2 mb-2 rounded-t-lg font-medium transition-colors duration-200 ${activeTab === index
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {cert.name}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="bg-gray-100 rounded-lg p-6">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-4 md:mb-0 md:mr-6">
                        <img
                            src={certifications[activeTab].image}
                            alt={`${certifications[activeTab].name} Certificate`}
                            className={`w-full object-cover rounded-lg shadow-md ${activeTab == 1 ? 'h-[800px]' : ''}`}
                            draggable="false"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">{certifications[activeTab].name}</h3>
                        <p className="text-gray-700">{certifications[activeTab].description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export function CarouselSize() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-4xl m-auto"
        >
            <CarouselContent>
                {[
                    "./images/mentor1.jpg",
                    "./images/mentor2.jpg",
                    "./images/mentor3.jpg",
                    "./images/mentor4.jpg",
                    "./images/mentor5.jpg",
                ].map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-squar items-center justify-center p-6">
                                    <img src={_} alt="" className='object-cover w-full h-full' />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}




export function PricingBoxes() {
    const [billingPeriod, setBillingPeriod] = useState('monthly');

    const toggleBillingPeriod = () => {
        setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly');
    };

    const plans = [
        // {
        //     name: 'Basic',
        //     monthlyPrice: '$9',
        //     yearlyPrice: '$90',
        //     description: 'Perfect for individuals and small projects',
        //     features: [
        //         '1 user',
        //         '5 projects',
        //         '5GB storage',
        //         'Basic support',
        //         'Access to core features'
        //     ],
        //     buttonText: 'Get Started',
        //     featured: false
        // },
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
        // {
        //     name: 'Enterprise',
        //     monthlyPrice: '$99',
        //     yearlyPrice: '$990',
        //     description: 'For large organizations with complex needs',
        //     features: [
        //         'Unlimited users',
        //         'Unlimited projects',
        //         'Unlimited storage',
        //         '24/7 dedicated support',
        //         'Custom integrations',
        //         'Advanced security',
        //         'All features included'
        //     ],
        //     buttonText: 'Contact Sales',
        //     featured: false
        // }
    ];

    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Pricing Header */}
                <div className="text-center mb-12">
                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center ">
                        <span className={`mr-3 text-sm ${billingPeriod === 'monthly' ? 'font-semibold text-gray-900' : 'text-gray-900'}`}>
                            Registration Fees
                        </span>
                        <button
                            type="button"
                            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${billingPeriod === 'yearly' ? 'bg-indigo-600' : 'bg-gray-200'
                                }`}
                            onClick={toggleBillingPeriod}
                        >
                            <span className="sr-only">Toggle billing period</span>
                            <span
                                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${billingPeriod === 'yearly' ? 'translate-x-5' : 'translate-x-0'
                                    }`}
                            />
                        </button>
                        <span className={`ml-3 text-sm ${billingPeriod === 'yearly' ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
                            Total Fees
                        </span>
                    </div>
                </div>

                {/* Pricing Boxes */}
                <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 items-center justify-center">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`rounded-lg shadow-lg divide-y divide-gray-200 ${plan.featured ? 'border-2 border-indigo-600 scale-105 z-10' : 'border border-gray-200'
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 right-6 -mt-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full transform translate-y-0">
                                    Most Popular
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 text-center">{billingPeriod === 'monthly' ? "Registration Fees" : plan.name}</h3>
                                <p className="mt-1 text-sm text-gray-500 text-center">{plan.description}</p>
                                <p className="mt-4 text-center">
                                    <span className="text-4xl font-extrabold text-gray-900">
                                        {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                                    </span>
                                    <span className="text-base font-medium text-gray-500">
                                        /{billingPeriod === 'monthly' ? 'monthly' : ''}
                                    </span>
                                </p>
                                <Link to={"https://pages.razorpay.com/techmindseducation"} target="_blank">
                                    <button
                                        className={`mt-6 w-full py-3 px-4 rounded-md shadow ${plan.featured
                                            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                            : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
                                            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-medium cursor-pointer`}
                                    >
                                        {plan.buttonText}
                                    </button>
                                </Link>
                            </div>
                            <div className="pt-6 pb-8 px-6 text-center">
                                <h4 className="text-xl font-medium text-gray-900 tracking-wide uppercase">Join India's best Job oriented program with Pay after Placement Facility. <br />Pay in 6 to 8 months of No Cost EMI Provided by our Finance Partner</h4>
                                <ul className="mt-6 space-y-4">
                                    {/* {plan.features.map((feature, index) => (
                                        <li key={index} className="flex">
                                            <Check size={20} className="flex-shrink-0 text-green-500" />
                                            <span className="ml-3 text-sm text-gray-500">{feature}</span>
                                        </li>
                                    ))} */}
                                </ul>
                            </div>
                            <div className="flex items-center justify-around">
                                <div><img src="./images/razorpay.jpeg" alt="" /></div>
                                <div><img src="./images/bajaj.jpeg" alt="" /></div>
                                <div><img src="./images/sbi.png" alt="" /></div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}