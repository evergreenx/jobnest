import JobCard from "@/components/JobCard";
import React from "react";
import { motion } from "framer-motion";
import SearchInput from "@/components/Search";

function Jobs() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="bg-[#1F1F1F]"
    >
      <div
        className="
      
   
    text-white  p-[12px] 
    
    
    max-w-[1440px] mx-auto
    "
      >
        <motion.h1
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="text-[32px] font-bold"
        >
          Find Jobs
        </motion.h1>

        <SearchInput />

        <div
          className="grid mt-[24px]
      
      
      grid-cols-1 md:grid-cols-2 
      
      gap-x-[20px] gap-y-[20px]
      lg:grid-cols-3 place-content-evenly"
        >
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </motion.div>
  );
}

export default Jobs;
