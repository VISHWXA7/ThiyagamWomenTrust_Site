import { FEATURES } from '@/constants';
import React from 'react';

type FeatureItem = {
  title: string;
  description?: string;
  items?: string[];
};

const FeatureItem = ({ title, description, items }: FeatureItem) => {
  return (
    <div className="flex w-full flex-1 flex-col items-start bg-white shadow-md p-6 rounded-lg mb-6">
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize text-gray-800">
        {title}
      </h2>
      {description && (
        <p className="regular-16 mt-5 text-gray-700">
          {description}
        </p>
      )}
      {items && (
        <ul className="list-disc list-inside mt-5 text-gray-700 space-y-2">
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
    <section className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat py-10">
      <div className="max-container padding-container relative w-full flex">
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          {/* Single Box Container */}
          <div className="bg-white p-8 rounded-lg">
            {/* Title */}
            <h2 className="bold-40 lg:bold-64 text-gray-800 mb-10">Our Objectives</h2>

            {/* List of Features */}
            <ul className="space-y-4">
              {FEATURES.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  <h3 className="bold-20 lg:bold-24 text-gray-800">{feature.title}</h3>
                  <p className="regular-16 mt-2 text-gray-600">{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;