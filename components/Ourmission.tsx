"use client";
import React from "react";
import { FaHistory, FaBalanceScale, FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";

const OurMission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.section 
      className="py-20 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3 
          className="text-xl font-medium text-gray-500 uppercase tracking-wide"
          variants={itemVariants}
        >
          Our Commitment
        </motion.h3>
        <motion.h2 
          className="text-5xl font-extrabold mt-2 text-gray-900"
          variants={itemVariants}
        >
          Welcome to Thiyagam
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg leading-relaxed"
          variants={itemVariants}
        >
          Thiyagam is a dedicated organization committed to serving communities, promoting social welfare, and driving positive change through advocacy and support.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16"
          variants={containerVariants}
        >
          {/* Story & History */}
          <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 text-left hover:shadow-xl transition duration-300"
            variants={itemVariants}
            whileHover="hover"
          >
            <FaHistory className="text-yellow-600 text-4xl mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900">Our History</h4>
            <p className="text-gray-600 mt-3 text-lg text-justify hyphens-auto">
              Thiyagam Women Trust began with a mission to uplift challenged women. It has empowered women with disabilities to lead independent and fulfilling lives.
            </p>
          </motion.div>

          {/* Values & Philosophy */}
          <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 text-left hover:shadow-xl transition duration-300"
            variants={itemVariants}
            whileHover="hover"
          >
            <FaBalanceScale className="text-yellow-600 text-4xl mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900">Our Vision</h4>
            <p className="text-gray-600 mt-3 text-lg text-justify hyphens-auto">
              To create a future where physically challenged rural women achieve economic independence, self-contentment, and dignity.
            </p>
          </motion.div>

          {/* Mission & Services */}
          <motion.div 
            className="bg-white shadow-lg rounded-lg p-6 text-left hover:shadow-xl transition duration-300"
            variants={itemVariants}
            whileHover="hover"
          >
            <FaBullseye className="text-yellow-600 text-4xl mb-4" />
            <h4 className="text-2xl font-semibold text-gray-900">Our Mission</h4>
            <p className="text-gray-600 mt-3 text-lg text-justify hyphens-auto">
              Our mission is to empower rural women with disabilities by providing self-employment opportunities and fostering resilience.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurMission;
