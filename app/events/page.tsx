import React from "react";
import { impactCategories } from "@/constants";

const ActivitiesPage = () => {
  return (
    <div className="min-h-screen text-gray-900">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold  mb-6">
          Thiyagam - Activities at a glance
        </h1>

        {/* Focus Section */}
        <div className="bg-white shadow-md p-6 rounded-lg mb-10">
          <h2 className="text-xl font-semibold mb-2">Focus: Empowering rural women with disabilities.</h2>
          <p className="text-lg text-gray-700">
            Conducting special training programs for Physically Challenged Women (PCW) and also women in distress living in rural areas to promote the development opportunities.<br/>
            Running and maintaining a Tailoring Unit for PCW enabling training and earning capacity and so far 65 challenged women have empowered by the Unit.<br/>
            Running and maintaining a Free Stay Home for PCW coming from rural.<br/>
            Running a Computer Centre giving Skill training in the System to secure immediate employment.<br/>
            Arranging to provide Wheel chair, three wheeler scooter and crutches to PCW’s through service organizations.<br/>
            To give counseling and referral service on employment and also other issues relating to Challenged Persons.<br/>
            Thiyagam Self-Help group formed to encourage self employment.<br/>
            Thiyagam Cultural team formed to spread happiness and awareness.<br/>
            Thiyagam Narpanbu Kalvi Maiyam(TNKM) evening free tuition centres in 10 villages around Madurai is running to flower humaneness in students and to create Role Model citizens in every field of our society who will set an example in uprightness, integrity and humaneness.<br/>
            Thiyagam solicits your wholehearted guidance, support and co-operation to reach the unreachable.<br/>
            </p>
        </div>

        {/* Impact Section */}
        <h1 className="text-3xl font-bold  mb-4">
        Impact - 2008-09
        </h1>
        <div className="bg-white shadow-md p-6 rounded-lg mt-6 mb-10">

          {impactCategories.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {category.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
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

export default ActivitiesPage;