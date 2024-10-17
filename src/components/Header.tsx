"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { MdLock } from "react-icons/md";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-[#6176F7] py-4 shadow-sm">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image src="/eDex.png" alt="eDex Logo" width={100} height={40} className="h-auto w-auto" />
                    </Link>
                </div>

                {/* Desktop Navbar */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-10 text-lg text-white">
                        <li className="hover:text-[#F77E21]"><Link href="/">Home</Link></li>
                        <li className="hover:text-[#F77E21]"><Link href="/about">About</Link></li>
                        <li className="hover:text-[#F77E21]"><Link href="/courses">Courses</Link></li>
                        <li className="hover:text-[#F77E21]"><Link href="/blog">Blog</Link></li>
                        <li className="hover:text-[#F77E21]"><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>

                {/* Mobile Hamburger Button */}
                <div className="flex items-center md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`absolute top-16 right-0 bg-[#6176F7] w-full md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col items-center space-y-4 text-lg text-white p-4">
                        <li className="hover:text-[#F77E21]"><Link href="/">Home</Link></li>
                        <li className="hover:text-[#F77E21]"><Link href="/about">About</Link></li>
                        <li className="hover:text-[#F77E21]"><Link href="/courses">Courses</Link></li>
                        <li className="hover:text-[#F77E21]"><Link href="/blog">Blog</Link></li>
                        <li className="hover:text-[#F77E21]"><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Login and Signup Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/login" className="flex items-center justify-center space-x-2 px-4 py-2 text-lg text-white rounded-lg hover:text-[#F77E21]">
                        <MdLock className="h-5 w-5" />
                        <span>Login</span>
                    </Link>
                    <Link href="/signup" className="bg-[#ffb157] hover:bg-[#f68d34] text-white px-4 py-2 rounded-full">
                        Sign up for Free
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
