import React from "react";
import { motion } from "framer-motion";

export default function SearchInput() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="h-[44px] px-[16px] w-[320px] rounded-[8px] my-[10px] flex items-center space-x-[12px] bg-[#2B2B2B]"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.58335 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58333C17.5 5.21108 13.9556 1.66667 9.58335 1.66667C5.2111 1.66667 1.66669 5.21108 1.66669 9.58333C1.66669 13.9556 5.2111 17.5 9.58335 17.5Z" stroke="white" stroke-width="1.58463" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3333 18.3333L16.6667 16.6667" stroke="white" stroke-width="1.58463" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


      <input
        type="text"
        placeholder="Search for company or roles..."
        className="w-full bg-[#2B2B2B] placeholder:text-[#fff] outline-none rounded-[8px] text-[#fff] text-sm font-normal"
      />
    </motion.div>
  );
}
