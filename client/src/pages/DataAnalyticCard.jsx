import { Play, FileText, Clock, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function DataAnalyticsCard({
    courseName,
    courseInfo,
    infrollments,
    link,
    projects,
    duration,
    index = 0
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        interest: "Data Science With Analytics and AI"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you! Your brochure will be sent to your email shortly.");
        setShowPopup(false);
        setFormData({ ...formData, name: "", email: "", mobile: "" });
    };

    // Company logos array
    const companyLogos = [
        "./images/google.png",
        "./images/ptm.png",
        "./images/bark.png",
        "./images/netflix.jpeg",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qY9eeSbwLtO_OZtOk16-yItU17QyXJqJ-Q&s"
    ];

    return (
        <div className="max-w-2xl mx-auto">
            <div className="relative p-4 rounded-t-lg">
                {/* Enrollments counter */}
                <div className="absolute top-4 right-[35%]">
                    <div className="bg-white rounded-full py-1 px-3 text-xs flex items-center">
                        <div className="flex -space-x-2 mr-2">
                            {[300, 400, 500].map((shade, i) => (
                                <div key={i} className={`w-5 h-5 rounded-full bg-gray-${shade}`}></div>
                            ))}
                        </div>
                        <span className="text-gray-600 text-xl">{infrollments} enrollments</span>
                    </div>
                </div>

                {/* Main card content */}
                <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Icon */}
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

                        {/* Content */}
                        <div className="flex-grow overflow-hidden">
                            <h2 className="text-2xl font-bold text-gray-800 break-words">{courseName}</h2>
                            <p className="text-gray-500 mt-5">{courseInfo}</p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-4 mt-6">
                                {[
                                    { icon: Play, text: "Live Classes" },
                                    { icon: FileText, text: projects },
                                    { icon: Clock, text: duration }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center text-purple-700">
                                        <item.icon size={18} className="mr-2" />
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Company logos */}
                            <div className="bg-black rounded-lg p-4 mt-6 flex items-center overflow-x-auto">
                                <span className="text-white whitespace-nowrap mr-4">Top Hiring Companies</span>
                                <div className="flex space-x-5 overflow-x-auto items-center">
                                    <Marquee>
                                        {
                                            companyLogos.map((logo, i) => (
                                                <div key={i} className={`${i == 2 ? 'w-20 h-20' : 'w-12 h-12'} flex-shrink-0 flex items-center justify-between mr-5`}>
                                                    <img src={logo} alt="Company logo" className={`h-full w-full object-contain`} />
                                                </div>
                                            ))
                                        }
                                    </Marquee>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                <button
                                    className="border-2 border-purple-700 text-purple-700 py-2 px-4 rounded-lg font-medium hover:bg-purple-50 transition duration-300 flex-1"
                                    onClick={() => setShowPopup(true)}
                                >
                                    Download Brochure
                                </button>
                                <button
                                    className="bg-purple-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-800 transition duration-300 flex-1 flex items-center justify-center"
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

                {/* Tags */}
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
                                    {["name", "email", "mobile"].map((field) => (
                                        <div key={field}>
                                            <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
                                                {field === "name" ? "Full Name" : field === "email" ? "Email Address" : "Mobile Number"}
                                            </label>
                                            <input
                                                type={field === "email" ? "email" : field === "mobile" ? "tel" : "text"}
                                                id={field}
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                placeholder={`Enter your ${field === "name" ? "full name" : field === "email" ? "email address" : "mobile number"}`}
                                                required
                                            />
                                        </div>
                                    ))}

                                    <div>
                                        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
                                        <input
                                            id="interest"
                                            name="interest"
                                            value={formData.interest}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            readOnly
                                        />
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
