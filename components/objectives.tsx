import { FEATURES } from '@/constants';
import React from 'react';

type FeatureItemProps = {
  title: string;
  description?: string;
  items?: string[];
};

const FeatureItem = ({ title, description, items }: FeatureItemProps) => {
  return (
    <div className="flex flex-col items-start bg-white shadow-md p-6 rounded-lg mb-6">
      <h3 className="font-bold text-lg md:text-xl lg:text-2xl capitalize text-gray-800">
        {title}
      </h3>
      {description && (
        <p className="text-sm md:text-base text-gray-700 mt-2">{description}</p>
      )}
      {items && (
        <ul className="list-disc list-inside mt-3 text-sm md:text-base text-gray-700 space-y-1">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat py-10 px-6 md:px-12">
      <div className="max-container relative w-full">
        <div className="z-20 w-full flex flex-col items-center">

          {/* Mission Section */}
          <h2 className="font-bold text-3xl md:text-5xl text-purple-80 mb-6 text-center">
            Our Purpose
          </h2>
          <div className="p-6 md:p-10 rounded-lg shadow-md font-bold max-w-5xl mx-auto mb-20 text-center">
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
              Empowering the rural women with disabilities to earn their livelihood by creating opportunities 
              for self-employment and providing an environment to take up the challenges of life in an 
              optimistic way with enthusiasm and willpower.
            </p>
            <p className="text-gray-800 text-lg md:text-xl mt-4 leading-relaxed">
              Economic independence of Physically Challenged Rural Women, leading to a self-contented 
              matured life. Every effort will be made to cultivate the spirit of mutual love and service, 
              so that what is realized within the walls of Thiyagam may serve as an example for the right 
              conduct of human life in the outside world.
            </p>
          </div>

          {/* Objectives Section */}
          <h2 className="font-bold text-3xl md:text-5xl text-purple-80 mb-10 text-center">
            Our Objectives
          </h2>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {FEATURES.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
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
