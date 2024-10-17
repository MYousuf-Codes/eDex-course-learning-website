import React from 'react';
import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';

interface Feedback {
    id: number;
    image: string;
    name: string;
    role: string;
    feedback: string;
}

const feedbacks: Feedback[] = [
    {
        id: 1,
        image: '/001.png',
        name: 'Guy Hawkins',
        role: 'UI-UX Designer',
        feedback: 'Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.',
    },
    {
        id: 2,
        image: '/002.png',
        name: 'Guy Hawkins',
        role: 'UI-UX Designer',
        feedback: 'Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.',
    },
    {
        id: 3,
        image: '/003.png',
        name: 'Guy Hawkins',
        role: 'UI-UX Designer',
        feedback: 'Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.',
    },
];

function Feedback() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">
                        Student <span className="text-blue-600">Feedback</span>
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Various versions have evolved over the years, sometimes by accident.
                    </p>
                </div>

                {/* Feedback Cards */}
                <div className="flex items-center justify-between space-x-6">

                    <div className="flex flex-nowrap overflow-hidden space-x-8">
                        {feedbacks.map((feedback) => (
                            <div
                                key={feedback.id}
                                className="bg-white rounded-2xl cursor-pointer shadow-lg border border-gray-50 p-6 w-[350px] h-[300px] relative"
                            >
                                <div className="flex items-center space-x-4">
                                    {/* Feedback Image */}
                                    <Image
                                        src={feedback.image}
                                        alt={feedback.name}
                                        className="w-12 h-12 object-cover rounded-full"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {feedback.name}
                                        </h3>
                                        <p className="text-gray-500">{feedback.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mt-4">{feedback.feedback}</p>
                                <FaQuoteRight className="text-orange-400 absolute top-0 mt-6 right-4 text-3xl" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Feedback;
