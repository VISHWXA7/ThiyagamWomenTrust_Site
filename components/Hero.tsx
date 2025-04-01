"use client";

import { motion } from 'framer-motion';
import Button from './Button';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="max-container padding-container flex flex-col gap-10 py-10 px-6 md:gap-14 md:py-20 md:px-12 xl:flex-row">
      {/* Left Content */}
      <motion.div 
        className="relative z-20 flex flex-1 flex-col xl:w-1/2"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex gap-4 items-start">
          <div className="flex-1 mt-14">
            <motion.h1 
              className="font-extrabold text-4xl leading-tight md:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              Thiyagam <br />
              Women Trust
            </motion.h1>
            <motion.p 
              className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base lg:mt-6 lg:max-w-[500px]"
              variants={itemVariants}
            >
              Thiyagam Women Trust is dedicated to empowering physically challenged rural women by providing self-employment opportunities and fostering independence. With a focus on positivity and gratitude, the trust helps them embrace life's challenges with confidence and determination.
            </motion.p>
          </div>
        </div>
        <motion.div 
          className="flex flex-col gap-4 mt-6 sm:flex-row"
          variants={itemVariants}
        >
          <a
            href="https://youtu.be/EPLY4VdXYig?si=hCJjG3Kpfxb6-u9P"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type="button"
              title="About Us!"
              icon="/play.svg"
              variant="btn_white_text"
            />
          </a>
          {/* Location Button */}
          <a
            href="https://maps.app.goo.gl/N2GVL3dDKx5PYf6k9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline"
          >
            <motion.img
              src="location.png"
              alt="Location"
              width={25}
              height={25}
              className="rounded-md ml-8"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
            <span>Our Location</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Right Content */}
      <motion.div 
        className="relative flex-1 mt-10 xl:mt-0"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[500px] lg:w-[800px]">
          <motion.img
            src="hero.png"
            alt="Thiyagam Women Trust"
            width={650}
            height={650}
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;