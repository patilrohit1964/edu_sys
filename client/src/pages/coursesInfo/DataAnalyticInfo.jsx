import React from 'react';
import { HiringCompanies } from '../Home';
import { ChevronDown, Clock, Plus } from 'lucide-react';
import { useState } from 'react';
const DataAnalyticInfo = () => {
    return (
        <div className="w-full">
            <div className='flex items-center justify-center flex-col'>
                <div>
                    <img src="./images/purple_black.svg" alt="" draggable="false" loading='lazy'/>
                </div>
                <div className='mt-20 sm:mt-5'>
                    <img src="./images/purple_black1.svg" alt="" draggable="false" loading="lazy" />
                </div>
            </div>
            <div>
                <h1 className='text-3xl md:text-5xl text-center mt-10 font-[agrandir] border-8 border-orange-500 lg:w-2/5 m-auto'>Top Hiring Companies</h1>
                <HiringCompanies />
            </div>
            <div className='flex items-center justify-center'>
                <img src="./images/3dimage.svg" alt="" draggable="false" loading='lazy' />
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
            <div className="w-full lg:w-2/5 xl:w-1/3 bg-[#22577A] p-5 sm:p-6 rounded-xl mb-6 lg:mb-0 lg:mr-6">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                    Industry-Aligned Curriculum for Data Science & Analytics With AI Certification
                </h1>

                <p className="mb-6 text-sm sm:text-base">
                    An exhaustive curriculum designed by our industry experts which will help you to get placed in your dream IT company
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
                    {/* Stats Cards */}
                    <div className="bg-white rounded-lg p-4 flex items-center">
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
                            <h3 className="text-black text-lg sm:text-xl font-bold">50+</h3>
                            <p className="text-black text-sm sm:text-base">Case Studies & Projects</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 flex items-center">
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

                    <div className="bg-white rounded-lg p-4 flex items-center">
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
            <div className="w-full lg:w-3/5 xl:w-2/3">
                <div className="space-y-3 sm:space-y-4">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden"
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
                                <div className="p-3 sm:p-4 border-t border-gray-200 bg-gray-50">
                                    <div className="text-gray-700 flex items-start justify-between">
                                        {course.title === "Artificial Intelligence" ? (
                                            <div className="text-black text-sm sm:text-base w-full">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <ul className="list-disc pl-5">
                                                        {course.coursePoints.slice(0, 6).map(el => (
                                                            <li>{el}</li>
                                                        ))}
                                                    </ul>
                                                    <ul className="list-disc pl-5">
                                                        {course.coursePoints.slice(6, 12).map(el => (
                                                            <li>{el}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ) : (
                                            <ul className="text-black list-disc pl-5 font-bold text-base sm:text-lg flex-1">
                                                {course.coursePoints.map(el => (
                                                    <li>{el}</li>
                                                ))}
                                            </ul>
                                        )}
                                        <img
                                            src={course.icon}
                                            alt=""
                                            loading="lazy"
                                            className="w-16 h-16 ml-3 hidden sm:block"
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