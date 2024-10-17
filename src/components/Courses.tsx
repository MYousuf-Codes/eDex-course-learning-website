// Courses.tsx
import React from "react";
import { FaStar } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const courses = [
    {
        id: 1,
        title: "HTML & CSS for Beginners",
        category: "HTML",
        image: "/01.png",
        rating: 4.5,
        price: "$200",
    },
    {
        id: 2,
        title: "JavaScript Fundamentals",
        category: "Design",
        image: "/02.png",
        rating: 4.8,
        price: "$300",
    },
    {
        id: 3,
        title: "React.js Masterclass",
        category: "Business",
        image: "/03.png",
        rating: 4.7,
        price: "$400",
    },
    {
        id: 4,
        title: "Data Science with Python",
        category: "Business",
        image: "/04.png",
        rating: 4.9,
        price: "$500",
    },
];

const Courses: React.FC = () => {
    return (
        <section id="Courses" className="bg-white py-16">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="text-left mb-12">
                    <h1 className="text-4xl font-bold">
                        Most <span className="text-blue-600">Popular Courses</span>
                    </h1>
                    <p className="text-gray-500 mt-2">Various versions have evolved over the years, sometimes by accident.</p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="max-w-xs mx-auto bg-white rounded-lg shadow-lg  cursor-pointer p-4 relative"
                        >
                            <div className="absolute inset-0 rounded-lg shadow-2xl shadow-black opacity-20" />
                            <div className="relative h-40 w-full">
                                {/* Category Badge */}
                                <span className="absolute top-2 left-2 bg-gray-200 text-gray-700 text-sm font-semibold px-2 py-1 rounded-lg">
                                    {course.category}
                                </span>
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="rounded-t-lg object-cover"
                                />
                            </div>
                            <div className="mt-4 relative z-10">
                                <h3 className="mt-2 text-md font-medium text-gray-900 truncate">{course.title}</h3>
                                <div className="mt-3 flex items-center">
                                    <FaStar className="text-yellow-500" />
                                    <span className="ml-2 text-sm font-medium text-gray-600">({course.rating})</span>
                                </div>
                                <div className="mt-2 flex justify-between items-center">
                                    <p className="text-lg font-bold">{course.price}</p>
                                    <button className="bg-orange-200 hover:bg-orange-500 text-orange-500 hover:text-white p-2 rounded-full transform -rotate-45">
                                        <HiArrowRight className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
