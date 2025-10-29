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
        <h2 className="text-2xl md:text-3xl text-slate-700 text-[42px] font-semibold mb-10">
          Trusted by Leading Companies
        </h2>

        {/* Scrolling wrapper */}
        <div className="relative flex overflow-hidden">
          {/* Fade overlays (optional for edges) */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Infinite loop track */}
          <motion.div
            className="flex space-x-20 flex-shrink-0"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 20, // adjust speed
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
