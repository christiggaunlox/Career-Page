"use client"

import { motion } from 'framer-motion';

const marqueeWords = ["Affirmation", "Growth", "Opportunities"];

const InfiniteMarquee = () => {
  return (
    <div className="relative flex overflow-hidden bg-gradient-to-r from-[#010E28] to-[#04328E] py-5">
      <motion.div
        className="flex whitespace-nowrap"
        // Move from 0 to -50%. 
        // Since we have two identical blocks, when it hits -50%, 
        // it resets to 0% and looks perfectly seamless.
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20, // Increased time to keep it smooth with larger gaps
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* We wrap the words in two identical flex containers */}
        <div className="flex items-center">
          {marqueeWords.map((word, index) => (
            <span
              key={`first-${index}`}
              className="text-white text-3xl md:text-4xl font-medium mx-24 md:mx-32"
            >
              {word}
            </span>
          ))}
        </div>

        {/* This second set is the "buffer" that prevents the vanishing effect */}
        <div className="flex items-center">
          {marqueeWords.map((word, index) => (
            <span
              key={`second-${index}`}
              className="text-white text-3xl md:text-4xl font-medium mx-24 md:mx-32"
            >
              {word}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;