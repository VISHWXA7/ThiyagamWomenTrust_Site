"use client";
import { FEATURES } from '@/constants';
import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
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
      className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat py-10 px-6 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-container relative w-full">
        <div className="z-20 w-full flex flex-col items-center">
          {/* Objectives Section */}
          <motion.h2 
            className="font-bold text-3xl md:text-5xl text-purple-80 mt-10 mb-24 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={itemVariants}
          >
            Our Objectives
          </motion.h2>

          {/* Features List */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
            variants={containerVariants}
          >
            {FEATURES.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg max-w-[600px] mx-auto"
                variants={itemVariants}
                whileHover="hover"
              >
                <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-3">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-sm md:text-base text-gray-700">
                    {feature.description}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
