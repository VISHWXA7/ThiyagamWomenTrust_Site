import React from "react";
import { impactCategories } from "@/constants";

const eventsPage = () => {
  return (
    <div className="min-h-screen text-gray-900">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold mt-5 text-purple-80 mb-6 text-center">
          Thiyagam - Activities at a glance
        </h1>

        {/* Focus Section */}
          <div className="bg-white shadow-md p-6 rounded-lg mb-10">
            <h2 className="text-xl font-semibold mb-2 text-purple-80">
              Focus: Empowering rural women with disabilities.
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Conducting special training programs for Physically Challenged Women (PCW) and also women in distress living in rural areas to promote development opportunities.</li>
              <li>Running and maintaining a Tailoring Unit for PCW, enabling training and earning capacity. So far, 65 challenged women have been empowered by the Unit.</li>
              <li>Running and maintaining a Free Stay Home for PCW coming from rural areas.</li>
              <li>Running a Computer Centre providing skill training in systems to secure immediate employment.</li>
              <li>Arranging to provide wheelchairs, three-wheeler scooters, and crutches to PCWs through service organizations.</li>
              <li>Providing counseling and referral services on employment and other issues relating to challenged persons.</li>
              <li>Thiyagam Self-Help Group formed to encourage self-employment.</li>
              <li>Thiyagam Cultural Team formed to spread happiness and awareness.</li>
              <li>Thiyagam Narpanbu Kalvi Maiyam (TNKM) runs evening free tuition centers in 10 villages around Madurai to nurture humaneness in students and create role model citizens in every field of society.</li>
              <li>Thiyagam solicits your wholehearted guidance, support, and cooperation to reach the unreachable.</li>
            </ul>
          </div>

        {/* Impact Section */}
        <h1 className="text-3xl font-bold mb-4 text-purple-80">
        Impact - 2008-09
        </h1>
        <div className="bg-white shadow-md p-6 rounded-lg mt-6 mb-10">

          {impactCategories.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-purple-80 mb-2">
                {category.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default eventsPage;