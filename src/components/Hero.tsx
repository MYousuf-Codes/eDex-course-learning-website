// Hero.tsx
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <section id="Hero" className="bg-[#6176F7] py-20">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20">
                <div className="w-full lg:w-1/2 flex flex-col items-start mb-8 lg:mb-0">
                    <h3 className="text-orange-300 text-xl font-bold mb-2">START TO SUCCESS</h3>
                    <h2 className="text-white text-4xl lg:text-6xl md:text-4xl sm:text-2xl font-semibold leading-tight mb-4">
                        Access to 5000+ Courses from 300 Instructors & Institutions
                    </h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Various versions have evolved over the years, sometimes by accident.
                    </p>

                    <div className="w-full max-w-lg relative">
                        <input
                            type="text"
                            placeholder="What do you want to learn?"
                            className="w-full py-5 px-6 pr-14 rounded-full outline-none"
                        />
                        <button className="absolute h-full w-16 -mr-5 right-4 top-1/2 transform -translate-y-1/2 bg-[#f7a64a] hover:bg-orange-500 text-white rounded-full p-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 16l4.5 4.5M19 11a8 8 0 10-16 0 8 8 0 0016 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <img src="/hero.png" alt="Hero Image" className="w-full h-auto object-cover -mt-32" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
