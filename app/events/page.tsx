"use client";
import React from "react";
import { motion } from "framer-motion";
import { impactCategories } from "@/constants";

const EventsPage = () => {
  return (
    <motion.div 
      className="min-h-screen text-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto p-6">
        <motion.h1 
          className="text-4xl font-bold mt-5 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Thiyagam - Activities at a glance
        </motion.h1>

        {/* Focus Section */}
        <motion.div 
          className="bg-white shadow-md p-6 rounded-lg mb-10"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <h2 className="text-xl font-semibold mb-2 text-purple-80">
            Focus: Empowering rural women with disabilities.
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 text-justify">
            {[ 
              "Conducting special training programs for Physically Challenged Women (PCW) and also women in distress living in rural areas to promote development opportunities.",
              "Running and maintaining a Tailoring Unit for PCW, enabling training and earning capacity. So far, 65 challenged women have been empowered by the Unit.",
              "Running and maintaining a Free Stay Home for PCW coming from rural areas.",
              "Running a Computer Centre providing skill training in systems to secure immediate employment.",
              "Arranging to provide wheelchairs, three-wheeler scooters, and crutches to PCWs through service organizations.",
              "Providing counseling and referral services on employment and other issues relating to challenged persons.",
              "Thiyagam Self-Help Group formed to encourage self-employment.",
              "Thiyagam Cultural Team formed to spread happiness and awareness.",
              "Thiyagam Narpanbu Kalvi Maiyam (TNKM) runs evening free tuition centers in 10 villages around Madurai to nurture humaneness in students and create role model citizens in every field of society.",
              "Thiyagam solicits your wholehearted guidance, support, and cooperation to reach the unreachable."
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Impact Section */}
        <motion.h1 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Impact - 2008-09
        </motion.h1>
        <motion.div 
          className="bg-white shadow-md p-6 rounded-lg mt-6 mb-10"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventsPage;
