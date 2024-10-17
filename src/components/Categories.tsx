import React from "react";
import { PiPenNibLight } from "react-icons/pi";
import { HiArrowRight } from "react-icons/hi";
import { ElementType } from "react";
import { BsFiletypeHtml } from "react-icons/bs";
import { PiMicrophoneStageThin } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";


interface Category {
    id: number;
    name: string;
    icon: ElementType;
}

const categories: Category[] = [
    {
        id: 1,
        name: "Design",
        icon: PiPenNibLight,
    },
    {
        id: 2,
        name: "Development",
        icon: BsFiletypeHtml,
    },
    {
        id: 3,
        name: "Marketing",
        icon: PiMicrophoneStageThin,
    },
    {
        id: 4,
        name: "Business",
        icon: MdWorkOutline,
    },
    
    {
        id: 1,
        name: "Design",
        icon: PiPenNibLight,
    },
    {
        id: 2,
        name: "Development",
        icon: BsFiletypeHtml,
    },
    {
        id: 3,
        name: "Marketing",
        icon: PiMicrophoneStageThin,
    },
    {
        id: 4,
        name: "Business",
        icon: MdWorkOutline,
    },
    {
        id: 1,
        name: "Design",
        icon: PiPenNibLight,
    },
    {
        id: 2,
        name: "Development",
        icon: BsFiletypeHtml,
    },
    {
        id: 3,
        name: "Marketing",
        icon: PiMicrophoneStageThin,
    },
    {
        id: 4,
        name: "Business",
        icon: MdWorkOutline,
    },
];

const PopularCategories: React.FC = () => {
    return (
        <section id="PopularCategories" className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="text-left mb-12">
                    <h1 className="text-4xl font-bold">
                        Most <span className="text-blue-600">Popular Category</span>
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Various versions have evolved over the years, sometimes by accident.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex items-center justify-between bg-white rounded-2xl  p-2 cursor-pointer border hover:border-orange-500 hover:shadow-orange-300 hover:shadow-sm "
                        >
                            <div className="flex items-center space-x-4">
                                <div className=" p-3 rounded-full">
                                    <category.icon className="text-black w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">
                                    {category.name}
                                </h3>
                            </div>

                            <button className=" hover:bg-orange-500 text-orange-500 hover:text-white p-2 rounded-full transform -rotate-45">
                                <HiArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCategories;
