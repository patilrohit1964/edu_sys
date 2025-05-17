import { Play, FileText, Clock, ChevronRight, X, } from "lucide-react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
export default function DataAnalyticsCard({ courseName, courseInfo, infrollments, index, link, projects, duration }) {
    const [isHovered, setIsHovered] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        interest: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Here you would typically send the data to your backend
        alert("Thank you! Your brochure will be sent to your email shortly.");
        setShowPopup(false);
        setFormData({ name: "", email: "", mobile: "", interest: "" });
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="relative p-4 rounded-t-lg">
                <div className="absolute top-4 right-[35%] flex space-x-2">
                    <div className="bg-white rounded-full py-1 px-3 text-xs flex items-center">
                        <div className="flex -space-x-2 mr-2">
                            <div className="w-5 h-5 rounded-full bg-gray-300"></div>
                            <div className="w-5 h-5 rounded-full bg-gray-400"></div>
                            <div className="w-5 h-5 rounded-full bg-gray-500"></div>
                        </div>
                        <span className="text-gray-600 text-xl">{infrollments} enrollments</span>
                    </div>
                </div>

                <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                            <div className="bg-purple-100 rounded-lg p-4 w-32 h-32 flex items-center justify-center">
                                <div className="relative w-20 h-16">
                                    <div className="absolute bottom-0 left-0 w-6 h-8 bg-purple-800 rounded-sm"></div>
                                    <div className="absolute bottom-0 left-8 w-6 h-12 bg-purple-600 rounded-sm"></div>
                                    <div className="absolute bottom-0 left-16 w-6 h-16 bg-purple-500 rounded-sm"></div>
                                    <div className="absolute bottom-4 left-16 w-4 h-4 flex items-center justify-center">
                                        <div className="w-3 h-3 bg-orange-500 transform rotate-45"></div>
                                    </div>
                                    <div className="absolute top-6 left-16 h-6 w-1 bg-purple-800"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow overflow-hidden">
                            <h2 className="text-2xl font-bold text-gray-800 break-words">{courseName}</h2>
                            <p className="text-gray-500 mt-5">
                                {courseInfo}
                            </p>

                            <div className="flex flex-wrap gap-4 mt-6">
                                <div className="flex items-center text-purple-700">
                                    <Play size={18} className="mr-2" />
                                    <span>Live Classes</span>
                                </div>
                                <div className="flex items-center text-purple-700">
                                    <FileText size={18} className="mr-2" />
                                    <span>{projects}</span>
                                </div>
                                <div className="flex items-center text-purple-700">
                                    <Clock size={18} className="mr-2" />
                                    <span>{duration}</span>
                                </div>
                            </div>

                            <div className="bg-black rounded-lg p-4 mt-6 flex items-center overflow-hidden">
                                <span className="text-white">Top Hiring Companies</span>
                                {/* <div className="ml-2 flex space-x-2 border-blue-500">
                                    <div className="w-8 h-8 border-gray-900 rounded-full flex items-center justify-center text-xs text-white font-bold">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="" className="h-full w-full object-contain" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                        <img src="./images/logo4.jpg" alt="" className="h-full w-full object-contain" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                        <img src="./images/logo3.jpg" alt="" className="h-full w-full object-contain" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="" className="h-full w-full object-contain" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qY9eeSbwLtO_OZtOk16-yItU17QyXJqJ-Q&s" alt="" className="h-full w-full object-contain" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full overflow-hidden">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIoTiOTD1A1CILUhNUgKP6y2z67D2BBlQtQ&s" alt="" className="h-full w-full object-contain" />
                                    </div>
                                </div> */}
                                <Marquee pauseOnHover={true} className="flex justify-between items-center">
                                    {
                                        [
                                            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
                                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsf7sBxCpX8MjWR81GUFYERgvVVZzGJkuzg&s",
                                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHQ-hngeukNj7qtlgG9NqH5w5kaxkBtjB8g&s",
                                            "./images/netflix.jpeg",
                                            "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
                                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qY9eeSbwLtO_OZtOk16-yItU17QyXJqJ-Q&s"
                                        ].map(el => (
                                            <div className="w-12 h-12 border-gray-900 rounded-full mr-5">
                                                <img src={el} alt="" className="h-full w-full object-contain" />
                                            </div>
                                        ))
                                    }
                                </Marquee>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                <button
                                    className="border-2 border-purple-700 cursor-pointer text-purple-700 py-2 px-4 rounded-lg font-medium hover:bg-purple-50 transition duration-300 flex-1"
                                    onClick={() => setShowPopup(true)}
                                >
                                    Download Brochure
                                </button>
                                <button
                                    className="bg-purple-700 text-white cursor-pointer py-2 px-4 rounded-lg font-medium hover:bg-purple-800 transition duration-300 flex-1 flex items-center justify-center"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <Link to={link}>Learn More</Link>
                                    <ChevronRight size={20} className={`ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-12 right-4 flex flex-col space-y-2">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-md text-lg font-medium">
                        Limited Seats
                    </div>
                    <div className={`bg-green-400 text-white px-3 py-1 rounded-md text-lg font-medium ${index == 3 ? 'mt-2' : 'mt-10'}`}>
                        30% Off
                    </div>
                </div>
            </div>

            {/* Popup Form */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative animate-fadeIn">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowPopup(false)}
                        >
                            <X size={24} />
                        </button>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Download Data Analytics Brochure</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            placeholder="Enter your email address"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                        <input
                                            type="tel"
                                            id="mobile"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            placeholder="Enter your mobile number"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
                                        <input
                                            id="interest"
                                            name="interest"
                                            // value={formData.interest}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            readonly
                                            value={"Data Science With Analytics and AI"}
                                            required
                                        />
                                            {/* <option value="" disabled>Select your course</option>
                                            <option value="business-analytics">Business Analytics</option>
                                            <option value="data-science">Data Science</option>
                                            <option value="machine-learning">Machine Learning</option>
                                            <option value="data-visualization">Data Visualization</option>
                                            <option value="big-data">Big Data</option> */}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition duration-300"
                                    >
                                        Download Now
                                    </button>
                                </div>

                                <p className="text-xs text-gray-500 mt-4">
                                    By submitting this form, you agree to our privacy policy and terms of service.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}