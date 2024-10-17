import React from 'react';
import Image from 'next/image';

const Promotion: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-20 md:px-16 sm:px-8">
        {/* Left Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
          <Image
            src="/promo.png" // replace with your image path
            alt="Promotion Image"
            width={400} // Adjust width based on image resolution
            height={400} // Adjust height based on image resolution
            className="rounded-full"
          />
        </div>

        {/* Right Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold">
            Join <span className="text-blue-500">World's largest</span> learning platform today
          </h1>
          <p className="text-gray-600 mt-4">
            Start learning by registering for free
          </p>
          <p className="text-gray-500 mt-2">
            Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
            Nam sed imperdiet turpis. In hac habitasse platea dictumst.
            Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
          </p>
          <button className="mt-6 bg-orange-400 text-white font-semibold py-3 px-7 rounded-full shadow-lg hover:bg-orange-600 transition duration-300">
            Sign up for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
