import React from "react";
import { motion } from "framer-motion";

import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.svg";
import logo7 from "../assets/logo7.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const CompanySection = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto text-center overflow-hidden">
        {/* Section Title */}
        <div className="px-4 md:px-0">
          <h2
          className="text-[20px] md:text-[30px] font-bold text-center text-transparent 
  bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-violet-600 
  border border-purple-500/40 w-fit px-8 py-2 mx-auto rounded-full 
  backdrop-blur-md shadow-[0_4px_30px_rgba(168,85,247,0.2)] 
  hover:scale-[1.03] transition-all duration-500 ease-out mb-10 "
        >
          Trusted by Leading Companies
        </h2>
        </div>

        {/* Scrolling wrapper */} 
        <div className="relative flex overflow-hidden">
          {/* Fade overlays (optional for edges) */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Infinite loop track */}
          <motion.div
            className="flex space-x-15 flex-shrink-0"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 35, // adjust speed
              repeat: Infinity,
            }}
          >
            {/* Duplicate the logos twice to create seamless loop */}
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Company logo ${i + 1}`}
                className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
