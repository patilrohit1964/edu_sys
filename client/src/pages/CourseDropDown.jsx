import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CourseDropDown() {
    const [position, setPosition] = React.useState("bottom")

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


import { useState } from 'react';
import { ChevronDown, BookOpen, Code, Database, BarChart3, Globe, User, Briefcase, Server, Clock, LineChart } from 'lucide-react';

export function HoverDropdown() {

    const menuCategories = [
        {
            title: "Technical",
            items: [
                { icon: <Code size={20} />, name: 'Web Development', description: 'HTML, CSS, JavaScript' },
                { icon: <Server size={20} />, name: 'Cloud Computing', description: 'AWS, Azure, GCP' },
                { icon: <Database size={20} />, name: 'Data Science', description: 'Python, R, SQL, ML' },
            ]
        },
        {
            title: "Business",
            items: [
                { icon: <LineChart size={20} />, name: 'Data Analytics', description: 'Excel, Tableau, Power BI' },
                { icon: <Briefcase size={20} />, name: 'Investment Banking', description: 'Finance, Valuation, M&A' },
                { icon: <BarChart3 size={20} />, name: 'Business Analysis', description: 'Strategy, Operations' },
            ]
        },
        {
            title: "Trending",
            items: [
                { icon: <Clock size={20} />, name: 'MERN Stack', description: 'MongoDB, Express, React, Node' },
                { icon: <Globe size={20} />, name: 'Java Full Stack', description: 'Spring Boot, Hibernate, React' },
                { icon: <User size={20} />, name: 'UX/UI Design', description: 'Figma, Adobe XD, Sketch' },
            ]
        }
    ];

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="relative">
                {/* Dropdown trigger button */}
                <button
                    className="flex items-center justify-between gap-2 bg-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <span className="text-lg">Explore Categories</span>
                    <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Large rectangular dropdown menu */}
                {isOpen && (
                    <div
                        className="absolute mt-2 left-0 w-full min-w-max bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-10 max-w-6xl"
                        style={{ width: '800px', left: '-350px' }}
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                            <h2 className="text-2xl font-bold mb-1">Popular Categories</h2>
                            <p className="text-blue-100">Find the perfect course from our extensive library</p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 p-6">
                            {menuCategories.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="space-y-4">
                                    <h3 className="font-bold text-lg text-gray-800 border-b border-gray-200 pb-2">{category.title}</h3>

                                    {category.items.map((item, itemIndex) => (
                                        <div
                                            key={itemIndex}
                                            className="flex items-start gap-3 p-3 hover:bg-blue-50 rounded-md transition-colors cursor-pointer"
                                        >
                                            <div className="text-blue-600 mt-1">{item.icon}</div>
                                            <div>
                                                <h4 className="font-medium text-gray-800">{item.name}</h4>
                                                <p className="text-sm text-gray-500">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-200 p-4 bg-gray-50 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <BookOpen size={18} className="text-blue-600" />
                                <span className="text-gray-600">Over 10,000 courses available</span>
                            </div>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                                View All Courses
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}