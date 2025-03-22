import React from "react";
import { FaHistory, FaBalanceScale, FaBullseye } from "react-icons/fa";

const OurMission = () => {
  return (
    <section className="py-20 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-xl font-medium text-gray-500 uppercase tracking-wide">Our Commitment</h3>
        <h2 className="text-5xl font-extrabold mt-2 text-gray-900">Welcome to Thiyagam</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg leading-relaxed">
          Trust is a premier legal advisory firm dedicated to providing expert representation in all law-related services, ensuring justice and advocacy for all.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {/* Story & History */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left hover:shadow-xl transition duration-300">
            <FaHistory className="text-yellow-600 text-4xl mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900">Our History</h4>
            <p className="text-gray-600 mt-3 text-lg text-justify hyphens-auto">
            Thiyagam Women Trust began with a mission to uplift challenged women. It has empowered women with disabilities to lead independent and fulfilling lives.
            </p>
          </div>

          {/* Values & Philosophy */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left hover:shadow-xl transition duration-300">
            <FaBalanceScale className="text-yellow-600 text-4xl mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900">Our Vision</h4>
            <p className="text-gray-600 mt-3 text-lg text-justify hyphens-auto">
            To create a future where physically challenged rural women achieve economic independence, self-contentment, and dignity.
            </p>
          </div>

          {/* Mission & Services */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-left hover:shadow-xl transition duration-300">
            <FaBullseye className="text-yellow-600 text-4xl mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900">Our Mission</h4>
            <p className="text-gray-600 mt-3 text-lg text-justify hyphens-auto">
            Our mission is to empower rural women with disabilities by providing self-employment opportunities and fostering resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;