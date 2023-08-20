import Image from "next/image";
import { Poppins } from "next/font/google";
import React, { useEffect, useState } from "react";
import { motion, Variants, animate, useAnimation } from "framer-motion";
import Link from "next/link";

const inter = Poppins({ weight: ["400"] , subsets: ["devanagari"] });

export default function Home() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const companies = [
    {
      name: "Company A",
      description: "Leading in technology solutions",
      logo: "company-a-logo.jpg",
    },
    {
      name: "Company B",
      description: "Innovative design and development",
      logo: "company-b-logo.jpg",
    },
    // Add more companies as needed
  ];

  useEffect(() => {
    // Function to animate the companies one by one
    const animateCompanies = async () => {
      await animateCompaniesOneByOne(0);
      setIsVisible(true);
    };

    // Recursive function to animate companies with a stagger effect
    const animateCompaniesOneByOne = async (index: any) => {
      if (index < companies.length) {
        await controls.start({ opacity: 1, y: 0 });
        await animateCompaniesOneByOne(index + 1);
      }
    };

    animateCompanies();
  }, []);

  const fadeInUpVariants: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <main
      className={`bg-[#1F1F1F] h-screen ${inter.className} flex items-center flex-col  `}
    >
      <motion.h1
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={variants1}
        className="text-[48px] py-20 
        
        font-bold
        tracking-tighter text-center text-white w-80 flex justify-center mx-auto"
      >
        Your search for the next dream job is over 🚀
      </motion.h1>

      <Link
        href="/jobs"
        className="bg-[#5424FD99] 
        text-white
        group
      hover:filter hover:blur-0
      rounded-[32px] p-[16px] w-[340px] h-[56px] text-[16px] font-bold flex justify-center "
      >
        Start Searching
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          className="ml-2 group-hover:transform group-hover:translate-x-2 transition-all duration-500 ease-in-out"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.93 6.64265L21 12.7126L14.93 18.7826"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 12.7126H20.83"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>

      {/* <div className="flex space-x-2 my-3">
        {companies.map((company: any, index: any) => (
          <motion.div
            key={index}
            custom={index}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            variants={fadeInUpVariants}
            className="w-64"
          >
            <CompanyPill key={index} {...company} />
          </motion.div>
        ))}
      </div> */}
    </main>
  );
}

const CompanyPill = ({ logo, name, description }: any) => {
  return (
    <div className="flex w-[166px] h-[64px] items-center bg-[#FF5A5F] rounded-full py-[10px] px-[25px] shadow-md">
      <img src={logo} className=" rounded-full" />
      <div>
        <h3 className="text-sm font-medium">{name}</h3>
      </div>
    </div>
  );
};
