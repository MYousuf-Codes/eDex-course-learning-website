import React from "react";
import Image from "next/image";

interface Instructor {
  id: number;
  image: string;
  name: string;
  role: string;
}

const instructors: Instructor[] = [
  {
    id: 1,
    image: "/001.png", // Replace with actual images
    name: "John Doe",
    role: "UI-UX Design Expert",
  },
  {
    id: 2,
    image: "/002.png", // Replace with actual images
    name: "Jane Smith",
    role: "Social Media Expert",
  },
  {
    id: 3,
    image: "/003.png", // Replace with actual images
    name: "Alex Turner",
    role: "Business Idea Expert",
  },
  {
    id: 4,
    image: "/004.png", // Replace with actual images
    name: "Emily Watson",
    role: "Photography / Expert",
  },
];

const Instructors: React.FC = () => {
  return (
    <section className=" bg-white py-16 m-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold">
            Our <span className="text-blue-600">Best Instructors</span>
          </h1>
          <p className="text-gray-500 mt-2">
            Learn from industry experts who are passionate about teaching.
          </p>
        </div>

        {/* Instructors Grid */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-2xl cursor-pointer shadow-2xl border border-gray-200 hover:shadow-xl transform  transition-transform duration-300"
            >
              <div className="relative w-full h-64 pt-2 pl-3 pr-3 rounded-lg overflow-hidden mx-auto mt-4">
                {/* Instructor Image */}
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="p-4 text-center">
                {/* Instructor Name */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {instructor.name}
                </h3>
                {/* Instructor Role */}
                <p className="text-gray-500 mt-1">{instructor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
