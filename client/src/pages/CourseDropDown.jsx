import { useState, useRef, useEffect } from 'react';
import { ChevronDown, BookOpen, Code, Database, BarChart3, Globe, User, Briefcase, Server, Clock, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HoverDropdown({ isOpen, setIsOpen }) {
    const dropdownRef = useRef(null);
    const [position, setPosition] = useState({ left: 0, top: 0 });

    // Calculate position based on the "Explore Programs" navigation item
    useEffect(() => {
        // Try to find the "Explore Programs" link
        const exploreLink = document.querySelector('a[href="/explore-programs"]');

        if (exploreLink && isOpen) {
            const rect = exploreLink.getBoundingClientRect();
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Calculate dropdown position
            const left = rect.left + scrollLeft;
            const top = rect.bottom + scrollTop;

            setPosition({ left, top });
        }
    }, [isOpen]);

    // Handle window resize for responsiveness
    useEffect(() => {
        const handleResize = () => {
            if (dropdownRef.current && isOpen) {
                const dropdownWidth = dropdownRef.current.offsetWidth;
                const windowWidth = window.innerWidth;

                // Adjust position if dropdown would extend beyond screen
                if (position.left + dropdownWidth > windowWidth) {
                    const newLeft = Math.max(0, windowWidth - dropdownWidth - 20); // 20px padding
                    setPosition(prev => ({ ...prev, left: newLeft }));
                }
            }
        };

        window.addEventListener('resize', handleResize);
        // Initial check
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen, position.left]);

    const menuCategories = [
        {
            title: "For Non Technical",
            items: [
                { icon: <LineChart size={20} />, name: "Data Science With Analytics and AI", link: '/data-analytics-course' },
                { icon: <Server size={20} />, name: 'Product Management With Analytics and A.I', link: '/product-management-course' },
                { icon: <Database size={20} />, name: 'Investment Banking', link: /* 'Python, R, SQL, ML' */ '' },
            ]
        },
        {
            title: "For Technical Learners",
            items: [
                { icon: <Database size={20} />, name: 'Data Science With Machine Learning and AI', link: '/data-science-ml' },
                { icon: <Globe size={20} />, name: 'Java Full Stack', link: /* 'Finance, Valuation, M&A' */ '' },
                { icon: <BarChart3 size={20} />, name: 'Mern Full Stack', link: /* 'Strategy, Operations' */ '' },
            ]
        },
        {
            title: "Personality Development & Speaking Skills",
            items: [
                { icon: <Clock size={20} />, name: 'Career Catalyst Pro With AI', link: '/career-catalyst-course' },
                { icon: <User size={20} />, name: 'Public Speaking Skills', link: /* 'Spring Boot, Hibernate, React' */ '' },
                // { icon: <User size={20} />, name: 'UX/UI Design', description: 'Figma, Adobe XD, Sketch' },
            ]
        }
    ];

    if (!isOpen) return null;

    return (
        <div
            ref={dropdownRef}
            className="fixed w-full min-w-max bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
            style={{
                left: position.left,
                top: position.top,
                width: window.innerWidth > 1024 ? '800px' : (window.innerWidth > 640 ? '90vw' : '95vw'),
                maxWidth: '800px',
                transform: window.innerWidth <= 640 ? 'translateX(-50%)' : 'none',
                marginLeft: window.innerWidth <= 640 ? '50%' : 0,
            }}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="p-4 md:p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <h2 className="text-xl md:text-2xl font-bold mb-1">Popular Categories</h2>
                <p className="text-blue-100 text-sm md:text-base">Find the perfect course from our extensive library</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6">
                {menuCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-3 md:space-y-4">
                        <h3 className="font-bold text-base md:text-lg text-gray-800 border-b border-gray-200 pb-2">{category.title}</h3>

                        {category.items.map((item, itemIndex) => (
                            <div
                                key={itemIndex}
                                className="flex items-start gap-3 p-2 md:p-3 hover:bg-blue-50 rounded-md transition-colors cursor-pointer"
                            >
                                <div className="text-blue-600 mt-1">{item.icon}</div>
                                <div>
                                    <Link to={item.link}><h4 className="font-medium text-gray-800">{item.name}</h4></Link>
                                    <p className="text-xs md:text-sm text-gray-500">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="border-t border-gray-200 p-3 md:p-4 bg-gray-50 flex flex-col md:flex-row justify-between items-center gap-3">
                <div className="flex items-center gap-2">
                    <BookOpen size={18} className="text-blue-600" />
                    <span className="text-sm text-gray-600">Over 10,000+ Enrollement</span>
                </div>
                {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 rounded-lg font-medium transition-colors w-full md:w-auto">
                    View All Courses
                </button> */}
            </div>
        </div>
    );
}