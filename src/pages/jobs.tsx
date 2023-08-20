import JobCard from "@/components/JobCard";
import React from "react";
import { motion } from "framer-motion";
import { Salsa } from "next/font/google";

import SearchInput from "@/components/Search";
import JobCardsLoader from "@/components/Skeleton/JobCards";
import { useFetchJobs } from "@/hooks/useFetchJobs";
import { JobPosting } from "../../interface";

const inter = Salsa({ weight: ["400"], subsets: ["latin"] });

function Jobs() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  const [searchTerm, setSearchTerm] = React.useState<string>("javascript");

  const { data, isLoading, isFetching, refetch } = useFetchJobs(searchTerm);

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
      className={` ${inter.className} h- bg-[#1F1F1F]`}
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

        <SearchInput
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          refetch={refetch}
        />

        {/* <div
          className="grid mt-[24px]
      
      
      grid-cols-1 md:grid-cols-2 
      
      gap-x-[20px] gap-y-[20px]
      lg:grid-cols-3 place-content-evenly"
        >

        <JobCardsLoader />
        <JobCardsLoader />
        <JobCardsLoader />
        <JobCardsLoader />
        <JobCardsLoader />

        </div> */}

        <div
          className="grid mt-[24px]
      
      
      grid-cols-1 md:grid-cols-2 
      
      gap-x-[20px] gap-y-[20px]
      lg:grid-cols-3 place-content-evenly"
        >
          {data && !isFetching
            ? data.data?.map((job: JobPosting) => {
                return <JobCard job={job} key={job.job_id} />;
              })
            : ' "Fetching jobs around the globe ..."'}
        </div>
      </div>
    </motion.div>
  );
}

export default Jobs;
