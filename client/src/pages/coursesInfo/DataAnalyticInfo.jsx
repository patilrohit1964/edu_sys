import React from 'react';
import { HiringCompanies } from '../Home';
import { ChevronDown, Clock, Plus } from 'lucide-react';
import { useState } from 'react';
const DataAnalyticInfo = () => {
    return (
        <div className="w-full">
            <div className='flex items-center justify-center flex-col'>
                <div>
                    <img src="./images/purple_black.svg" alt="" draggable="false" />
                </div>
                <div className='mt-20 sm:mt-5'>
                    <img src="./images/purple_black1.svg" alt="" draggable="false" />
                </div>
            </div>
            <div>
                <h1 className='text-3xl md:text-5xl text-center mt-10 font-[agrandir] border-8 border-orange-500 lg:w-2/5 m-auto'>Top Hiring Companies</h1>
                <HiringCompanies />
            </div>
            <div className='flex items-center justify-center'>
                <img src="./images/3dimage.svg" alt="" draggable="false" />
            </div>
            <div className='h-[900px] mt-10'>
                {/* <div className='h-[632px] w-[350px] bg-[#22577A]'>
                    <h3 className='text-xl'>Industry-Aligned Curriculum for Data Science & Analytics With AI Certification</h3>
                </div> */}
                <DataScienceCurriculum />
            </div>
        </div>
    );
};

export default DataAnalyticInfo;


function DataScienceCurriculum() {
    const [openAccordion, setOpenAccordion] = useState(-1);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? -1 : index);
    };

    const courses = [
        {
            title: "Excel",
            tag: "Data",
            duration: "2.4 Weeks",
            content: "Learn advanced Excel functions, pivot tables, data analysis, and visualization techniques essential for data science.",
            icon: "./images/excel.jpeg"
        },
        {
            title: "SQL",
            tag: "Database",
            duration: "2.8 Weeks",
            content: "Master database querying, data manipulation, joins, subqueries, and database design principles."
        },
        {
            title: "POWER BI",
            tag: "Data Visualization",
            duration: "3.2 Weeks",
            content: "Create interactive dashboards, reports, and visualizations using Power BI's comprehensive suite of tools."
        },
        {
            title: "Tableau",
            tag: "Data Visualization",
            duration: "2.2 Weeks",
            content: "Design interactive data visualizations, dashboards, and stories to communicate insights effectively."
        },
        {
            title: "Python",
            tag: "Backend",
            duration: "3.8 Weeks",
            content: "Learn Python programming fundamentals with focus on data manipulation, control structures, and functions."
        },
        {
            title: "NumPy and Statistical Analysis",
            tag: "NumPy",
            duration: "2.4 Weeks",
            content: "Master numerical computing with NumPy arrays and perform statistical analysis on datasets."
        },
        {
            title: "Applied Data Analysis with Python",
            tag: "Data Analysis",
            duration: "2.4 Weeks",
            content: "Apply Python for real-world data analysis scenarios, including data cleaning, transformation, and exploratory analysis."
        },
        {
            title: "Artificial Intelligence",
            tag: "AI",
            duration: "4.8 Weeks",
            content: "Learn supervised and unsupervised learning algorithms, model evaluation, and implementation with scikit-learn.",
            coursePoints: {

            }
        },
    ];

    return (
        <div className="flex flex-col md:flex-row bg-slate-800 min-h-screen text-white justify-around p-8">
            {/* Left Panel */}
            <div className="w-full md:w-2/6 bg-[#22577A] p-6 md:p-8 rounded-2xl">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">
                    Industry-Aligned Curriculum for Data Science & Analytics With AI Certification
                </h1>

                <p className="mb-8 text-sm md:text-base">
                    An exhaustive curriculum designed by our industry experts which will help you to get placed in your dream IT company
                </p>

                <div className="space-y-6">
                    {/* Stats Cards */}
                    <div className="bg-white rounded-lg p-4 flex items-center">
                        <div className="bg-gray-100 p-3 rounded-full mr-4">
                            <div className="text-blue-800">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-black text-xl font-bold">50+</h3>
                            <p className="text-black">Case Studies & Projects</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 flex items-center">
                        <div className="bg-gray-100 p-3 rounded-full mr-4">
                            <div className="text-blue-800">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-black text-xl font-bold">10+</h3>
                            <p className="text-black">Languages & Tools</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 flex items-center">
                        <div className="bg-gray-100 p-3 rounded-full mr-4">
                            <div className="text-blue-800">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-black text-xl font-bold">260+</h3>
                            <p className="text-black">Live Sessions Hours</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel - Accordion */}
            <div className="w-full md:w-3/5 bg-slate-800 p-4 md:p-6">
                <div className="space-y-4">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden"
                        >
                            <div
                                className="flex justify-between items-center p-4 cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="flex-1">
                                    <div className="flex items-center">
                                        <h3 className="text-black font-medium mr-2">{course.title}</h3>
                                        <span className={`text-xs px-2 py-1 rounded-full ${course.tag === "Data" ? "bg-yellow-300" :
                                            course.tag === "Database" ? "bg-yellow-300" :
                                                course.tag === "Data Visualization" ? "bg-yellow-300" :
                                                    course.tag === "Backend" ? "bg-yellow-300" :
                                                        course.tag === "NumPy" ? "bg-yellow-300" :
                                                            course.tag === "Data Analysis" ? "bg-yellow-300" :
                                                                course.tag === "AI" ? "bg-yellow-300" : "bg-gray-200"
                                            } text-black`}>
                                            #{course.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center text-gray-500">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {/* <span className="text-sm">{course.duration}</span> */}
                                    </div>
                                    <button className="p-1 rounded-full bg-white text-black shadow-sm">
                                        {openAccordion === index ?
                                            <ChevronDown className="w-5 h-5" /> :
                                            <Plus className="w-5 h-5" />
                                        }
                                    </button>
                                </div>
                            </div>

                            {/* Accordion Content */}
                            {openAccordion === index && (
                                <div className="p-4 border-t border-gray-200 bg-gray-50">
                                    <div className="text-gray-700 flex items-center justify-between">
                                        <ul className={`text-black list-disc px-4 ${course.title === "Artificial Intelligence" ? "" : "font-bold "} text-xl w-full `}>
                                            {
                                                course.title === "Artificial Intelligence" ?
                                                    <div className={`flex gap-10 items-center  w-full`}>
                                                        <div>
                                                            <li>Introduction to AI</li>
                                                            <li>Introduction to DL</li>
                                                            <li>Artificial Neural Network Deep Dive</li>
                                                            <li>Computer Vision</li>
                                                            <li>Computer Vision with OpenCV</li>
                                                            <li>Convolution Neural Network</li>
                                                        </div>
                                                        <div>
                                                            <li>Natural Language Processing</li>
                                                            <li>Recurrent Neural Network</li>
                                                            <li>Building Chatbot</li>
                                                            <li>Introduction to Time Series Analysis</li>
                                                            <li>Weather Forecasting using ARIMA Model</li>
                                                            <li>Sentiment Analysis on Amazon Reviews</li>
                                                        </div>
                                                    </div> :
                                                    <>
                                                        <li>Basic</li>
                                                        <li>Intermediate</li>
                                                        <li>Advanced</li>
                                                    </>
                                            }
                                        </ul>
                                        <img src={course.icon} alt="" className='w-2/12 h-2/12' />
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
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