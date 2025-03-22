import { FEATURES } from '@/constants';
import React from 'react';

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat py-10 px-6 md:px-12">
      <div className="max-container relative w-full">
        <div className="z-20 w-full flex flex-col items-center">
          
          {/* Objectives Section */}
          <h2 className="font-bold text-3xl md:text-5xl text-purple-80 mt-10 mb-24 text-center">
            Our Objectives
          </h2>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {FEATURES.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-[600px] mx-auto">
                <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-3">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-sm md:text-base text-gray-700">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
